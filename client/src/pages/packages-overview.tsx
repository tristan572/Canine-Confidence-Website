import { Link } from "wouter";
import { AssessmentIntro } from "@/components/funnel/assessment-intro";
import { StaticSEO } from "@/components/SEO";
import FinalCta from "@/components/funnel/final-cta";

const paths = [
  { href: "/puppy", title: "Puppy programs", text: "The Confident Start Program is available to book directly." },
  { href: "/behaviour-obedience", title: "Behaviour & Obedience programs", text: "Assessment-led coaching and trainer-led programs for your dog's specific needs." },
  { href: "/walking-adventure", title: "Adventure & Training programs", text: "Packages and single sessions for trainer-led walks and adventure outings." },
];

export default function PackagesOverviewPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/packages" />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Canine Confidence programs</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">Programs built around the work your dog needs</h1>
          <p className="text-xl leading-relaxed text-medium-grey">Programs and packages are now grouped by the kind of support you are looking for, making it easier to compare the right options before you book.</p>
        </div>
      </section>
      <div className="mx-auto w-full max-w-6xl px-4 pt-12 sm:px-6 lg:px-8">
        <AssessmentIntro location="Programs start here" showPuppyLink />
      </div>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="rounded-2xl border border-navy/10 bg-sand p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-extrabold text-charcoal">{path.title}</h2>
              <p className="mb-5 leading-relaxed text-medium-grey">{path.text}</p>
              <span className="font-semibold text-primary-blue">Explore programs →</span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta
        heading="Not sure which program is right for you?"
        text="Start with an assessment and I'll recommend the program that suits your dog. If you'd rather talk first, ask about your dog and I'll help you work out where to start."
        location="Programs final CTA"
      />
    </div>
  );
}
