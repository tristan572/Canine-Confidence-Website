// The blog filter shows these few topics instead of every tag. A post sits in
// each topic that any of its tags maps to; broad tags like "training" or
// "Brisbane" map to none.
export const BLOG_TOPICS = [
  {
    name: "Puppies",
    tags: ["puppy", "puppies", "puppy training", "socialisation", "adolescence", "development", "cavoodle"],
  },
  {
    name: "Walks & recall",
    tags: ["walks", "loose lead walking", "lead pulling", "leash walking", "recall", "come when called", "scavenging", "eating rubbish on walks", "distractions", "generalisation"],
  },
  {
    name: "Behaviour problems",
    tags: ["barking", "fence", "jumping", "front door", "greetings", "destructive behaviour", "fear", "reactivity", "unmet needs", "stubbornness", "impulse control", "calm", "settle", "confidence"],
  },
  {
    name: "Play & motivation",
    tags: ["play", "tug", "flirt pole", "engagement", "motivation", "food lures", "let go", "enrichment", "mental stimulation", "mental fulfilment"],
  },
  {
    name: "Training basics",
    tags: ["markers", "communication", "verbal cues", "reinforcement", "punishment", "consistency", "boundaries", "obedience", "tools", "equipment", "quick tips", "foundations", "foundation"],
  },
  {
    name: "My method",
    tags: ["four building blocks", "framework", "balance", "genetics", "breed drives", "health", "lifestyle", "clarity", "skills", "fulfillment", "wellness", "dog psychology"],
  },
] as const;

export function postInTopic(tags: string[] | null | undefined, topic: string): boolean {
  const match = BLOG_TOPICS.find((t) => t.name === topic);
  if (!match || !tags) return false;
  const wanted: readonly string[] = match.tags;
  return tags.some((tag) => wanted.includes(tag.toLowerCase()));
}
