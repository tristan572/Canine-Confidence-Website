// Cartoon blue staffy rigs. Two poses: sitting (front-on) and side (walk/run).
const INK = '#1F2036';
const COAT = '#6F8196', COAT_D = '#56667A', COAT_L = '#93A3B6';
const WHITE = '#FAF7F0', MOUTH = '#7A2E3A', TONGUE = '#F28AA0', BLUSH = '#F4A3B4';
const COLLAR = '#2BA6DE', TAG = '#F2B33D';
const S = `stroke="${INK}" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"`;
const L = `fill="none" stroke="${INK}" stroke-width="6" stroke-linecap="round"`;

function sitDogSVG(id) {
  return `
<g id="${id}">
 <g id="${id}-inner">
  <ellipse cx="200" cy="488" rx="170" ry="16" fill="${INK}" opacity=".15"/>
  <g id="${id}-tail"><path d="M282,452 C322,442 348,414 352,382 C354,370 368,374 365,390 C360,428 332,458 290,466 Z" fill="${COAT}" ${S}/></g>
  <ellipse cx="118" cy="428" rx="74" ry="54" fill="${COAT}" ${S}/>
  <ellipse cx="282" cy="428" rx="74" ry="54" fill="${COAT}" ${S}/>
  <path d="M114,268 C94,330 92,400 118,472 L282,472 C308,400 306,330 286,268 C262,236 138,236 114,268 Z" fill="${COAT}" ${S}/>
  <path d="M128,280 C112,340 110,410 130,468 L152,468 C138,410 140,340 152,284 Z" fill="url(#hatch)"/>
  <path d="M170,282 C158,332 170,392 200,432 C230,392 242,332 230,282 C212,270 188,270 170,282 Z" fill="${WHITE}" ${S}/>
  <path d="M140,330 C136,400 138,440 136,468 C134,484 190,486 190,470 C188,440 188,400 190,340 Z" fill="${COAT}" ${S}/>
  <path d="M260,330 C264,400 262,440 264,468 C266,484 210,486 210,470 C212,440 212,400 210,340 Z" fill="${COAT}" ${S}/>
  <path d="M134,466 C134,490 192,492 192,468 C175,462 152,462 134,466 Z" fill="${WHITE}" ${S}/>
  <path d="M266,466 C266,490 208,492 208,468 C225,462 248,462 266,466 Z" fill="${WHITE}" ${S}/>
  <path d="M157,470 L157,482 M173,470 L173,482 M227,470 L227,482 M243,470 L243,482" ${L} stroke-width="4"/>
  <path d="M122,252 C160,276 240,276 278,252 L282,272 C240,298 160,298 118,272 Z" fill="${COLLAR}" ${S}/>
  <circle cx="200" cy="298" r="15" fill="${TAG}" ${S} stroke-width="5"/>
  <g id="${id}-head">
   <g id="${id}-earL"><path d="M112,90 C88,54 50,62 44,102 C44,118 58,124 70,110 C80,100 94,96 118,104 Z" fill="${COAT_D}" ${S}/></g>
   <g id="${id}-earR"><path d="M288,90 C312,54 350,62 356,102 C356,118 342,124 330,110 C320,100 306,96 282,104 Z" fill="${COAT_D}" ${S}/></g>
   <path d="M68,172 C60,92 128,50 200,50 C272,50 340,92 332,172 C328,238 274,268 200,268 C126,268 72,238 68,172 Z" fill="${COAT}" ${S}/>
   <path d="M190,60 C186,94 186,120 182,144 L218,144 C214,120 214,94 210,60 C204,56 196,56 190,60 Z" fill="${WHITE}"/>
   <ellipse cx="200" cy="196" rx="86" ry="52" fill="${COAT_L}" ${S} stroke-width="5"/>
   <ellipse cx="100" cy="200" rx="20" ry="11" fill="${BLUSH}" opacity=".75"/>
   <ellipse cx="300" cy="200" rx="20" ry="11" fill="${BLUSH}" opacity=".75"/>
   <g id="${id}-eyes">
    <ellipse cx="150" cy="130" rx="16" ry="19" fill="${INK}"/><circle cx="144" cy="122" r="6" fill="#fff"/>
    <ellipse cx="250" cy="130" rx="16" ry="19" fill="${INK}"/><circle cx="244" cy="122" r="6" fill="#fff"/>
   </g>
   <g id="${id}-happy" opacity="0"><path d="M132,136 Q150,112 168,136 M232,136 Q250,112 268,136" ${L} stroke-width="8"/></g>
   <g id="${id}-browL"><path d="M130,98 Q150,86 170,96" ${L}/></g>
   <g id="${id}-browR"><path d="M230,96 Q250,86 270,98" ${L}/></g>
   <g id="${id}-mouthOpen">
    <path d="M132,200 C156,258 244,258 268,200 C236,214 164,214 132,200 Z" fill="${MOUTH}" ${S} stroke-width="6"/>
    <g id="${id}-tongue"><path d="M180,214 C176,256 224,256 220,214 C208,222 192,222 180,214 Z" fill="${TONGUE}" ${S} stroke-width="5"/><path d="M200,222 L200,240" ${L} stroke-width="4"/></g>
   </g>
   <g id="${id}-mouthClosed" opacity="0"><path d="M136,200 C164,222 190,220 200,206 C210,220 236,222 264,200" ${L}/></g>
   <g id="${id}-frown" opacity="0"><path d="M165,218 C185,204 215,204 235,218" ${L}/></g>
   <path d="M200,186 L200,200" ${L} stroke-width="5"/>
   <path d="M176,164 C176,150 224,150 224,164 C224,178 210,188 200,188 C190,188 176,178 176,164 Z" fill="${INK}"/>
   <ellipse cx="191" cy="159" rx="7" ry="4" fill="#fff" opacity=".8"/>
  </g>
 </g>
</g>`;
}

