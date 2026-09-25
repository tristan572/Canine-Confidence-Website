"""Original soundtrack for toon.html, played on sampled instruments from the GeneralUser GS
SoundFont (free for commercial music use). Includes real recorded dog barks (GS 'Dog' preset).

Needs: pip install numpy scipy tinysoundfont (use --no-deps for tinysoundfont), and GeneralUser.sf2
(npm package 'generaluser'). Set SF2=/path/to/GeneralUser.sf2.
"""
import os
import numpy as np
import tinysoundfont as tsf
from scipy.io import wavfile
from scipy.signal import fftconvolve

SF = os.environ.get('SF2', 'GeneralUser.sf2')
SR = 44100
DUR = 54.07
BEAT = 0.5          # 120 bpm
BAR = 4 * BEAT
rng = np.random.default_rng(3)


def render(events, programs, gain=-4):
    """events: (time, kind, chan, a, b). kind: on(key, vel) | off(key) | bend(value) | range(semis)."""
    s = tsf.Synth(gain=gain, samplerate=SR)
    sfid = s.sfload(SF)
    for ch, (bank, pre, drums) in programs.items():
        s.program_select(ch, sfid, bank, pre, is_drums=drums)
    out, t = [], 0.0
    for et, kind, ch, a, b in sorted(events, key=lambda e: (e[0], e[1] != 'off')) + [(DUR, 'end', 0, 0, 0)]:
        n = int(round((et - t) * SR))
        if n > 0:
            out.append(np.frombuffer(s.generate(n), dtype=np.float32).reshape(-1, 2).copy()); t += n / SR
        if kind == 'on': s.noteon(ch, a, b)
        elif kind == 'off': s.noteoff(ch, a)
        elif kind == 'bend': s.pitchbend(ch, a)
        elif kind == 'range': s.pitchbend_range(ch, a)
    return np.concatenate(out)


def note(ev, t, ch, key, vel, dur):
    ev.append((t, 'on', ch, key, vel)); ev.append((t + dur, 'off', ch, key, 0))


# ---------------- Music ----------------
GTR, BASS, GLOCK, WHISTLE, PIZZ, DR = 0, 1, 2, 3, 4, 9
music_prog = {GTR: (0, 25, False), BASS: (0, 32, False), GLOCK: (0, 9, False), WHISTLE: (0, 78, False),
              PIZZ: (0, 45, False), DR: (128, 0, True)}
CH = {'F': ([53, 57, 60, 65, 69], 41, 48), 'C': ([48, 52, 55, 60, 64], 36, 43),
      'Dm': ([50, 57, 62, 65, 69], 38, 45), 'Bb': ([46, 53, 58, 62, 65], 34, 41)}
PROG = ['F', 'C', 'Dm', 'Bb']
MEL_A = [[72, 0, 69, 72, 77, 0, 76, 74], [72, 0, 0, 67, 72, 0, 74, 76], [77, 0, 76, 74, 72, 0, 69, 0], [70, 0, 72, 74, 72, 0, 0, 0]]
MEL_B = [[69, 0, 72, 0, 77, 76, 77, 79], [76, 0, 72, 0, 67, 0, 72, 74], [74, 0, 77, 0, 76, 74, 72, 69], [70, 72, 74, 0, 77, 0, 0, 0]]
END = 52.0
NBARS = int(END / BAR)  # 25 full bars before the final hit

