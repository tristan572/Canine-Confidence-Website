import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";

const paths = [
  { href: "/puppy", title: "Puppy", text: "Start your puppy with private in-home coaching and the Confident Start Program." },
  { href: "/behaviour-obedience", title: "Behaviour & Obedience", text: "Get help with manners, anxiety, reactivity and the behaviours making daily life hard." },
  { href: "/walking-adventure", title: "Walking & Adventure", text: "Choose trainer-led walks, adventure outings or real-world skill building." },
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/services" />
      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">Canine Confidence services</p>
          <h1 className="mb-5 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">Find the support that fits your dog</h1>
          <p className="text-xl leading-relaxed text-medium-grey">Services are now organised around what you and your dog need right now. Choose a path below to see the available options and how booking works.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="rounded-2xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-bold text-charcoal">{path.title}</h2>
              <p className="mb-5 leading-relaxed text-medium-grey">{path.text}</p>
              <span className="font-semibold text-primary-blue">View options →</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