function sideDogSVG(id) {
  return `
<g id="${id}">
 <ellipse cx="360" cy="404" rx="210" ry="14" fill="${INK}" opacity=".15" id="${id}-shadow"/>
 <g id="${id}-inner">
  <g id="${id}-legFB"><path d="M222,222 C202,272 232,302 252,327 L248,384 C246,398 286,400 286,388 L284,327 C310,297 324,257 302,222 Z" fill="${COAT_D}" ${S}/></g>
  <g id="${id}-legFF"><path d="M428,232 C422,262 434,300 438,330 L434,386 C433,400 474,400 474,388 L472,330 C480,290 487,257 477,232 Z" fill="${COAT_D}" ${S}/></g>
  <g id="${id}-legBN"><path d="M200,218 C180,270 210,300 230,325 L226,384 C224,398 264,400 264,388 L262,325 C288,295 302,255 280,218 Z" fill="${COAT}" ${S}/><path d="M222,380 C218,402 262,404 260,384 Z" fill="${WHITE}" ${S} stroke-width="5"/></g>
  <g id="${id}-legFN"><path d="M445,230 C440,260 452,300 456,330 L452,386 C451,400 492,400 492,388 L490,330 C498,290 505,255 495,230 Z" fill="${COAT}" ${S}/><path d="M453,382 C450,404 496,404 494,384 Z" fill="${WHITE}" ${S} stroke-width="5"/></g>
  <g id="${id}-tail"><path d="M200,196 C168,196 144,188 126,172 C118,164 126,156 134,162 C152,176 174,182 202,182 Z" fill="${COAT}" ${S}/></g>
  <path d="M205,190 C215,160 280,156 340,160 C400,164 450,150 495,160 C538,172 548,240 508,290 C482,316 430,310 400,296 C370,282 320,270 285,282 C240,298 195,272 195,232 C193,212 197,198 205,190 Z" fill="${COAT}" ${S}/>
  <path d="M405,296 C445,312 485,306 505,290 L498,276 C472,292 442,294 410,281 Z" fill="url(#hatch)"/>
  <path d="M510,196 C534,222 530,262 500,288 C484,262 488,222 510,196 Z" fill="${WHITE}" ${S} stroke-width="5"/>
  <path d="M478,146 C508,156 528,176 536,206 L520,212 C512,186 496,168 470,162 Z" fill="${COLLAR}" ${S} stroke-width="6"/>
  <circle cx="530" cy="218" r="12" fill="${TAG}" ${S} stroke-width="5"/>
  <g id="${id}-head">
   <g id="${id}-ear"><path d="M528,76 C516,42 482,50 480,80 C482,96 502,94 514,86 Z" fill="${COAT_D}" ${S}/></g>
   <path d="M478,130 C474,80 520,52 568,54 C612,56 636,86 640,112 C660,112 678,124 680,146 C682,176 658,196 624,198 C602,200 586,196 570,200 C530,206 484,180 478,130 Z" fill="${COAT}" ${S}/>
   <path d="M628,116 C658,114 676,128 676,148 C676,172 658,188 630,190 C616,176 616,132 628,116 Z" fill="${COAT_L}"/>
   <path d="M556,150 Q582,188 612,170" fill="none" stroke="#1F2036" stroke-width="5" stroke-linecap="round"/><ellipse cx="580" cy="158" rx="15" ry="9" fill="${BLUSH}" opacity=".75"/>
   <g id="${id}-mouth"><path d="M614,172 C630,206 666,202 678,168 C660,180 634,180 614,172 Z" fill="${MOUTH}" ${S} stroke-width="5"/>
    <g id="${id}-tongue"><path d="M628,182 C620,220 652,224 656,184 Z" fill="${TONGUE}" ${S} stroke-width="5"/></g></g>
   <ellipse cx="674" cy="126" rx="15" ry="12" fill="${INK}"/><ellipse cx="668" cy="121" rx="5" ry="3" fill="#fff" opacity=".8"/>
   <g id="${id}-eye"><ellipse cx="578" cy="104" rx="12" ry="14" fill="${INK}"/><circle cx="574" cy="98" r="4.5" fill="#fff"/></g>
   <path d="M562,82 Q578,74 596,82" ${L}/>
  </g>
 </g>
</g>`;
}

