"""Synthesises an original upbeat backing track + cartoon SFX timed to toon.html. No samples used."""
import numpy as np
from scipy.signal import lfilter, butter
from scipy.io import wavfile

SR = 44100
DUR = 52.57
N = int(SR * DUR)
rng = np.random.default_rng(4)
music = np.zeros(N)
sfx = np.zeros(N)

def add(buf, sig, t, gain=1.0):
    i = int(t * SR)
    if i >= N: return
    j = min(N, i + len(sig))
    buf[i:j] += sig[: j - i] * gain

def env(n, a=0.005, d=0.3):
    t = np.arange(n) / SR
    return np.minimum(1, t / a) * np.exp(-t / d)

def midi(m): return 440 * 2 ** ((m - 69) / 12)

def pluck(freq, dur=0.5, bright=0.6):
    n = int(SR * dur); L = int(SR / freq)
    x = np.zeros(n); x[:L] = rng.uniform(-1, 1, L)
    b, a = [1], np.zeros(L + 2); a[0] = 1; a[L] = -0.5 * 0.996; a[L + 1] = -0.5 * 0.996
    y = lfilter(b, a, x)
    bb, aa = butter(2, min(0.99, bright * 8000 / (SR / 2)))
    return lfilter(bb, aa, y) * env(n, 0.002, dur * 0.5)

def kick():
    n = int(SR * 0.25); t = np.arange(n) / SR
    f = 50 + 110 * np.exp(-t * 30)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * 14)

def clap():
    n = int(SR * 0.18); b, a = butter(2, [1200 / (SR / 2), 5000 / (SR / 2)], 'band')
    return lfilter(b, a, rng.uniform(-1, 1, n)) * env(n, 0.001, 0.05) * 2.2

def hat():
    n = int(SR * 0.05); b, a = butter(2, 7000 / (SR / 2), 'high')
    return lfilter(b, a, rng.uniform(-1, 1, n)) * env(n, 0.001, 0.015)

def bass(freq, dur):
    n = int(SR * dur); t = np.arange(n) / SR
    s = np.sin(2 * np.pi * freq * t) + 0.3 * np.sign(np.sin(2 * np.pi * freq * t))
    b, a = butter(2, 600 / (SR / 2))
    return lfilter(b, a, s) * env(n, 0.004, dur * 0.6)

def bell(freq, dur=1.0):
    n = int(SR * dur); t = np.arange(n) / SR
    s = sum(np.sin(2 * np.pi * freq * k * t) * w for k, w in [(1, 1), (2.76, .4), (5.4, .2)])
    return s * env(n, 0.002, dur * 0.35)

# ---------- Music: 120bpm, C G Am F ----------
BEAT = 0.5
chords = [(48, [60, 64, 67, 72]), (43, [59, 62, 67, 71]), (45, [60, 64, 69, 72]), (41, [60, 65, 69, 72])]
arp = [0, 2, 1, 3, 2, 1, 3, 2]
melody = [72, None, 76, 79, None, 76, 74, None, 74, None, 71, 74, None, 79, 76, None,
          72, None, 76, 81, None, 79, 76, None, 77, None, 76, 74, None, 72, 74, None]
end_music = 51.0
bar = 0
t = 0.0
while t < end_music - 0.01:
    root, notes = chords[bar % 4]
    for b in range(4):
        tb = t + b * BEAT
        if tb >= end_music: break
        add(music, kick(), tb, 0.55 if b in (0, 2) else 0.0)
        if b in (1, 3): add(music, clap(), tb, 0.22)
        add(music, hat(), tb + BEAT / 2, 0.12)
        add(music, bass(midi(root) * (2 if b % 2 else 1), BEAT * 0.9), tb, 0.28)
    for k in range(8):
        tk = t + k * BEAT / 2
        if tk >= end_music: break
        add(music, pluck(midi(notes[arp[k]]), 0.45, 0.5), tk, 0.22)
    if bar >= 2:  # bell melody enters after the hook
        for k in range(8):
            m = melody[((bar - 2) % 4) * 8 + k]
            tk = t + k * BEAT / 2
            if m and tk < end_music: add(music, bell(midi(m), 0.6), tk, 0.10)
    t += 4 * BEAT; bar += 1
