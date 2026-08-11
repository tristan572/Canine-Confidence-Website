import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { StaticSEO } from "@/components/SEO";
import { AssessmentButton, ConsultationButton } from "@/components/funnel/funnel-cta";

export interface LocalHighlight {
  label: string;
  title: string;
  text: string;
}

export interface LocalFaq {
  question: string;
  answer: string;
}

export interface LocalTrainingPageProps {
  suburb: string;
  nearbyAreas: string;
  seoPath: string;
  eyebrow: string;
  heroHeading: string;
  heroSubheading: string;
  heroCopy: string;
  heroImage: string;
  heroImageAlt: string;
  localHeading: string;
  localIntro: string;
  highlights: LocalHighlight[];
  fitHeading: string;
  fitCopy: string;
  problems: string[];
  localProcessCopy: string;
  faqs: LocalFaq[];
}

const servicePaths = [
  {
    href: "/behaviour-obedience",
    label: "Behaviour & Obedience",
    text: "Help with manners, pulling, barking, over-excitement, anxiety, reactivity and the behaviours making daily life harder.",
    note: "Adult dogs start with an assessment.",
  },
  {
    href: "/puppy",
    label: "Puppy Training",
    text: "Private in-home coaching for house training, socialisation, communication and the practical skills a young dog needs.",
    note: "The Confident Start Program can be booked directly.",
  },
  {
    href: "/walking-adventure",
    label: "Walking & Adventure",
    text: "Trainer-led walks, purposeful adventures and reliable support when your dog needs exercise, enrichment or outdoor skill work.",
    note: "Adult training starts with an assessment. Local Walk availability starts with a free phone consult.",
  },
];

export default function LocalTrainingPage({
  suburb,
  nearbyAreas,
  seoPath,
  eyebrow,
  heroHeading,
  heroSubheading,
  heroCopy,
  heroImage,
  heroImageAlt,
  localHeading,
  localIntro,
  highlights,
  fitHeading,
  fitCopy,
  problems,
  localProcessCopy,
  faqs,
}: LocalTrainingPageProps) {
  return (
    <div className="min-h-screen">
      <StaticSEO path={seoPath} />

      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.14em] text-primary-blue">
              {eyebrow}
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">
              {heroHeading}
            </h1>
            <h2 className="mb-5 text-2xl font-semibold leading-tight text-charcoal lg:text-3xl">
              {heroSubheading}
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">{heroCopy}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AssessmentButton location={`${suburb} hero`} className="px-7 py-4 text-lg" />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
            <p className="mt-5 text-sm font-semibold text-medium-grey">
              In-home and local training across {nearbyAreas}
            </p>
          </div>
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="max-h-[620px] w-full rounded-2xl object-cover shadow-2xl"
            width={640}
            height={640}
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-[0.14em] text-primary-blue">
              Training around {suburb}
            </p>
            <h2 className="mb-4 text-3xl font-bold text-charcoal lg:text-4xl">{localHeading}</h2>
            <p className="text-lg leading-relaxed text-medium-grey">{localIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-2xl border border-gray-200 border-t-4 border-t-primary-blue bg-white p-7 shadow-sm"
              >
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-primary-blue">
                  {highlight.label}
                </p>
                <h3 className="mb-3 text-xl font-bold text-charcoal">{highlight.title}</h3>
                <p className="leading-relaxed text-medium-grey">{highlight.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">{fitHeading}</h2>
            <p className="text-lg leading-relaxed text-gray-200">{fitCopy}</p>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <li key={problem} className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-semibold">
                {problem}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 font-semibold uppercase tracking-[0.14em] text-primary-blue">
              Choose the right path
            </p>
            <h2 className="mb-4 text-3xl font-bold text-charcoal lg:text-4xl">
              Dog training services in {suburb}
            </h2>
            <p className="text-lg leading-relaxed text-medium-grey">
              Start with the service that matches what you need now. Each page shows the program options, inclusions and prices clearly.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {servicePaths.map((service) => (
              <Link key={service.href} href={service.href} className="group block h-full">
                <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <h3 className="mb-3 text-2xl font-bold text-charcoal">{service.label}</h3>
                  <p className="mb-5 flex-1 leading-relaxed text-medium-grey">{service.text}</p>
                  <p className="mb-5 text-sm font-semibold text-charcoal">{service.note}</p>
                  <span className="inline-flex items-center font-bold text-primary-blue">
                    View services <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-[0.14em] text-primary-blue">
              How it works
            </p>
            <h2 className="mb-4 text-3xl font-bold text-charcoal">Training that starts with your dog</h2>
            <p className="text-lg leading-relaxed text-medium-grey">{localProcessCopy}</p>
          </div>
          <ol className="space-y-4">
            <li className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-primary-blue">Step 1</p>
              <h3 className="mb-2 text-xl font-bold text-charcoal">Talk through what you need</h3>
              <p className="text-medium-grey">Use the free 15-minute phone consult if you are unsure which service fits.</p>
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-primary-blue">Step 2</p>
              <h3 className="mb-2 text-xl font-bold text-charcoal">Start with a clear plan</h3>
              <p className="text-medium-grey">Adult dogs begin with an assessment. Puppy clients can book The Confident Start Program directly.</p>
            </li>
            <li className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <p className="mb-1 text-sm font-bold uppercase tracking-[0.12em] text-primary-blue">Step 3</p>
              <h3 className="mb-2 text-xl font-bold text-charcoal">Train where the skills matter</h3>
              <p className="text-medium-grey">I work in your home and around suitable local environments, then show you how to keep the progress going.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-charcoal">{suburb} dog training FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-bold text-charcoal">{faq.question}</h3>
                <p className="leading-relaxed text-medium-grey">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-4 text-3xl font-bold">Ready to make daily life with your dog easier?</h2>
          <p className="mb-7 text-lg text-blue-100">
            Book an assessment or use the free phone consult if you want to check which service suits your dog.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <AssessmentButton
              location={`${suburb} final CTA`}
              className="bg-white text-primary-blue hover:bg-gray-50"
            />
            <ConsultationButton className="border-white bg-transparent text-white hover:bg-white hover:text-primary-blue" />
          </div>
        </div>
      </section>
    </div>
  );
}
