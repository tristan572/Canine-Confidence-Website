export const ASSESSMENT_URL =
  "https://canineconfidence.simplybook.net/v2/#book/service/16/count/1/";
export const CONFIDENT_START_URL =
  "https://canineconfidence.simplybook.net/v2/#packages/6";

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
    price: "$320",
    value: "$365 value",
    saving: "Save $45",
    expiry: "Sessions expire in 2 weeks",
    composition: "4 In-Home Day Trains + 1 One-on-One Private Coaching session",
    summary:
      "Focused training brought to your doorstep. I build the foundations with your dog in their familiar home, then coach you to carry those skills forward.",
    benefits: [
      "4 private in-home Day Train sessions, followed by 1 private coaching session with you",
      "Use the sessions for obedience, foundation skills, behaviour work or fulfilment",
      "A training plan built around the problems you want to solve first",
      "Feedback and video updates so you can see what your dog is learning",
    ],
    kind: "locked",
  },
  {
    name: "The Connected Companion Walk",
    price: "$350",
    value: "$405 value",
    saving: "Save $55",
    expiry: "Each block expires in 2 weeks",
    composition: "4 Walk and Trains + 1 One-on-One Private Coaching session",
    summary:
      "Stop the struggle and start enjoying your walks. I build focus, connection and clear communication around the distractions that usually make everything fall apart.",
    benefits: [
      "5 targeted sessions: 4 trainer-led walks and 1 coaching session with you",
      "Focus and obedience practised while your dog moves through everyday distractions",
      "Lead handling that works when your dog pulls towards something",
      "A tailored plan to improve how your dog feels about the collar and lead",
      "I keep working until the main walking goal is met",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "locked",
  },
  {
    name: "From Chaos to Calm Program",
    price: "$1,050",
    value: "$1,135 value",
    saving: "Save $85",
    expiry: "Sessions expire in 5 weeks",
    composition:
      "4 In-Home Day Trains + 8 Walk and Trains + 3 One-on-One Private Coaching sessions",
    summary:
      "Stop the barking, lunging and anxiety, and start enjoying your life together. This intensive program addresses what is driving the reactivity instead of only managing the visible behaviour.",
    benefits: [
      "Focused sessions aimed at steady behaviour change",
      "Clear communication that reduces confusion and helps your dog feel safer",
      "Practical handling for safer walks and calmer day-to-day situations",
      "Impulse-control and counter-conditioning work tailored to your dog's triggers",
      "A personalised plan with clear practice between sessions",
      "Ongoing support from me throughout the program",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "locked",
  },
  {
    name: "The Focused Progress Plan",
    price: "$550",
    value: "$625 value",
    saving: "Save $75",
    expiry: "Sessions expire in 6 months",
    composition: "5 One-on-One Private Coaching sessions",
    summary:
      "Achieve the reliable, lasting progress you have been searching for through five personalised coaching sessions built around your goals.",
    benefits: [
      "5 private coaching sessions that can be used for any behaviour or skill",
      "A practical approach built around your dog and the problem in front of us",
      "Learn how clarity, connection and play fit into your dog's training",
      "Support from me between sessions",
      "Free guide: 'The Four Building Blocks of a Balanced Dog'",
    ],
    kind: "retail",
  },
  {
    name: "One-on-One Private Coaching",
    price: "$125",
    composition: "1 private 60-minute coaching session",
    summary:
      "Fully personalised training in your home or a real-world location relevant to your goals. I coach you as the handler, so you leave with skills you can keep using.",
    benefits: [
      "One private session in your home or a public location relevant to your goal",
      "Clear techniques you can use with your own dog",
      "Practical work on the behaviour or skill that matters most",
      "Coaching that helps you become a more confident handler",
      "Support as you put the training into practice",
    ],
    kind: "single",
  },
  {
    name: "Virtual Coaching and Support",
    price: "$100",
    composition: "1 private 60-minute video call",
    summary:
      "Get personalised answers and support without the travel time. Ideal for video review, skill refinement, specific problem-solving or planning your next steps.",
    benefits: [
      "A private one-hour video call from home",
      "Review footage and work through a specific problem",
      "Clear guidance matched to your dog and circumstances",
      "Follow-up support after the call",
    ],
    kind: "single",
  },
];

export const walkingPrograms: FunnelProgram[] = [
  {
    name: "The Real World Reliability Package",
    price: "$325",
    value: "$350 value",
    saving: "Save $25",
    expiry: "Sessions expire in 6 months",
    composition: "5 Walk and Train sessions",
    summary:
      "Move beyond the backyard and achieve true reliability. I train on real walks so your dog's skills are progressively tested where you actually need them.",
    benefits: [
      "5 trainer-led 40-minute Walk and Train sessions",
      "Home pickup included",
      "Obedience and manners practised during real walks",
      "Dedicated loose-lead walking practice",
      "Skills built around traffic, people, dogs and other everyday distractions",
    ],
    kind: "retail",
  },
  {
    name: "The Adventure Pack",
    price: "$425",
    value: "$450 value",
    saving: "Save $25",
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
    ],
    kind: "retail",
  },
  {
    name: "Walk and Train",
    price: "$70",
    composition: "1 trainer-led 40-minute session",
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
    price: "$90",
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
  {
    name: "Local Walk",
    price: "$45",
    composition: "1 local 30-minute walk",
    summary:
      "Reliable, budget-friendly exercise from your doorstep. A simple helping hand when your dog needs a healthy walk, stimulation and attentive care.",
    benefits: [
      "A 30-minute walk from your home",
      "Time to sniff and explore",
      "Exercise and play suited to your dog",
      "Attentive handling and care",
      "A photo or video update",
      "Walking tools and treats included",
    ],
    kind: "single",
  },
];

export const confidentStart: FunnelProgram = {
  name: "The Confident Start Program",
  price: "$549",
  expiry: "Sessions expire in 3 months",
  composition: "6 private, in-home puppy coaching sessions for you, your family and your puppy",
  summary:
    "Build confidence, connection and clear communication during your puppy's critical learning period. Get practical help with house training, barking, chewing and settling into life together.",
  benefits: [
    "6 Private In-Home Coaching Sessions for You, Your Family and Your Puppy",
    "Personalised House Training Guidance and Setup",
    "Step by Step Socialisation and Desensitisation Plan",
    "The 5 Foundational Manners: Sit, Stay, Come, Place and Loose-Lead Walking Foundations",
    "Free Comprehensive 50+ Page Puppy Raising Guide",
  ],
  kind: "retail",
};
