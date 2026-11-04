import LocalTrainingPage from "@/components/locations/local-training-page";
import ascotImage from "@assets/tristan-playing-tug-with-staffy.webp";

export default function AscotPage() {
  return (
    <LocalTrainingPage
      suburb="Ascot"
      nearbyAreas="Ascot, Hamilton and Hendra"
      seoPath="/dog-training-ascot"
      eyebrow="Ascot, Hamilton & Hendra"
      heroHeading="Dog Training in Ascot"
      heroSubheading="Training built for a busy inner-north lifestyle."
      heroCopy="Ascot dogs move between leafy residential streets, cafe activity, traffic and the changing pace around the racecourse precinct. I train in your home and around suitable local environments so calm behaviour and clear communication hold up beyond the lounge room."
      heroImage={ascotImage}
      heroImageAlt="Tristan playing tug with a grey staffy in a North Brisbane park"
      localHeading="Calm behaviour across Ascot's different rhythms"
      localIntro="A quiet weekday walk can become much busier when cafes fill or race days bring more people, traffic and noise around Eagle Farm and Doomben. Training should prepare your dog for the environments that are part of your actual routine."
      highlights={[
        {
          label: "Racecourse Road",
          title: "Cafe manners and footpath focus",
          text: "The Racecourse Road precinct brings tables, food, people and passing dogs into a compact area. Suitable training can build loose-lead skills, calm waiting and the ability to settle without demanding that your dog ignores everything around them.",
        },
        {
          label: "Racecourse precinct",
          title: "Handling changes in noise and movement",
          text: "Activity around Eagle Farm and Doomben can shift quickly on event days. I use appropriate public areas and controlled distances to build calm, connected behaviour around traffic, crowds and sudden changes in the environment.",
        },
        {
          label: "Oriel Park & local streets",
          title: "Reliable everyday walking skills",
          text: "Leafy streets and open park surroundings are useful places to progress from basic skills to real walks. The aim is practical connection, better lead handling and a dog that can move through the neighbourhood with you.",
        },
      ]}
      fitHeading="Help for the dog you have and the life you lead"
      fitCopy="Some Ascot clients want a dog that can settle at a cafe or walk politely through a busy precinct. Others need help with barking, anxiety, reactivity or household behaviour. The training plan starts with the problem affecting your life, not a generic lesson list."
      problems={[
        "Pulling and lead frustration",
        "Cafe and settling skills",
        "Barking and over-excitement",
        "Dog reactivity",
        "Anxiety and low confidence",
        "Recall and public manners",
        "Puppy house training and socialisation",
        "Jumping up and visitor behaviour",
      ]}
      localProcessCopy="Your training may begin at home, on the streets you walk most often or at a quieter location before progressing towards busier Ascot environments. I set the difficulty around the dog in front of me and coach you on the information that needs to last after the program."
      faqs={[
        {
          question: "Can you help my dog settle at cafes?",
          answer: "Yes. Calm waiting, lead manners, engagement and settling can all be part of your plan. We may start somewhere quieter before asking your dog to manage a busy cafe.",
        },
        {
          question: "Can you help with reactivity or anxiety?",
          answer: "Yes. I work with dogs who bark, lunge or shut down around other dogs, people or busy places. We start with an assessment so I can see what triggers your dog and how they cope, then build the plan around that.",
        },
        {
          question: "How many sessions will my dog need?",
          answer: "It depends on your dog and what you want to change. After the assessment I recommend a program and tell you exactly how many sessions it includes, so you know what you're booking before you commit.",
        },
        {
          question: "Will I need to practise between sessions?",
          answer: "Yes, a little each day. After every session I email you notes on what we covered and what to work on first, and you can send me a question or a video if something isn't working before we meet again.",
        },
      ]}
    />
  );
}
