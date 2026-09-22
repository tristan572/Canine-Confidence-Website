import { usePricing } from "@/hooks/use-pricing";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import { StaticSEO } from "@/components/SEO";
import { ProgramCard } from "@/components/funnel/program-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { walkingPrograms } from "@/lib/funnel";
import walkingImage from "@assets/IMG_0084_card_800_opt.webp";

export default function WalkingAdventurePage() {
  const pricing = usePricing();
  return (
    <div className="min-h-screen">
      <StaticSEO path="/walking-adventure" />

      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">
              Walking and adventure
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">
              Your dog's walk should not be the most stressful part of your day
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">
              I use real environments,
              purposeful movement, play and carefully chosen challenges to build
              focus, confidence and reliable skills while giving your dog the
              physical and mental fulfilment they actually need.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="Walking hero" className="px-7 py-4 text-lg" />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
          </div>
          <img
            src={walkingImage}
            alt="Tristan walking a client dog through a North Brisbane park"
            className="h-[360px] w-full rounded-2xl object-cover object-center shadow-xl sm:h-[440px]"
            width={640}
            height={480}
          />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Start here: your dog's assessment</h2>
            <AssessmentDetails className="mb-4 text-lg text-primary-blue" />
            <p className="mb-4 text-lg leading-relaxed text-medium-grey">
              I take the time to understand what you want from your dog's walks,
              get to know their temperament and begin working out how to work
              with them safely. From there, I suggest a walking or training
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
                directAction={
                  program.name === "Local Walk" ? (
                    <ConsultationButton
                      className="w-full border-2 border-primary-blue bg-white text-primary-blue hover:bg-blue-50 hover:text-primary-blue"
                      label="Free Phone Consult"
                    />
                  ) : undefined
                }
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

      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-4 text-3xl font-bold">Start enjoying the walk again</h2>
          <p className="mb-7 text-lg text-blue-100">
            We'll talk through what you want from the walks, get to know your
            dog's temperament and begin working out how to work together safely.
            I'll suggest a walking or training program to get you started.
          </p>
          <AssessmentDetails className="mb-6 justify-center text-xl text-white" />
          <AssessmentButton
            location="Walking final CTA"
            className="bg-white text-primary-blue hover:bg-gray-50"
          />
        </div>
      </section>
    </div>
  );
}
