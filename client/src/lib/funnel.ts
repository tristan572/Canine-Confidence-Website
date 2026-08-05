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
      "4 x Private, In-Home Day Train Sessions + 1 x One-on-One Private Coaching Session",
      "Completely Flexible Focus - use for obedience, foundations, behaviour modification, or fulfilment",
      "Customised Training Plan focusing on your current priorities",
      "Ongoing Feedback and video updates",
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
      "5 Targeted Training Sessions Total (4 Trainer-Led + 1 Owner Coaching Session)",
      "Foundations of High-Level Engagement and Obedience on the move",
      "Master Advanced Lead Handling Skills for ultimate control and comfort",
      "Tailored Protocol to shift your dog's feelings about the collar and lead",
      "I continue until the core goal is met",
      "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)",
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
      "Intensive Sessions focusing on effective, lasting behavioural change",
      "Clear Communication Foundations to reduce your dog's confusion and anxiety",
      "Master Real-World Management Techniques for immediate safety and peace of mind",
      "Advanced Impulse Control and Counter-Conditioning protocols",
      "Personalised Training Plan and Homework supplied",
      "Dedicated Ongoing Support from your trainer",
      "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)",
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
      "5 x Individual Private Sessions to be used across any behaviour or skill (flexible to your needs)",
      "Customised Training Approach and problem-solving strategy",
      "In-Depth Understanding of Methods (Clarity, Connection, Play and more)",
      "Dedicated Ongoing Support between sessions",
      "BONUS: The essential guide: 'The Four Building Blocks of a Balanced Dog' (Included Free!)",
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
      "Personalised in-home or public location training",
      "Learn effective training techniques",
      "Build a strong relationship with your dog",
      "You become the primary trainer",
      "Support every step of the way",
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
      "Convenient video call",
      "Problem solving",
      "Follow-up support",
      "Training guidance",
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
      "5 x 40-Minute Sessions (Trainer-led, done for you)",
      "Home Pickup Service Included at no extra charge",
      "Targeted General Obedience Reinforcement (manners on the go)",
      "Dedicated Loose Lead Walking Practice and technique mastery",
      "Training focused on real-world environment application and distraction proofing",
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
      "5 x Adventure Outings (Each session is an hour of adventure and integrated training)",
      "Convenient Home Pick-up Service included",
      "Targeted reinforcement of Recall and Impulse Control under distraction",
      "Focus on safe exploration, fun, and fulfilling play",
      "Video and feedback after every session, including key tips for you",
    ],
    kind: "retail",
  },
  {
    name: "Walk and Train",
    price: "$70",
    composition: "1 trainer-led 40-minute session",
    summary:
      "If your dog's walk is the most stressful part of your day, this is focused professional training, not just another dog walk.",
    benefits: [
      "Home visit with walk from there or nearby location",
      "Reinforce behaviours of your choice",
      "Real-world environment training",
      "Transition indoor training outdoors",
      "Reliable responses outside the home",
      "Tools and treats included",
    ],
    kind: "single",
  },
  {
    name: "Adventure Walk and Training",
    price: "$90",
    composition: "1 trainer-led 60-minute outing",
    summary:
      "The ultimate high-value outing. Your dog gets an hour of adventure, exercise and integrated training at a local forest, park or beach.",
    benefits: [
      "Collection from home",
      "Adventure locations",
      "Video updates",
      "Enrichment activities",
      "Fun and play",
      "Obedience Proofing",
      "Tools and treats included",
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
      "Enrichment activities",
      "Fun and play",
      "Affection and care",
      "Photo or video updates",
      "Tools and treats included",
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
    "6 x Private, In-Home Expert Sessions",
    "Personalised House Training Guidance and Setup",
    "Step by Step Socialisation and Desensitisation Plan",
    "The 5 Foundational Manners: Sit, Stay, Come, Place, and Loose-Leash Walking Foundations",
    "BONUS: Comprehensive 50+ page Puppy Raising Guide (Included Free!)",
  ],
  kind: "retail",
};
