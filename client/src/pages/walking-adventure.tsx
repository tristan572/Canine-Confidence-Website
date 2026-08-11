import { StaticSEO } from "@/components/SEO";
import { ProgramCard } from "@/components/funnel/program-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { walkingPrograms } from "@/lib/funnel";
import walkingImage from "@assets/IMG_0084_card_800_opt.webp";

export default function WalkingAdventurePage() {
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
            <div className="flex flex-col gap-3 sm:flex-row">
              <AssessmentButton location="Walking hero" className="px-7 py-4 text-lg" />
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
            <h2 className="mb-4 text-3xl font-bold text-charcoal">From stressful walks to real-world reliability</h2>
            <p className="text-lg text-medium-grey">
              Choose focused training, a genuinely fulfilling adventure or a
              reliable helping hand on a busy day. Every option has a clear job,
              and every new dog is assessed first so I can handle them safely and
              recommend the service that will actually help.
            </p>
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
            Your assessment lets me get to know your dog, hear what you want
            from the sessions and make sure a walking service is the right fit.
            From there, I recommend the option that best suits you and your dog.
          </p>
          <AssessmentButton
            location="Walking final CTA"
            className="bg-white text-primary-blue hover:bg-gray-50"
          />
        </div>
      </section>
    </div>
  );
}
