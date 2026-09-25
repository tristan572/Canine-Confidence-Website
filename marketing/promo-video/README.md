# Canine Confidence cartoon promo

`canine-confidence-cartoon.mp4` is a 54-second animated cartoon, 1080×1920 (9:16) at 30fps. It's made for Instagram and Facebook Reels, Stories, TikTok and YouTube Shorts.

The whole video follows a hand-drawn blue staffy with a Canine Confidence blue collar. He has a box head, big cheek muscles, rose ears, a thick neck and a barrel chest. The lines wobble like a sketch, the paper has a texture, and scenes open with a circle reveal.

The soundtrack is original and played on sampled instruments: strummed steel guitar, acoustic bass, glockenspiel, tin whistle, pizzicato strings and a real drum kit. The sound effects use real instruments too: soft harp brushes on transitions, gentle marimba taps for pop-ups, timpani on the block drops, a slide whistle for jumps, and bells and celeste for sparkles. The staffy barks happily at four key moments: the tower is built, the lightbulb, "a joy to live with" and his final jump. The barks are real recorded dog barks. The instruments and barks come from the GeneralUser GS SoundFont, whose licence allows commercial music use. The soundtrack is also saved on its own as `canine-confidence-soundtrack.mp3`.

## Scenes

| Time | Scene | What happens |
|---|---|---|
| 0–4.5s | Hook | The staffy drops in and tilts his head as question marks pop up. "Most dog problems aren't training problems." |
| 4.5–9.5s | The real problems | The staffy looks sad. Three cards pop up: Fulfilment, Relationship, Communication. "Usually all three at once." |
| 9.5–15s | The four blocks | "So I don't lead with obedience." Health, Lifestyle, Clarity and Skills crash down into a tower, the screen shakes, and the staffy hops with each landing. |
| 15–20s | Block 1: Health | The staffy eats from his bowl, then a heart pops. Food ✓, Rest ✓, No pain ✓. "Feels good in their body. A dog in pain can't learn. So I never train over it." |
| 20–25s | Block 2: Lifestyle | Cleo chases a big orange-and-blue kick-fetch-style ball through the park. CHASE! SNIFF! PLAY! "Fulfilled in their mind." |
| 25–30s | Block 3: Clarity | A confused head tilt, then "YES!", and a lightbulb pops. "Knows what you're asking. Confusion creates anxiety. Clarity creates confidence." |
| 30–35s | Block 4: Skills | Cleo walks on a loose lead past Café 63, a dog-friendly local café, with a water bowl and a "Dogs welcome" sign out front. Recall ✓, Loose lead ✓, Place ✓. "Listens in real life." |
| 35–40s | Result | A happy wiggle, floating hearts and sparkles. "Build all four… and you get a dog that's a joy to live with." |
| 40–47s | Proof | The staffy peeks over Amanda C.'s five-star Google review about Murphy the Labrador: "Training our Labrador, Murphy, with Tristan has been one of the best decisions we've made! Murphy has come such a long way thanks to Tristan's guidance, and we've learned so much as owners too." 100+ five-star reviews on Google & Mad Paws. |
| 47–54s | Call to action | The logo pops in. "Build the blocks. Live the balance." Book an Initial Canine Success Assessment, canineconfidence.com.au, 0409 521 358, North Brisbane. |

The copy comes from *The Four Building Blocks to a Balanced Dog*. "100+ five-star reviews" is 33 on Google plus 90+ on Mad Paws (`shared/social-proof.ts`).

## Suggested post caption

> Most dog problems aren't training problems.
>
> Before I teach a single command, I check four things, in order:
>
> 1. Health. Is your dog comfortable in their body?
> 2. Lifestyle. Are their natural drives being met?
> 3. Clarity. Do they understand what you're asking?
> 4. Skills. Do they listen at the park, as well as at home?
>
> Get those four right and you end up with a dog that's calm, confident and a joy to live with.
>
> Want to know which block your dog is missing? Book an Initial Canine Success Assessment at canineconfidence.com.au 🐾
>
> #dogtrainingbrisbane #northbrisbane #balanceddogtraining #canineconfidence #brisbanedogs

## Files

- `toon.html`: every scene, with its text, timing and animation. Open it in a browser to watch a live preview.
- `dog.js`: the staffy character. It has two rigs, sitting (front-on) and side-on (walk/run), with controls for expressions.
- `soundtrack.py`: composes and renders `soundtrack.wav` to match the scene timings. It needs the GeneralUser GS SoundFont (`npm pack generaluser`), which isn't committed because it's 31 MB.
- `render.mjs`: renders the frames to MP4 with Playwright and ffmpeg.

## Re-rendering

```bash
npm i -D playwright                      # once; also needs ffmpeg
pip install numpy scipy && pip install --no-deps tinysoundfont
node render.mjs preview 3 18 50          # still frames at those seconds, for a quick check
FFMPEG=ffmpeg node render.mjs full video.mp4
SF2=/path/to/GeneralUser.sf2 python3 soundtrack.py   # writes soundtrack.wav
ffmpeg -i video.mp4 -i soundtrack.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest canine-confidence-cartoon.mp4
```

If you change the scene lengths in `toon.html`, update the `starts` times in `soundtrack.py` to match.
