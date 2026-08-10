import LocalTrainingPage from "@/components/locations/local-training-page";
import ascotImage from "@assets/IMG_0076_1758798863394_opt.webp";

export default function AscotPage() {
  return (
    <LocalTrainingPage
      suburb="Ascot"
      nearbyAreas="Ascot, Hamilton and Hendra"
      title="Dog Training Ascot | Canine Confidence"
      description="Personalised dog training in Ascot, Hamilton and Hendra. In-home coaching and local training for calm walks, cafe manners and everyday city distractions."
      canonical="https://www.canineconfidence.com.au/dog-training-ascot"
      eyebrow="Ascot, Hamilton & Hendra"
      heroHeading="Dog Training in Ascot"
      heroSubheading="Training built for a busy inner-north lifestyle."
      heroCopy="Ascot dogs move between leafy residential streets, cafe activity, traffic and the changing pace around the racecourse precinct. I train in your home and around suitable local environments so calm behaviour and clear communication hold up beyond the lounge room."
      heroImage={ascotImage}
      heroImageAlt="Tristan walking a client dog through a busy urban park"
      localHeading="Calm behaviour across Ascot's different rhythms"
      localIntro="A quiet weekday walk can become a much bigger test when cafes fill, commuters move through Ascot station or an event changes traffic around Eagle Farm and Doomben. Training should prepare your dog for the environments that are part of your actual routine."
      highlights={[
        {
          label: "Racecourse Road",
          title: "Cafe manners and footpath focus",
          text: "The Racecourse Road precinct brings tables, food, people and passing dogs into a compact area. Suitable training can build loose-lead skills, calm waiting and the ability to settle without demanding that your dog ignores everything around them.",
        },
        {
          label: "Racecourse precinct",
          title: "Handling changes in noise and movement",
          text: "Activity around Eagle Farm, Doomben and Ascot station can shift quickly on event days. I use appropriate public areas and controlled distances to build calm, connected behaviour around traffic, crowds and sudden changes in the environment.",
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
          question: "Do you provide in-home dog training in Ascot?",
          answer: "Yes. I come to clients across Ascot, Hamilton and Hendra for suitable in-home services. Working where the behaviour happens gives me a clearer picture of your dog's routines, environment and the practical result you need.",
        },
        {
          question: "Can training include Racecourse Road or the racecourse area?",
          answer: "Suitable public areas around the precinct can be used when they match your dog's goals and current ability. I do not rely on access to private racecourse grounds or local businesses, and I build distraction levels gradually.",
        },
        {
          question: "Can you help my dog settle at cafes?",
          answer: "Yes. Calm waiting, lead manners, engagement and settling can all be part of a personalised plan. The first steps may be taught somewhere quieter before asking your dog to manage a busy cafe environment.",
        },
        {
          question: "Do you work with reactive or anxious dogs?",
          answer: "Yes. Adult behaviour work begins with an assessment so I can understand the triggers, emotional response, handling and environment before recommending a program.",
        },
      ]}
    />
  );
}
