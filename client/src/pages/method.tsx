import { SEO } from "@/components/SEO";
import { AssessmentButton } from "@/components/funnel/funnel-cta";
import methodImage from "@assets/IMG_0076_1758798863394_opt.webp";

const principles = [
  {
    title: "Dog first",
    text: "Genetics, drives, health, past learning and environment all shape behaviour. I understand those pieces before deciding what the training should look like.",
  },
  {
    title: "Clarity",
    text: "Your dog needs communication they can understand. Clear information removes guesswork, reduces anxiety and gives them a straight path to success.",
  },
  {
    title: "Play",
    text: "Training is high-value engagement, not a chore. Purposeful play builds trust, motivation and focus, accelerating learning while strengthening your relationship.",
  },
  {
    title: "Fulfilment",
    text: "A dog whose physical, mental and genetic needs are met is easier to live with and ready to learn. Obedience cannot compensate for an unfulfilled lifestyle.",
  },
  {
    title: "Real life",
    text: "Skills need to survive footpaths, parks, visitors and the distractions that matter in your life. That is where training earns its value.",
  },
  {
    title: "Built to Last",
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
      <section className="bg-gray-700 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
              The way I train
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Six things I will not compromise on.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-16 md:grid-cols-2 md:gap-y-0">
            {principles.map(({ title, text }, index) => (
              <article
                key={title}
                className={`border-t border-white/20 py-8 lg:py-10 ${
                  index % 2 === 1 ? "md:mt-12" : ""
                }`}
              >
                <h3 className="mb-4 text-3xl font-bold text-white lg:text-4xl">{title}</h3>
                <p className="max-w-xl text-lg leading-relaxed text-gray-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 px-6 py-10 text-center sm:px-10">
          <h2 className="mb-4 text-3xl font-bold text-charcoal">
            Start training for the life you want together
          </h2>
          <p className="mb-7 text-lg leading-relaxed text-medium-grey">
            Your assessment gives me the full picture of your dog, your goals
            and daily life. From there, I recommend the training approach that
            will get you where you want to go.
          </p>
          <AssessmentButton
            location="Method final CTA"
            className="px-7 py-4 text-lg"
          />
        </div>
      </section>
    </div>
  );
}