const $id = i => document.getElementById(i);
const rot = (a, x, y) => `rotate(${a.toFixed(2)} ${x} ${y})`;

class SitDog {
  constructor(id) { this.id = id; this.p = n => $id(`${id}-${n}`); }
  // place: x,y top-left of the 400x500 box, s scale
  set(t, o = {}) {
    const { x = 0, y = 0, s = 1, sx = 1, sy = 1, tilt = 0, headY = 0, wag = 1, ears = 0, brow = 'normal',
      mouth = 'open', happy = 0, tongue = 1, blink = true, bodyRot = 0 } = o;
    $id(this.id).setAttribute('transform', `translate(${x} ${y}) scale(${s})`);
    this.p('inner').setAttribute('transform', `translate(200 488) rotate(${bodyRot}) scale(${sx} ${sy}) translate(-200 -488)`);
    this.p('tail').setAttribute('transform', rot(Math.sin(t * 15) * 20 * wag, 288, 458));
    this.p('head').setAttribute('transform', `translate(0 ${headY}) ${rot(tilt, 200, 250)}`);
    this.p('earL').setAttribute('transform', rot(-ears * 22 + Math.sin(t * 7) * 2, 104, 96));
    this.p('earR').setAttribute('transform', rot(ears * 22 - Math.sin(t * 7) * 2, 296, 96));
    const b = { normal: [0, 0, 0, 0], confused: [-14, -12, 10, 2], sad: [-16, 0, 16, 0], up: [-6, -14, 6, -14] }[brow];
    this.p('browL').setAttribute('transform', `translate(0 ${b[1]}) ${rot(b[0], 150, 94)}`);
    this.p('browR').setAttribute('transform', `translate(0 ${b[3]}) ${rot(b[2], 250, 94)}`);
    const bl = blink && (t % 3.3) > 3.15 ? 0.1 : 1;
    this.p('eyes').setAttribute('transform', `translate(0 130) scale(1 ${bl * (1 - happy)}) translate(0 -130)`);
    this.p('happy').setAttribute('opacity', happy);
    this.p('mouthOpen').setAttribute('opacity', mouth === 'open' ? 1 : 0);
    this.p('mouthClosed').setAttribute('opacity', mouth === 'smile' ? 1 : 0);
    this.p('frown').setAttribute('opacity', mouth === 'frown' ? 1 : 0);
    this.p('tongue').setAttribute('transform', `translate(0 ${Math.sin(t * 9) * 3 * tongue}) scale(1 ${0.9 + 0.1 * tongue})`);
  }
}

class SideDog {
  constructor(id) { this.id = id; this.p = n => $id(`${id}-${n}`); }
  // gait: 0 stand, speed in cycles/sec, amp in degrees
  set(t, o = {}) {
    const { x = 0, y = 0, s = 1, speed = 2, amp = 20, bounce = 10 } = o;
    const ph = t * speed * Math.PI * 2;
    const sn = Math.sin(ph);
    $id(this.id).setAttribute('transform', `translate(${x} ${y}) scale(${s})`);
    this.p('inner').setAttribute('transform', `translate(0 ${-Math.abs(Math.sin(ph)) * bounce}) ${rot(Math.sin(ph) * amp * 0.06, 330, 250)}`);
    this.p('legFN').setAttribute('transform', rot(sn * amp, 470, 236));
    this.p('legFF').setAttribute('transform', rot(-sn * amp, 452, 236));
    this.p('legBN').setAttribute('transform', rot(-sn * amp, 240, 228));
    this.p('legFB').setAttribute('transform', rot(sn * amp, 262, 232));
    this.p('tail').setAttribute('transform', rot(Math.sin(t * 16) * 22, 200, 190));
    this.p('head').setAttribute('transform', `translate(0 ${Math.sin(ph * 2) * bounce * 0.3}) ${rot(Math.cos(ph) * amp * 0.12, 500, 170)}`);
    this.p('ear').setAttribute('transform', rot(-Math.sin(ph) * amp * 0.5, 520, 88));
    this.p('tongue').setAttribute('transform', rot(Math.sin(ph + 1) * amp * 0.6, 640, 182));
    const bl = (t % 3.1) > 2.96 ? 0.1 : 1;
    this.p('eye').setAttribute('transform', `translate(0 104) scale(1 ${bl}) translate(0 -104)`);
  }
}
