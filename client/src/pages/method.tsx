import { Brain, Dna, Gamepad2, Map, MessageCircle, Target } from "lucide-react";
import { SEO } from "@/components/SEO";
import methodImage from "@assets/IMG_0076_1758798863394_opt.webp";

const principles = [
  {
    icon: Brain,
    title: "The dog in front of me comes first",
    text: "Genetics, drives, health, past learning and environment all shape behaviour. I understand those pieces before deciding what the training should look like.",
  },
  {
    icon: MessageCircle,
    title: "Clarity replaces conflict",
    text: "Your dog needs communication they can understand. Clear information removes guesswork, reduces frustration and gives them a straight path to success.",
  },
  {
    icon: Gamepad2,
    title: "Play builds motivation and connection",
    text: "Training is high-value engagement, not a chore. Purposeful play builds trust, motivation and focus, accelerating learning while strengthening your relationship.",
  },
  {
    icon: Dna,
    title: "Fulfilment changes behaviour",
    text: "A dog whose physical, mental and genetic needs are met is easier to live with and ready to learn. Obedience cannot compensate for an unfulfilled lifestyle.",
  },
  {
    icon: Map,
    title: "Backyard obedience is not enough",
    text: "Skills need to survive footpaths, parks, visitors and the distractions that matter in your life. That is where training earns its value.",
  },
  {
    icon: Target,
    title: "The result has to work without me",
    text: "I can build foundations with your dog, but the final skill must transfer to you. You learn the handling and communication needed to maintain the result for life.",
  },
];

export default function MethodPage() {
  return (
    <div className="min-h-screen">
      <SEO
        title="My Dog Training Method | Canine Confidence"
        description="How Canine Confidence combines clear communication, play, genetic fulfilment and real-world practice to create lasting dog training results."
        canonical="https://www.canineconfidence.com.au/method"
      />
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">My method</p>
            <h1 className="mb-5 text-4xl font-bold text-charcoal lg:text-5xl">
              The goal is a dog you can take anywhere.
            </h1>
            <p className="text-xl leading-relaxed text-medium-grey">
              Every dog is different, so every program should be different. I
              look at the dog, their drives and what daily life actually looks
              like, then combine play, fulfilment, clear communication and
              real-world practice to build something that lasts.
            </p>
          </div>
          <img
            src={methodImage}
            alt="Tristan training a client dog outdoors"
            className="h-auto w-full rounded-2xl shadow-xl"
            width={640}
            height={480}
          />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <article key={title} className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <Icon className="mb-5 h-9 w-9 text-primary-blue" />
                <h2 className="mb-3 text-xl font-bold text-charcoal">{title}</h2>
                <p className="leading-relaxed text-medium-grey">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
