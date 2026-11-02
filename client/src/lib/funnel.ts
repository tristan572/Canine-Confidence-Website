export const ASSESSMENT_URL =
  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/";
export const CONFIDENT_START_URL =
  "https://canineconfidence.simplybook.net/v2/#packages/6";
export const VIRTUAL_COACHING_URL =
  "https://canineconfidence.simplybook.net/v2/#book/service/10";

export type FunnelDoor = "puppy" | "behaviour" | "walking";
export type ProgramKind = "locked" | "retail" | "single";

export interface FunnelProgram {
  name: string;
  price: string;
  value?: string;
  saving?: string;
  expiry?: string;
  composition: string;
  summary: string;
  benefits?: string[];
  kind: ProgramKind;
}

export const behaviourPrograms: FunnelProgram[] = [
  {
    name: "The Foundation Program",
    price: "$430",
    value: "$460 value",
    saving: "Save $30",
    expiry: "Runs over one week",
    composition: "4 trainer-led sessions + 1 One-on-One Coaching session",
    summary:
      "Engagement, motivation and fulfilment, plus the start of clear communication. I build the foundations with your dog at home and on walks, then coach you to carry them forward.",
    benefits: [
      "4 trainer-led sessions (In-Home Day Train or Walk and Train), followed by 1 coaching session with you",
      "Use the sessions for obedience, foundation skills, behaviour work or fulfilment",
      "A training plan built around the problems you want to solve first",
      "Feedback and video updates so you can see what your dog is learning",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "locked",
  },
  {
    name: "The Connected Companion",
    price: "$1,290",
    value: "$1,380 value",
    saving: "Save $90",
    expiry: "Runs over three weeks",
    composition: "12 trainer-led sessions + 3 One-on-One Coaching sessions",
    summary:
      "A complete communication system and skills you can rely on in everyday life. I train your dog at home and out on walks, help with common behaviour problems and mild to moderate reactivity, and coach you each week so the skills transfer to you.",
    benefits: [
      "15 sessions over three weeks: 4 trainer-led sessions and 1 coaching session each week",
      "A complete communication system your dog understands",
      "Reliable skills practised at home and around everyday distractions",
      "Help with common behaviour problems and mild to moderate reactivity",
      "Feedback and video updates throughout the program",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "locked",
  },
  {
    name: "The Balanced Canine",
    price: "$2,500",
    value: "$2,760 value",
    saving: "Save $260",
    expiry: "Runs over six weeks",
    composition: "24 trainer-led sessions + 6 One-on-One Coaching sessions",
    summary:
      "For severe or long-standing reactivity, multiple triggers, anxiety and aggression. This program works on what is driving the behaviour, with time to change how your dog feels as well as what they do.",
    benefits: [
      "30 sessions over six weeks: 4 trainer-led sessions and 1 coaching session each week",
      "Clear communication that reduces confusion and helps your dog make better choices",
      "Practical handling for calmer walks and easier day-to-day situations",
      "Impulse-control and counter-conditioning work tailored to your dog's triggers",
      "I do the grunt work, then pass the critical information on to you so the results last",
      "Ongoing support, feedback and videos throughout the program",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "locked",
  },
  {
    name: "The Focused Progress Plan",
    price: "$650",
    value: "$700 value",
    saving: "Save $50",
    expiry: "Sessions expire in 6 months",
    composition: "5 One-on-One Private Coaching sessions",
    summary:
      "Achieve the reliable, lasting progress you have been searching for through five personalised coaching sessions built around your goals.",
    benefits: [
      "5 private coaching sessions that can be used for any behaviour or skill",
      "A practical approach built around your dog and the problem in front of us",
      "In-depth teaching of training methods that actually work for your dog",
      "Learn how clarity, connection and play fit into your dog's training",
      "Support from me between sessions",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "retail",
  },
  {
    name: "One-on-One Private Coaching",
    price: "$140",
    composition: "1 private 60-minute coaching session",
    summary:
      "Fully personalised training in your home or a real-world location relevant to your goals. I coach you as the handler, so you leave with skills you can keep using.",
    benefits: [
      "One private session in your home or a public location relevant to your goal",
      "Clear techniques tailored to your individual dog",
      "Practical work on the behaviour or skill that matters most",
      "Coaching that helps you become a more confident handler",
      "Support as you put the training into practice",
    ],
    kind: "single",
  },
  {
    name: "Virtual Coaching and Support",
    price: "$120",
    composition: "1 private 60-minute video call",
    summary:
      "A standalone assessment for clients outside my travel area, or personalised support without the travel time. Use this one-hour video call to fine-tune details, review footage or build a practical training plan.",
    benefits: [
      "A private one-hour video call from wherever you are",
      "Fine-tune training details or work through something that feels stuck",
      "Bounce ideas around and get a second perspective",
      "Build or refine a practical training plan",
    ],
    kind: "single",
  },
];

export const walkingPrograms: FunnelProgram[] = [
  {
    name: "The Real World Reliability Package",
    price: "$375",
    value: "$400 value",
    saving: "Save $25",
    expiry: "Sessions expire in 6 months",
    composition: "5 Walk and Train sessions",
    summary:
      "Move beyond the backyard and achieve true reliability. I train on real walks so your dog's skills are progressively tested where you actually need them.",
    benefits: [
      "5 trainer-led 30-minute Walk and Train sessions",
      "Home pickup included",
      "Obedience and manners practised during real walks",
      "Dedicated loose-lead walking practice",
      "Skills built around traffic, people, dogs and other everyday distractions",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "retail",
  },
  {
    name: "The Adventure Pack",
    price: "$570",
    value: "$600 value",
    saving: "Save $30",
    expiry: "Sessions expire in 6 months",
    composition: "5 Adventure Walk and Training sessions",
    summary:
      "Accelerate your dog's real-world reliability through five varied adventures packed with exploration, fulfilment and integrated skill work.",
    benefits: [
      "5 one-hour adventure outings with training built in",
      "Home pickup included",
      "Recall and impulse-control practice around distractions",
      "Safe exploration, play and fulfilment suited to your dog",
      "Video and feedback after every outing, with useful tips for you",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "retail",
  },
  {
    name: "Walk and Train",
    price: "$80",
    composition: "1 trainer-led 30-minute session",
    summary:
      "Focused trainer-led work on the behaviour that makes walks hard, using the streets and distractions around your home.",
    benefits: [
      "I collect your dog from home and train locally or at a nearby location",
      "Work on the behaviours you choose",
      "Training around the distractions your dog meets on everyday walks",
      "Help carrying indoor skills into outdoor settings",
      "Practice for calmer, more reliable responses outside the home",
      "Training tools and treats included",
    ],
    kind: "single",
  },
  {
    name: "Adventure Walk and Training",
    price: "$120",
    composition: "1 trainer-led 60-minute outing",
    summary:
      "An hour of adventure, exercise and skill work at a local forest, park or beach, chosen to suit your dog.",
    benefits: [
      "Collection from home",
      "A one-hour outing at a local forest, park or beach",
      "A video update after the outing",
      "Time for sniffing, exploration and enrichment",
      "Play and exercise matched to your dog",
      "Obedience practice around everyday distractions",
      "Training tools and treats included",
    ],
    kind: "single",
  },
];

export const confidentStart: FunnelProgram = {
  name: "The Confident Start Program",
  price: "$660",
  expiry: "Sessions expire in 3 months",
  composition: "6 private, in-home puppy coaching sessions for you, your family and your puppy",
  summary:
    "Build confidence, connection and clear communication during your puppy's critical learning period. Get practical help with house training, barking, chewing and settling into life together.",
  benefits: [
    "6 Private In-Home Coaching Sessions for You, Your Family and Your Puppy",
    "Personalised House Training Guidance and Setup",
    "Socialisation and Desensitisation Guidance, With a Socialisation Checklist",
    "The 5 Foundational Manners: Sit, Stay, Come, Place and Loose-Lead Walking Foundations",
    "Toilet Training Tracker to Spot Your Puppy's Patterns",
    "Free Comprehensive 50+ Page Puppy Raising Guide",
  ],
  kind: "retail",
};
