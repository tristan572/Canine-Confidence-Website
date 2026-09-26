// FAQ copy shown on /faq. The page renders from this list and server/seo.ts
// builds the FAQPage JSON-LD from it, so the wording lives in one place.
// Copy is Tristan's approved wording: edit it here, not in the page.

export interface FaqLink {
  text: string;
  href: string;
}

// A paragraph is plain text, or a list of text and internal link segments.
export type FaqParagraph = string | Array<string | FaqLink>;

export interface FaqItem {
  question: string;
  answer: FaqParagraph[];
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What's your method?",
    answer: [
      "I use what the dog in front of me actually needs. Play, food, structure, clear feedback, proper rest, affection. No dogma. The goal is a calm, confident dog and an owner who knows how to lead without overthinking it.",
      "For the longer version, read my blog posts or the PDF \"The Four Building Blocks to A Balanced Dog\".",
    ],
  },
  {
    question: "What if my dog is reactive?",
    answer: [
      "That's a lot of the work I do. Reactive dogs aren't broken. They're either overstimulated, fearful or frustrated. I sort the foundations, then work on the behaviour itself.",
      "If your dog has bitten a human before, mention it on the call. I'll plan accordingly.",
    ],
  },
  {
    question: "Do you use corrections, e-collars or prong collars?",
    answer: [
      "I match the tool to the dog and the owner. Most of what I do is built on play, food, and clear communication. I use mild corrections (lead pressure, water spray, social disappointment) when the dog needs a clearer \"no\" than encouragement alone can give.",
      "I'm trained on e-collars. I introduce them only when the owner is open to it and the dog will genuinely benefit. Prong collars are illegal in Queensland and I don't use them.",
      "If aversives aren't for you, tell me. I'll show you what's possible without them and let you decide.",
    ],
  },
  {
    question: "How long will training take?",
    answer: [
      "It depends on the dog, the goals, and how consistent the practice is at home. Most owners see meaningful change in three to six sessions. Real-world reliability (off-lead, distractions, public spaces) takes longer.",
      "I'll give you a clearer estimate throughout the program.",
    ],
  },
  {
    question: "How often should we train between sessions?",
    answer: [
      "Daily, in short bursts. Two to five minutes per session is enough. Short and frequent beats long and rare.",
    ],
  },
  {
    question: "How often should we book sessions?",
    answer: [
      "Weekly or fortnightly works for coaching sessions. Weekly while you're learning the foundations, fortnightly once you're rolling.",
      "In-home day trains should be 4-5 times a week as I'm doing the hands on training so it needs to be regular for best results.",
    ],
  },
  {
    question: "What about treats? When can we stop using them?",
    answer: [
      "Food is one tool, not the whole toolkit. Once I work out what actually drives your dog (some are food-led, most are play-led underneath), I use that as the primary reward and fade the food over time. The goal is a dog who works with you because the relationship is the reward, not because there's a treat in your hand.",
    ],
  },
  {
    question: "What if it rains?",
    answer: [
      "I work indoors, under cover, or reschedule. I'll let you know on the morning if the weather looks like it'll get in the way.",
    ],
  },
  {
    question: "Where do you work?",
    answer: [
      "I come to you. Most sessions happen at your home or a nearby park or street. Some work moves into the real world (cafes, public spaces) once the foundations are in.",
      "I cover the northside of Brisbane.",
    ],
  },
  {
    question: "What does it cost?",
    answer: [
      [
        "Puppy training is listed on the ",
        { text: "puppy page", href: "/puppy" },
        ". Adult behaviour, obedience, walking and adventure clients start with the Initial Canine Success Assessment ($99).",
      ],
    ],
  },
  {
    question: "What's the cancellation policy?",
    answer: [
      "Cancellations more than 24 hours out reschedule at no cost. Inside 24 hours and no-shows may be charged the full session fee. If something genuinely comes up, text me first and we'll work it out.",
    ],
  },
  {
    question: "Will you judge me or my dog?",
    answer: [
      "No. Most clients have already tried a few things by the time they book me. You're in good company.",
    ],
  },
  {
    question: "What if I can't be consistent?",
    answer: [
      "Be honest with me on the call. A plan you'll actually do beats a perfect plan you won't.",
    ],
  },
  {
    question: "How soon can I start training?",
    answer: [
      "I typically have availability within 1-2 weeks of your initial consultation. For urgent behavioural issues, I may be able to accommodate earlier sessions.",
      "Please note that a minimum of 24 hours notice is required for all bookings.",
    ],
  },
  {
    question: "Do you offer package deals?",
    answer: [
      "Yes. Program prices and inclusions are shown on the Behaviour & Obedience and Adventure & Training pages. I recommend the right adult-dog option after the assessment rather than asking you to choose one blind.",
    ],
  },
  {
    question: "What areas do you service?",
    answer: [
      "Based in Boondall, I service a 20km radius covering North Brisbane and surrounding suburbs. Travel beyond 10km may incur additional charges. I also offer video consultations worldwide for remote training.",
    ],
  },
  {
    question: "What payment methods do you accept?",
    answer: [
      "I accept all major payment methods through my secure online scheduling system. Payment is required upfront before sessions to confirm your booking.",
    ],
  },
  {
    question: "Do I need to be present for training?",
    answer: [
      "Coaching sessions are built around you as much as your dog. If the aim is for you to handle your dog confidently, you need to be part of the session — that's where the skill transfer happens.",
      "Walks and In-home Day Trains don't require you to be present. I work directly with your dog and build the foundations. For Day Train sessions, I'll walk you through what I covered at the end so you can maintain it at home.",
      "When you book, I'll let you know what's needed for your specific service.",
    ],
  },
];

export function faqParagraphText(paragraph: FaqParagraph): string {
  if (typeof paragraph === "string") return paragraph;
  return paragraph
    .map((segment) => (typeof segment === "string" ? segment : segment.text))
    .join("");
}

export function faqAnswerText(item: FaqItem): string {
  return item.answer.map(faqParagraphText).join(" ");
}
