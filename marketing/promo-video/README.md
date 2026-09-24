# Canine Confidence promo video

`canine-confidence-promo-vertical.mp4` is 54 seconds long, 1080×1920 (9:16) at 30fps. It's made for Instagram and Facebook Reels, Stories, TikTok and YouTube Shorts.

The audio track is silent. Add a licensed track from the Instagram, TikTok or CapCut music library when you post.

## Script (on-screen text)

| Time | Scene | Text |
|---|---|---|
| 0–4.5s | Tug play | Most dog problems aren't training problems. |
| 4.5–9s | Walking the path | They're fulfilment, relationship or communication problems. Usually all three at once. |
| 9–15s | Block tower builds | So I don't lead with obedience. I build the four foundations underneath it. In order. |
| 15–20s | Block 1: Health | Feels good in their body. Diet, sleep, and pain checked first. A dog in pain can't learn, so I never train over it. |
| 20–25s | Block 2: Lifestyle | Fulfilled in their mind. Chase, sniff, tug, problem-solve. Meet your dog's natural drives and the restlessness drops away. |
| 25–30s | Block 3: Clarity | Knows what you're asking. Clear markers, a calm lead, predictable rules. Confusion creates anxiety. Clarity creates confidence. |
| 30–35s | Block 4: Skills | Listens in real life. Sit, recall, loose lead, place. Proofed at the park and the café as well as the kitchen. |
| 35–40s | Tristan with dog | Build all four, and you get a dog that's a joy to live with. Calm at home. Confident out in the world. |
| 40–47s | Review | "Lyla's confidence around other dogs and in following instructions has improved a lot. I didn't feel judged once." Alex C. & Lyla the Malamute. 100+ five-star reviews on Google & Mad Paws. |
| 47–54s | Call to action | Build the blocks. Live the balance. Book an Initial Canine Success Assessment. canineconfidence.com.au · 0409 521 358 · North Brisbane |

The copy comes from *The Four Building Blocks to a Balanced Dog*. The review is Alex C.'s Google review. "100+ five-star reviews" is 33 on Google plus 90+ on Mad Paws (`shared/social-proof.ts`).

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

## Editing and re-rendering

All the text, timings and photos are in `promo.html`. Open it in a browser to watch a live preview.

To render a new MP4 you need Node, Playwright and ffmpeg:

```bash
npm i -D playwright            # once
FFMPEG=/path/to/ffmpeg node render.mjs full canine-confidence-promo-vertical.mp4
node render.mjs preview 5 20 50   # saves still frames at those seconds for a quick check
```
