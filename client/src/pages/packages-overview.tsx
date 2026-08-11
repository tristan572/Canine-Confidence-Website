import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";

const paths = [
  { href: "/puppy", title: "Puppy programs", text: "The Confident Start Program is available to book directly." },
  { href: "/behaviour-obedience", title: "Behaviour & Obedience programs", text: "Assessment-led coaching and trainer-led programs for your dog's specific needs." },
  { href: "/walking-adventure", title: "Walking & Adventure programs", text: "Packages and single sessions for trainer-led walks and adventure outings." },
];

export default function PackagesOverviewPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/packages" />
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">Canine Confidence programs</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">Programs built around the work your dog needs</h1>
          <p className="text-xl leading-relaxed text-medium-grey">Programs and packages are now grouped by the kind of support you are looking for, making it easier to compare the right options before you book.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="rounded-2xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-bold text-charcoal">{path.title}</h2>
              <p className="mb-5 leading-relaxed text-medium-grey">{path.text}</p>
              <span className="font-semibold text-primary-blue">Explore programs →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