ev = []
for bar in range(NBARS):
    t0 = bar * BAR
    name = PROG[bar % 4]
    chord, root, fifth = CH[name]
    full = bar >= 2
    # strummed guitar: D . D U . U D U
    strums = [(0, 'D', 88), (2, 'D', 72), (3, 'U', 60), (5, 'U', 62), (6, 'D', 74), (7, 'U', 58)]
    for k, (e8, d, v) in enumerate(strums):
        ts = t0 + e8 * BEAT / 2
        nxt = strums[k + 1][0] if k + 1 < len(strums) else 8
        dur = (nxt - e8) * BEAT / 2 - 0.02
        notes = chord if d == 'D' else chord[::-1][:4]
        for i, kk in enumerate(notes):
            note(ev, ts + i * 0.011, GTR, kk, v - i * 3, dur)
    # bass
    for beat, key in [(0, root), (1.5, root), (2, fifth), (3, root + 12)]:
        note(ev, t0 + beat * BEAT, BASS, key, 100 if beat == 0 else 84, BEAT * (1.4 if beat == 0 else 0.9))
    # drums
    for e8 in range(8):
        note(ev, t0 + e8 * BEAT / 2, DR, 70, 42 + (8 if e8 % 2 else 0), 0.1)   # shaker
    if full:
        for beat in (0, 2): note(ev, t0 + beat * BEAT, DR, 36, 96, 0.1)
        note(ev, t0 + 2.5 * BEAT, DR, 36, 70, 0.1)
        for beat in (1, 3): note(ev, t0 + beat * BEAT, DR, 39, 78, 0.1)
    if bar >= 10:
        for beat in (1, 3): note(ev, t0 + beat * BEAT, DR, 54, 50, 0.1)
        for beat in (0.5, 1.5, 2.5, 3.5):
            for kk in chord[1:4]: note(ev, t0 + beat * BEAT, PIZZ, kk + 12, 48, 0.2)
    if bar in (2, 10, 18, 22): note(ev, t0, DR, 49, 76, 0.5)
    # melody
    if full:
        mel = (MEL_A if ((bar - 2) // 4) % 2 == 0 else MEL_B)[(bar - 2) % 4]
        for e8, m in enumerate(mel):
            if not m: continue
            ln = 1
            while e8 + ln < 8 and mel[e8 + ln] == 0: ln += 1
            d = ln * BEAT / 2 * 0.95
            note(ev, t0 + e8 * BEAT / 2, GLOCK, m + 12, 78, d)
            if 10 <= bar < 18 or bar >= 22:
                note(ev, t0 + e8 * BEAT / 2, WHISTLE, m, 72, d)
# final hit
for i, kk in enumerate(CH['F'][0]): note(ev, END + i * 0.012, GTR, kk, 95, 1.4)
note(ev, END, BASS, 41, 105, 1.4); note(ev, END, DR, 49, 90, 1.5); note(ev, END, DR, 36, 110, 0.2)
note(ev, END, GLOCK, 89, 85, 1.4); note(ev, END, WHISTLE, 77, 70, 1.2)
music = render(ev, music_prog, gain=-8)

# light room reverb for warmth
ir_n = int(SR * 1.1)
ir = rng.standard_normal((ir_n, 2)) * np.exp(-np.arange(ir_n) / (SR * 0.28))[:, None]
ir /= np.abs(ir).sum(axis=0) / 6
wet = np.stack([fftconvolve(music[:, c], ir[:, c])[: len(music)] for c in range(2)], axis=1)
music = music + wet * 0.18

# ---------------- SFX (sampled instruments) ----------------
HARP, XYL, BELLS, CELESTE, TIMP, SLIDE, KIT = 0, 1, 2, 3, 4, 5, 9
sfx_prog = {HARP: (0, 46, False), XYL: (0, 12, False), BELLS: (0, 14, False), CELESTE: (0, 8, False),
            TIMP: (0, 47, False), SLIDE: (0, 72, False), KIT: (128, 0, True)}
S = {'s1': 0, 's2': 4.55, 's3': 9.5, 's4': 15.25, 's5': 20.2, 's6': 25.15, 's7': 30.1, 's8': 35.05, 's9': 40.0, 's10': 47.05}
fx = [(0, 'range', SLIDE, 12, 0)]

def swirl(t):  # soft, short harp brush for scene transitions
    for i, k in enumerate([65, 69, 72, 77, 81]):
        note(fx, t + i * 0.035, HARP, k, 30, 0.35)

def pop(t, k=84):  # soft, rounded marimba tap, pitched well below the old xylophone
    note(fx, t, XYL, k - 17, 46, 0.2)

def twinkle(t):
    for i, k in enumerate([84, 89, 93, 96]): note(fx, t + i * 0.07, CELESTE, k, 80, 0.5)

def slide(t, up=True, dur=0.4):
    steps = 16
    fx.append((t, 'bend', SLIDE, 0 if up else 16383, 0))
    note(fx, t, SLIDE, 84, 88, dur)
    for i in range(1, steps + 1):
        v = int(16383 * i / steps) if up else int(16383 * (1 - i / steps))
        fx.append((t + dur * i / steps, 'bend', SLIDE, min(16383, v), 0))
    fx.append((t + dur + 0.05, 'bend', SLIDE, 8192, 0))

def thump(t):
    note(fx, t, TIMP, 41, 118, 0.6); note(fx, t, KIT, 36, 110, 0.2)

for k, v in S.items():
    if v > 0: swirl(v - 0.12)
slide(0.12, up=False, dur=0.45); thump(0.62)
for i, x in enumerate((1.4, 1.9, 2.4)): pop(S['s1'] + x, [84, 88, 91][i])
for i, x in enumerate((0.9, 1.4, 1.9)): note(fx, S['s2'] + x, XYL, [84, 88, 91][i] - 17, 22, 0.15)  # extra-soft card pops
for i in range(4): thump(S['s3'] + 1.88 + i * .55)
twinkle(S['s3'] + 4.1)
for s in ('s4', 's5', 's6', 's7'): pop(S[s] + 0.4, 89)
for i, x in enumerate((1.1, 1.6, 2.1)): pop(S['s4'] + x, [84, 88, 91][i])
twinkle(S['s4'] + 2.65)
for i, x in enumerate((1.0, 1.6, 2.2)): pop(S['s5'] + x, [84, 88, 91][i])
pop(S['s6'] + 1.2, 91); note(fx, S['s6'] + 2.0, BELLS, 84, 100, 1.4); note(fx, S['s6'] + 2.0, CELESTE, 96, 90, 1.0)
for i, x in enumerate((1.0, 1.5, 2.0)): pop(S['s7'] + x, [84, 88, 91][i])
twinkle(S['s8'] + 1.2); twinkle(S['s8'] + 1.8)
slide(S['s9'] + 1.0, up=True, dur=0.35); pop(S['s9'] + 2.6, 91)
pop(S['s10'] + 0.2, 89); slide(S['s10'] + 1.55, up=True, dur=0.3); pop(S['s10'] + 2.4, 91); twinkle(S['s10'] + 2.0)
sfx = render(fx, sfx_prog, gain=-6)

# ---------------- Barks (real recorded dog, GS bank 1 preset 123) ----------------
DOG = 0
# barks only at the key moments: tower built, lightbulb, 'joy to live with', final jump
barks = [(S['s3'] + 4.05, 58), (S['s3'] + 4.3, 60),
         (S['s6'] + 2.05, 59),
         (S['s8'] + 0.6, 58), (S['s8'] + 0.85, 60),
         (S['s10'] + 1.7, 59)]
bev = []
for t, k in barks: note(bev, t, DOG, k, 118, 0.45)
bark = render(bev, {DOG: (1, 123, False)}, gain=-2)

def norm(x): return x / max(1e-9, np.abs(x).max())
mix = music / 0.5648 * 0.62 + sfx / 0.4254 * 0.42 + bark / 0.5208 * 0.75
n = len(mix); fl = int(SR * 1.0)
mix[-fl:] *= np.linspace(1, 0, fl)[:, None]
mix = np.tanh(mix * 1.2) / np.tanh(1.2)
mix = mix / np.abs(mix).max() * 0.9
wavfile.write('soundtrack.wav', SR, (mix * 32767).astype(np.int16))
print('ok', len(ev), 'music events,', len(fx), 'sfx events,', len(barks), 'barks')
