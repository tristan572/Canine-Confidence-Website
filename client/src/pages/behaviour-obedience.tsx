import { usePricing } from "@/hooks/use-pricing";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import { ArrowRight, Calendar, ClipboardList, Footprints, HeartPulse, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaticSEO } from "@/components/SEO";
import { ProgramCard } from "@/components/funnel/program-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { behaviourPrograms, VIRTUAL_COACHING_URL } from "@/lib/funnel";
import { getBookingLinkProps } from "@/lib/analytics";
import ReviewQuote from "@/components/review-quote";
import behaviourImage from "@assets/DSC_0171_testimonials_800.webp";

// Grouped by where owners notice them, so people can find their own dog fast.
const problemGroups = [
  {
    title: "At home",
    icon: Home,
    problems: ["Barking", "Jumping up", "Chewing and destruction", "Guarding", "Everyday manners"],
  },
  {
    title: "On walks",
    icon: Footprints,
    problems: ["Pulling on the lead", "Dog reactivity", "Chasing", "Poor recall"],
  },
  {
    title: "How they feel",
    icon: HeartPulse,
    problems: ["Anxiety", "Over-excitement", "Can't settle"],
  },
];

export default function BehaviourObediencePage() {
  const pricing = usePricing();
  return (
    <div className="min-h-screen">
      <StaticSEO path="/behaviour-obedience" />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow mb-3">
              Behaviour and obedience
            </p>
            <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">
              Stop managing the symptoms. Start changing what drives them.
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">
              Whether you want better manners or you are dealing with barking,
              lunging, anxiety or over-excitement, I do not force your dog through
              a generic formula. I work out what is driving the behaviour, build
              clear communication and train for the life you want together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="Behaviour hero" className="px-7 py-4 text-lg" />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
          </div>
          <img
            src={behaviourImage}
            alt="Tristan working calmly with a client dog"
            className="h-auto w-full rounded-[26px] object-cover"
            width={640}
            height={480}
          />
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow mb-3">What I help with</p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
              For the problems making daily life hard
            </h2>
            <p className="text-lg leading-relaxed text-medium-grey">
              I look at what is happening beneath the behaviour, then build the
              skills that make life easier at home and out in the world.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {problemGroups.map(({ title, icon: Icon, problems }) => (
              <div key={title} className="rounded-[22px] bg-sand p-6 lg:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-extrabold text-charcoal">{title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {problems.map((problem) => (
                    <li key={problem} className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-charcoal">
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal">Start here: your dog's assessment</h2>
            <AssessmentDetails className="mb-4 text-lg text-primary-blue" />
            <p className="mb-4 text-lg leading-relaxed text-medium-grey">
              I take the time to understand what you want to achieve and get to
              know your dog's temperament. We start working together so I can
              see how your dog responds and how best to work with them. From
              there, I suggest a program to get you started.
            </p>
            <p className="mb-5 font-semibold text-charcoal">You don't need to choose a program before we meet.</p>
            <AssessmentButton location="Behaviour start here" />
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {behaviourPrograms.map((program) => (
              <ProgramCard
                key={program.name}
                program={program}
                location="Behaviour"
                directAction={
                  program.name === "Virtual Coaching and Support" ? (
                    <Button asChild className="btn-primary w-full">
                      <a
                        {...getBookingLinkProps(
                          VIRTUAL_COACHING_URL,
                          "service",
                          "Virtual Coaching and Support | Behaviour",
                        )}
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Book Virtual Coaching
                      </a>
                    </Button>
                  ) : undefined
                }
                upgrade={
                  program.name === "One-on-One Private Coaching"
                    ? {
                        label: "Need ongoing support? View The Focused Progress Plan",
                        targetId: "the-focused-progress-plan",
                      }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <ReviewQuote
        label="Jumping up on people"
        quote="Tristan spent time with him and was able to handle him in such a confident way it was a relief and really helpful. Harley is now much better and rarely ever jumps."
        owner="Patricia L."
        dog="Harley, a 70kg Mastiff cross"
        className="bg-white"
      />

      <section className="bg-white pb-16">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 rounded-2xl border border-navy/10 bg-sand p-8 sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center">
          <ClipboardList className="h-12 w-12 text-primary-blue" />
          <div>
            <h2 className="mb-2 text-2xl font-extrabold text-charcoal">
              Bringing home a rescue dog?
            </h2>
            <p className="text-medium-grey">
              Read my free first-seven-days guide before small problems get a
              chance to become habits.
            </p>
          </div>
          <a
            href="/rescuedogguide"
            className="inline-flex items-center font-semibold text-primary-blue hover:underline"
          >
            Get the free guide <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="mx-2 my-12 overflow-hidden rounded-[28px] sm:mx-4 lg:mx-6 lg:rounded-[32px] bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-4 text-3xl font-extrabold">Life with your dog should feel calmer, more connected and more enjoyable</h2>
          <p className="mb-7 text-lg text-white/80">
            We'll talk through your goals, get to know your dog's temperament
            and build a plan around who they are and how they learn. I'll suggest a program
            to get you started.
          </p>
          <AssessmentDetails className="mb-6 justify-center text-xl text-white" />
          <AssessmentButton
            location="Behaviour final CTA"
            className=""
          />
        </div>
      </section>
    </div>
  );
}