# final chord
for m in [48, 60, 64, 67, 72]: add(music, pluck(midi(m), 1.6, 0.5), end_music, 0.25)
add(music, bell(midi(84), 1.5), end_music, 0.15)
add(music, kick(), end_music, 0.5)

# ---------- SFX ----------
def pop(pitch=1.0):
    n = int(SR * 0.09); t = np.arange(n) / SR
    f = (500 + 1400 * t / t[-1]) * pitch
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.002, 0.03)

def boing():
    n = int(SR * 0.45); t = np.arange(n) / SR
    f = 180 + 120 * np.exp(-t * 6) + 40 * np.sin(2 * np.pi * 14 * t) * np.exp(-t * 5)
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, 0.003, 0.18)

def thud():
    n = int(SR * 0.22); t = np.arange(n) / SR
    f = 40 + 80 * np.exp(-t * 25)
    b, a = butter(2, 900 / (SR / 2))
    return (np.sin(2 * np.pi * np.cumsum(f) / SR) + 0.4 * lfilter(b, a, rng.uniform(-1, 1, n))) * env(n, 0.001, 0.07)

def whoosh():
    n = int(SR * 0.4); t = np.arange(n) / SR
    b, a = butter(2, [400 / (SR / 2), 3000 / (SR / 2)], 'band')
    sw = np.sin(np.pi * t / t[-1]) ** 2
    return lfilter(b, a, rng.uniform(-1, 1, n)) * sw * 1.5

def twinkle():
    out = np.zeros(int(SR * 0.5))
    for i, m in enumerate([88, 91, 96]):
        s = bell(midi(m), 0.35); j = int(i * 0.06 * SR); out[j:j + len(s)] += s[: len(out) - j]
    return out

def ding():
    a = bell(midi(88), 1.4); b = bell(midi(95), 1.4)
    return a + 0.5 * b

starts = {'s1': 0, 's2': 4.55, 's3': 9.5, 's4': 15.25, 's5': 20.2, 's6': 25.15, 's7': 30.1, 's8': 35.05, 's9': 40.0, 's10': 45.55}
for k, v in starts.items():
    if v > 0: add(sfx, whoosh(), v - 0.05, 0.35)
S = starts
ev = []
ev += [(0.62, thud, .8), (0.66, boing, .5)]
ev += [(S['s1'] + x, pop, .45) for x in (1.4, 1.9, 2.4)]
ev += [(S['s2'] + x, pop, .45) for x in (0.9, 1.4, 1.9)]
ev += [(S['s3'] + 1.88 + i * .55, thud, .9) for i in range(4)]
ev += [(S['s3'] + 4.1, twinkle, .35)]
for s in ('s4', 's5', 's6', 's7'):
    ev += [(S[s] + 0.4, pop, .5)]
ev += [(S['s4'] + x, pop, .4) for x in (1.1, 1.6, 2.1)] + [(S['s4'] + 2.65, twinkle, .35)]
ev += [(S['s5'] + x, pop, .45) for x in (1.0, 1.6, 2.2)]
ev += [(S['s6'] + 1.2, pop, .5), (S['s6'] + 2.0, ding, .35)]
ev += [(S['s7'] + x, pop, .4) for x in (1.0, 1.5, 2.0)]
ev += [(S['s8'] + x, twinkle, .25) for x in (1.2, 1.5, 1.8)]
ev += [(S['s9'] + 1.0, boing, .5), (S['s9'] + 2.6, pop, .5)]
ev += [(S['s10'] + 0.2, pop, .5), (S['s10'] + 1.6, boing, .45), (S['s10'] + 2.4, pop, .5), (S['s10'] + 2.0, twinkle, .3)]
for i, (tt, fn, g) in enumerate(ev):
    sig = fn(1.0 + (i % 3) * 0.08) if fn is pop else fn()
    add(sfx, sig, tt, g)

mix = music * 0.8 + sfx
fade = np.ones(N); fl = int(SR * 1.2); fade[-fl:] = np.linspace(1, 0, fl)
mix *= fade
mix = np.tanh(mix * 1.1) / np.tanh(1.1)
mix /= max(1e-9, np.abs(mix).max()) / 0.89
st = np.stack([mix, mix], axis=1)
wavfile.write('soundtrack.wav', SR, (st * 32767).astype(np.int16))
print('ok', len(ev), 'sfx')
