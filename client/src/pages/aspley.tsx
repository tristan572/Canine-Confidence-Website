import LocalTrainingPage from "@/components/locations/local-training-page";
import aspleyImage from "@assets/IMG_0237_1760870095911.jpeg";

export default function AspleyPage() {
  return (
    <LocalTrainingPage
      suburb="Aspley"
      nearbyAreas="Aspley, Carseldine and Bridgeman Downs"
      title="Dog Training Aspley | Canine Confidence"
      description="Personalised dog training in Aspley, Carseldine and Bridgeman Downs. In-home coaching and local training around Marchant Park and everyday distractions."
      canonical="https://www.canineconfidence.com.au/dog-training-aspley"
      eyebrow="Aspley, Carseldine & Bridgeman Downs"
      heroHeading="Dog Training in Aspley"
      heroSubheading="Practical training for the places your dog actually lives."
      heroCopy="Aspley moves quickly from quiet residential streets to busy roads, shopping areas and dog-filled parks. I train in your home and around suitable local environments so your dog can build calm, reliable behaviour where you need it day to day."
      heroImage={aspleyImage}
      heroImageAlt="Tristan training a Staffy in a leafy North Brisbane park"
      localHeading="From Marchant Park to the front door"
      localIntro="Good training needs to work across the different environments an Aspley dog meets in a normal week. That may mean calm behaviour at home, better connection on neighbourhood walks or better focus when the surroundings become busier."
      highlights={[
        {
          label: "Marchant Park",
          title: "Focus around dog activity",
          text: "The Murphy Road dog area and surrounding park can bring movement, smells and other dogs into view. Suitable sessions can use that wider environment to build focus and calmer responses without throwing your dog into more than they can handle.",
        },
        {
          label: "Aspley Hypermarket",
          title: "Skills for busy surroundings",
          text: "Traffic, trolleys, people and constant movement around the Albany Creek Road precinct create a very different challenge to a quiet backyard. Training is built up carefully so your dog can process activity and stay connected.",
        },
        {
          label: "At home",
          title: "The behaviour you live with every day",
          text: "Barking at the fence, jumping on visitors, pulling out the gate and struggling to settle all start at home. I come to you so the setup, coaching and plan match the household your dog actually lives in.",
        },
      ]}
      fitHeading="Support for more than basic obedience"
      fitCopy="You do not need to know the name of the problem before you call. Tell me what daily life looks like, what keeps going wrong and what you want to be able to do with your dog. I will work out the most useful place to start."
      problems={[
        "Pulling and difficult walks",
        "Barking and over-excitement",
        "Dog reactivity",
        "Anxiety and poor confidence",
        "Jumping up and household manners",
        "Recall and unreliable responses",
        "Puppy house training and socialisation",
        "Chewing and destructive habits",
      ]}
      localProcessCopy="The plan is based on your dog, your home and the Aspley environments you want to enjoy together. I can do the concentrated training work, coach you and your family, or combine both depending on what will create the best result."
      faqs={[
        {
          question: "Do you come to homes in Aspley?",
          answer: "Yes. In-home training is available across Aspley and nearby North Brisbane suburbs. It lets me see the environment, routines and behaviour as they actually happen before we take skills into local public spaces where appropriate.",
        },
        {
          question: "Do you train dogs at Marchant Park?",
          answer: "Marchant Park and its surrounding paths can be useful for suitable dogs and goals. I choose the exact location and level of distraction around the individual dog. Sessions do not depend on entering the off-leash area.",
        },
        {
          question: "Can you help with reactivity or anxiety?",
          answer: "Yes. Behaviour and obedience work can cover dog reactivity, anxiety, barking, lunging, over-excitement and related handling problems. Adult dogs start with an assessment so I can see what is happening and build the right plan.",
        },
        {
          question: "Which nearby suburbs do you cover?",
          answer: "I work throughout North Brisbane, including Aspley, Carseldine and Bridgeman Downs. Travel and availability can be confirmed during the free phone consult.",
        },
      ]}
    />
  );
}
