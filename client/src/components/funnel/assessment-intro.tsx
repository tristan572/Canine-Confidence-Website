import { Link } from "wouter";
import { usePricing } from "@/hooks/use-pricing";
import { AssessmentButton } from "./funnel-cta";

const ASSESSMENT_NAME = "Initial Canine Success Assessment";

export function AssessmentDetails({ className = "" }: { className?: string }) {
  const pricing = usePricing();
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 font-semibold ${className}`}>
      <span>{pricing.servicePrice(ASSESSMENT_NAME)}</span>
      <span aria-hidden="true">·</span>
      <span>{pricing.serviceDuration(ASSESSMENT_NAME)}</span>
      <span aria-hidden="true">·</span>
      <span>In your home</span>
    </p>
  );
}

export function AssessmentIntro({ location, showPuppyLink = false }: {
  location: string;
  showPuppyLink?: boolean;
}) {
  return (
    <section aria-label="Start with an assessment" className="max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary-blue">New clients: start here</p>
      <div className="flex flex-col items-start gap-5">
        <div>
          <h2 className="mb-3 text-3xl font-bold text-charcoal">Start with your dog's assessment</h2>
          <AssessmentDetails className="mb-5 text-lg text-primary-blue" />
          <p className="max-w-3xl text-lg leading-relaxed text-medium-grey">
            I take the time to understand what you want to achieve, get to know your
            dog's temperament and begin working out how they respond and learn.
            From there, I recommend a program to get you started.
          </p>
          <p className="mt-4 font-semibold text-charcoal">You don't need to choose a program before we meet.</p>
        </div>
        <AssessmentButton location={location} className="h-auto min-h-12 whitespace-normal px-6 py-3" />
      </div>
      {showPuppyLink && (
        <p className="mt-6 border-t border-blue-100 pt-5 text-sm text-medium-grey">
          Starting with a puppy? <Link href="/puppy" className="font-semibold text-primary-blue underline underline-offset-4">Puppy programs can be booked directly</Link>, with no assessment required.
        </p>
      )}
    </section>
  );
}
