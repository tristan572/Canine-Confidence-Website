import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";
import FinalCta from "@/components/funnel/final-cta";

const paths = [
  { href: "/puppy", title: "Puppy Raising", text: "Start your puppy with private in-home coaching and the Confident Start Program." },
  { href: "/behaviour-obedience", title: "Behaviour & Obedience", text: "Get help with manners, anxiety, reactivity and the behaviours making daily life hard." },
  { href: "/walking-adventure", title: "Adventure & Training", text: "Choose trainer-led walks, adventure outings or real-world skill building." },
];

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/services" />
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">Canine Confidence services</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">Find the support that fits your dog</h1>
          <p className="text-xl leading-relaxed text-medium-grey">Services are now organised around what you and your dog need right now. Choose a path below to see the available options and how booking works.</p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {paths.map((path) => (
            <Link key={path.href} href={path.href} className="rounded-2xl border border-navy/10 bg-sand p-7 transition hover:-translate-y-1 hover:shadow-lg">
              <h2 className="mb-3 text-2xl font-extrabold text-charcoal">{path.title}</h2>
              <p className="mb-5 leading-relaxed text-medium-grey">{path.text}</p>
              <span className="font-semibold text-primary-blue">View options →</span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta
        heading="Not sure which service is right for you?"
        text="Start with an assessment and I'll recommend the service that suits your dog. If you'd rather talk first, ask about your dog and I'll help you work out where to start."
        location="Services final CTA"
      />
    </div>
  );
}
