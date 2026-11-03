import LocalTrainingPage from "@/components/locations/local-training-page";
import aspleyImage from "@assets/aspley_hero_768.webp";

export default function AspleyPage() {
  return (
    <LocalTrainingPage
      suburb="Aspley"
      nearbyAreas="Aspley, Carseldine and Bridgeman Downs"
      seoPath="/dog-training-aspley"
      eyebrow="Aspley, Carseldine & Bridgeman Downs"
      heroHeading="Dog Training in Aspley"
      heroSubheading="Practical training for the places your dog actually lives."
      heroCopy="Aspley moves quickly from quiet residential streets to busy roads, shopping areas and dog-filled parks. I train in your home and around suitable local environments so your dog can build calm, reliable behaviour where you need it day to day."
      heroImage={aspleyImage}
      heroImageAlt="A grey staffy sitting at Tristan's feet and looking up at him in a leafy North Brisbane park"
      localHeading="From Marchant Park to the front door"
      localIntro="Good training needs to work across the different environments an Aspley dog meets in a normal week. That may mean calm behaviour at home, better connection on neighbourhood walks or better focus when the surroundings become busier."
      highlights={[
        {
          label: "Marchant Park",
          title: "Focus around dog activity",
          text: "The Murphy Road dog area and surrounding park can bring movement, smells and other dogs into view. Targeted sessions can use the wider environment to build engagement, confidence and true reliability without throwing your dog into more than they can handle.",
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
        {
          question: "Do you only train at home?",
          answer: "Most programs start at home, because that's where the routines and habits are. Once your dog is ready, we take the skills out to your street, your regular walks and busier spots like Marchant Park.",
        },
      ]}
    />
  );
}
