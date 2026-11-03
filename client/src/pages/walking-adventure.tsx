import { usePricing } from "@/hooks/use-pricing";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import { StaticSEO } from "@/components/SEO";
import { ProgramCard } from "@/components/funnel/program-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { walkingPrograms } from "@/lib/funnel";
import ReviewQuote from "@/components/review-quote";
import weave480 from "@assets/adventure_weave_480.webp";
import weave960 from "@assets/adventure_weave_960.webp";
import FinalCta from "@/components/funnel/final-cta";
import { HERO_PHOTO, HERO_SECTION } from "@/lib/hero";

export default function WalkingAdventurePage() {
  const pricing = usePricing();
  return (
    <div className="min-h-screen">
      <StaticSEO path="/walking-adventure" />

      <section className={HERO_SECTION}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow mb-3">
              Adventure and training
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">
              Your dog's walk should not be the most stressful part of your day
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">
              I train out in parks, beaches, trails and streets, using
              structured walking, play, sniffing, running and other carefully
              chosen challenges to build focus,
              confidence and reliable skills, while giving your dog the
              physical and mental fulfilment they actually need.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="Walking hero" className="px-7 py-4 text-lg" />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
          </div>
          <img
            src={weave960}
            srcSet={`${weave480} 480w, ${weave960} 960w`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            alt="A grey staffy weaving through Tristan's legs as he holds a tug toy in an open park"
            className={`h-auto w-full rounded-[26px] ${HERO_PHOTO}`}
            width={960}
            height={1200}
          />
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal">Start here: your dog's assessment</h2>
            <AssessmentDetails className="mb-4 text-lg text-primary-blue" />
            <p className="mb-4 text-lg leading-relaxed text-medium-grey">
              I take the time to understand what you want from your dog's walks,
              get to know their temperament and build a plan around who they are
              and how they learn. From there, I suggest a walking or training
              program to get you started.
            </p>
            <p className="mb-5 font-semibold text-charcoal">You don't need to choose a program before we meet.</p>
            <AssessmentButton location="Walking start here" />
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {walkingPrograms.map((program) => (
              <ProgramCard
                key={program.name}
                program={program}
                location="Walking"
                upgrade={
                  program.name === "Walk and Train"
                    ? {
                        label: "Want five sessions? View The Real World Reliability Package",
                        targetId: "the-real-world-reliability-package",
                      }
                    : program.name === "Adventure Walk and Training"
                      ? {
                          label: "Want five adventures? View The Adventure Pack",
                          targetId: "the-adventure-pack",
                        }
                      : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <ReviewQuote
        label="Reactivity on walks"
        quote="Tristan has taken the time to build a good bond with Dobson, and his confidence has improved so much while out and about. We now look forward to going for walks together."
        owner="Renee B."
        dog="Dobson, an Italian Greyhound"
        className="bg-white"
      />

      <FinalCta
        heading="Start enjoying the walk again"
        text="We'll talk through what you want from the walks, get to know your dog's temperament and build a plan around who they are and how they learn. I'll suggest a walking or training program to get you started."
        location="Walking final CTA"
      />
    </div>
  );
}
