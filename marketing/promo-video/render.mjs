import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const FF = process.env.FFMPEG || 'ffmpeg';
const dir = path.dirname(new URL(import.meta.url).pathname);
const mode = process.argv[2] || 'preview';
const times = process.argv.slice(3).map(Number);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto('file://' + dir + '/toon.html?render', { waitUntil: 'networkidle' });
await page.evaluate(async () => { await document.fonts.ready; await window.setBlockImgsReady; });

const shoot = async t => {
  await page.evaluate(async t => {
    window.seek(t);
    await Promise.all([...document.images].map(i => i.decode().catch(() => {})));
  }, t);
  return page.screenshot({ type: 'jpeg', quality: 95 });
};

if (mode === 'preview') {
  for (const t of times) {
    const buf = await shoot(t);
    await import('node:fs').then(fs => fs.writeFileSync(`${dir}/prev_${t}.jpg`, buf));
  }
} else {
  const { DURATION, FPS } = await page.evaluate(() => ({ DURATION: window.DURATION, FPS: window.FPS }));
  const out = process.argv[3] || `${dir}/out.mp4`;
  const ff = spawn(FF, ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-f', 'lavfi', '-i', 'anullsrc=r=48000:cl=stereo', '-shortest',
    '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    '-c:a', 'aac', '-b:a', '128k', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const total = Math.round(DURATION * FPS);
  for (let f = 0; f < total; f++) {
    const buf = await shoot(f / FPS);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (f % 150 === 0) console.log(`frame ${f}/${total}`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log('wrote', out);
}
await browser.close();
