import { Link } from "wouter";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";

const steps = [
  { title: "Book your assessment", text: "I take the time to understand what you want to achieve and get to know your dog's temperament." },
  { title: "Get a recommended program", text: "I work out how your dog responds and learns, then recommend 1, 3 or 6 weeks of training." },
  { title: "Train at home and out in the world", text: "I work in-home and in everyday environments, so skills hold up around real distractions. You get written notes after every session." },
  { title: "Keep it going for life", text: "Dogs change as they grow and age, and life throws up new situations. Book a top-up session or a video call when you need one, or keep skills sharp with training adventures." },
];

// The four steps from first booking to ongoing support. Suburb pages pass a
// short local intro; the homepage shows the steps on their own.
export default function HowItWorks({ intro }: { intro?: string }) {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">How it works</p>
            <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
              From your first session to the years ahead
            </h2>
            {intro && <p className="mt-4 text-lg leading-relaxed text-medium-grey">{intro}</p>}
          </div>
          <p className="max-w-md font-semibold text-charcoal">
            You don't need to choose a program before we meet.
          </p>
        </div>
        <ol className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, text }, i) => (
            <li key={title} className="flex flex-col gap-3 border-t-2 border-navy/15 pt-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-primary text-lg font-extrabold text-white" aria-hidden="true">
                  {i + 1}
                </span>
                {i === 0 && <AssessmentDetails className="gap-x-2 text-sm text-sky-deep" />}
              </div>
              <h3 className="text-xl font-extrabold text-charcoal">{title}</h3>
              <p className="leading-relaxed text-medium-grey">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-medium-grey">
          Starting with a puppy? <Link href="/puppy" className="font-semibold text-sky-deep underline underline-offset-4">Puppy programs can be booked directly</Link>, with no assessment required.
        </p>
      </div>
    </section>
  );
}
