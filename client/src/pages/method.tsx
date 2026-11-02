import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";
import { AssessmentButton } from "@/components/funnel/funnel-cta";
import { buildingBlocks } from "@/lib/building-blocks";
import walk400 from "@assets/IMG_0084_card_400_opt.webp";
import walk800 from "@assets/IMG_0084_card_800_opt.webp";
import tug640 from "@assets/hero_tug_640.webp";
import tug1024 from "@assets/hero_tug_1024.webp";

// `inSession` shows what the principle looks like with a real dog.
const principles = [
  {
    title: "Dog first",
    text: "Genetics, drives, health, past learning and environment all shape behaviour. I understand those pieces before deciding what the training should look like.",
    inSession: "Your assessment starts with your dog's health, breed, history and daily routine before we pick up a lead.",
  },
  {
    title: "Clarity",
    text: "Your dog needs communication they can understand. Clear information removes guesswork, reduces anxiety and gives them a straight path to success.",
    inSession: "I teach \"Yes\" and \"Uh-uh\" early, so your dog always knows when they've got it right and when they haven't.",
  },
  {
    title: "Play",
    text: "Training should be something your dog wants to do. Play builds trust, motivation and focus, speeds up learning and strengthens your relationship.",
    inSession: "Tug and toy games become the reward, including out on walks where food often stops working.",
  },
  {
    title: "Fulfilment",
    text: "A dog whose physical, mental and genetic needs are met is easier to live with and ready to learn. Obedience cannot compensate for an unfulfilled lifestyle.",
    inSession: "Your plan includes the outlets your dog needs, like sniffing, running, chewing or games that suit their breed.",
  },
  {
    title: "Real life",
    text: "Skills need to survive footpaths, parks, visitors and the distractions that matter in your life. That is where training earns its value.",
    inSession: "Once a skill works at home, we take it to your footpath, your local park and your front door.",
  },
  {
    title: "Built to last",
    text: "I can build foundations with your dog, but the final skill must transfer to you. You learn the handling and communication needed to maintain the result for life.",
    inSession: "Every coaching session comes with written notes, so you know exactly what to practise until I see you next.",
  },
];

// Widest block at the bottom: each one rests on the one below.
const stackWidths = ["w-full", "w-[92%]", "w-[84%]", "w-[76%]"];

export default function MethodPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/method" />
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow mb-3">My method</p>
            <h1 className="mb-5 text-4xl font-extrabold text-charcoal lg:text-5xl">
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
            src={walk800}
            srcSet={`${walk400} 400w, ${walk800} 800w`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="Tristan walking his dog Cleo on a loose lead along a tree-lined path"
            className="h-auto w-full rounded-[26px] object-cover"
            width={800}
            height={766}
            decoding="async"
          />
        </div>
      </section>

      {/* The Four Building Blocks, drawn as a stack with Health at the base. */}
      <section className="mx-2 overflow-hidden rounded-[28px] bg-navy py-16 text-white sm:mx-4 lg:mx-6 lg:rounded-[32px] lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#8FD3F2]">
              My framework
            </p>
            <h2 className="mb-5 text-3xl font-extrabold lg:text-5xl">
              The Four Building Blocks
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                Every plan I write is built in the same order. Health first,
                then lifestyle, then clarity, and only then the skills you
                booked me for.
              </p>
              <p>
                Skip a block and the ones above it wobble. That's why a sit that
                works in the kitchen falls apart at the park, and why I check all
                four at your assessment.
              </p>
            </div>
            <Link
              href="/blog/creating-balance-complete-framework"
              className="mt-8 inline-flex font-extrabold text-white hover:text-[#8FD3F2]"
            >
              Read the full framework →
            </Link>
          </div>
          <ol className="flex flex-col-reverse items-center gap-2.5" aria-label="The Four Building Blocks, from the base up">
            {buildingBlocks.map(({ number, title, short }, i) => (
              <li
                key={title}
                className={`${stackWidths[i]} rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4 sm:px-6`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-quote text-2xl italic text-[#8FD3F2]">{number}</span>
                  <div>
                    <h3 className="text-lg font-extrabold">{title}</h3>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">{short}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Six principles: heading and photo stay put while the list scrolls. */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow mb-3">The way I train</p>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-charcoal lg:text-5xl">
              Six things I won't compromise on.
            </h2>
            <img
              src={tug1024}
              srcSet={`${tug640} 640w, ${tug1024} 1024w`}
              sizes="(max-width: 1024px) 100vw, 40vw"
              alt="Tristan playing tug with a dog during a training session"
              className="hidden h-auto w-full rounded-[26px] object-cover lg:block"
              width={1024}
              height={683}
              loading="lazy"
              decoding="async"
            />
          </div>
          <ol>
            {principles.map(({ title, text, inSession }, index) => (
              <li key={title} className="border-t border-navy/15 py-8 first:border-t-0 first:pt-0 lg:first:pt-2">
                <div className="mb-3 flex items-baseline gap-4">
                  <span className="font-quote text-3xl italic text-sky-deep">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-extrabold text-charcoal lg:text-3xl">{title}</h3>
                </div>
                <p className="mb-5 text-lg leading-relaxed text-medium-grey">{text}</p>
                <p className="rounded-2xl bg-sand px-5 py-4 leading-relaxed text-charcoal">
                  <span className="mr-2 text-xs font-extrabold uppercase tracking-[0.12em] text-sky-deep">In a session</span>
                  {inSession}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <figure className="border-l-2 border-sky-brand pl-6 lg:pl-10">
            <blockquote className="font-quote text-2xl font-normal italic leading-snug text-charcoal lg:text-3xl">
              “Tristan is extremely knowledgeable, patient, and explains everything
              in a way that's easy to understand and put into practice. He takes
              the time to understand your dog's behaviour and provides practical
              training techniques that really work.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-bold text-medium-grey">Amanda C. · Owner of Murphy</figcaption>
          </figure>
          <Link href="/reviews" className="mt-8 inline-flex font-extrabold text-primary hover:text-sky-deep">
            Read all reviews →
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-sand px-6 py-10 text-center sm:px-10">
          <h2 className="mb-4 text-3xl font-extrabold text-charcoal">
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
