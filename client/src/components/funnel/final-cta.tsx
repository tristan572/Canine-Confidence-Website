import type { ReactNode } from "react";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import { AssessmentButton, ConsultationButton } from "@/components/funnel/funnel-cta";

// The closing booking section every page ends on: the page's own pitch on the
// left, the assessment card with its price and buttons on the right. Pages that
// book something other than the assessment (the puppy program) pass their own
// card title, details and primary button.
export default function FinalCta({
  heading,
  text,
  kicker,
  location,
  cardTitle = "Initial Canine Success Assessment",
  details,
  primaryAction,
  askLabel = "Ask About Your Dog First",
}: {
  heading: string;
  text: ReactNode;
  kicker?: string;
  location: string;
  cardTitle?: string;
  details?: ReactNode;
  primaryAction?: ReactNode;
  askLabel?: string;
}) {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 rounded-[26px] bg-sand p-8 text-charcoal sm:p-12 lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            {kicker && <p className="mb-3 font-quote text-xl italic text-sky-deep">{kicker}</p>}
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">{heading}</h2>
            <p className="text-lg leading-relaxed text-medium-grey">{text}</p>
          </div>
          <div className="w-full rounded-2xl bg-white p-7 text-foreground lg:w-96 lg:shrink-0">
            <p className="eyebrow mb-3">{cardTitle}</p>
            {details ?? <AssessmentDetails className="mb-6 text-lg text-charcoal" />}
            <div className="flex flex-col gap-3">
              {primaryAction ?? <AssessmentButton location={location} className="w-full" showIcon={false} />}
              <ConsultationButton label={askLabel} className="btn-secondary w-full" showIcon={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
