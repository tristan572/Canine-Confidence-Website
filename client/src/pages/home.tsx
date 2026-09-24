import { usePricing } from "@/hooks/use-pricing";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { StaticSEO } from "@/components/SEO";
import TestimonialCard from "@/components/ui/testimonial-card";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import BlogCard from "@/components/ui/blog-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { CheckCircle2, Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAD_PAWS_REVIEW_FLOOR } from "@shared/social-proof";
import type { BlogPost, Testimonial } from "@shared/schema";
import heroJpeg from "@assets/IMG_0177_fallback_opt.jpg";
import hero400 from "@assets/IMG_0177_hero_400_opt.webp";
import hero800 from "@assets/IMG_0177_hero_800_opt.webp";
import hero1200 from "@assets/IMG_0177_hero_1200_opt.webp";
import puppyCard400 from "@assets/image_1750048904991_card_400_opt.webp";
import puppyCard800 from "@assets/image_1750048904991_opt.webp";
import behaviourCard400 from "@assets/IMG_0237_card_400_opt.webp";
import behaviourCard800 from "@assets/IMG_0237_card_800_opt.webp";
import walkingCard400 from "@assets/IMG_0084_card_400_opt.webp";
import walkingCard800 from "@assets/IMG_0084_card_800_opt.webp";
import trainerWebp from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453_opt.webp";
import trainerJpeg from "@assets/_com.apple.Foundation.NSItemProvider.abN4B8_1760871363453.jpeg";

const doors = [
  {
    href: "/behaviour-obedience",
    title: "Behaviour & Obedience",
    kicker: "Training for real life",
    image: behaviourCard800,
    imageSrcSet: `${behaviourCard400} 400w, ${behaviourCard800} 800w`,
    imagePosition: "object-[center_75%]",
    text: "From bad manners, to obedience, reactivity and anxiety, I look beyond the visible symptom behaviours and build skills that make daily life easier.",
    note: "New clients start with an assessment.",
  },
  {
    href: "/puppy",
    title: "Puppy Raising",
    kicker: "Start them right",
    image: puppyCard800,
    imageSrcSet: `${puppyCard400} 400w, ${puppyCard800} 800w`,
    imagePosition: "object-center",
    text: "Stop worrying about toilet training, biting and whether you are getting socialisation right. Build confidence, connection and clear communication from the start.",
    note: "Direct booking. No assessment required.",
  },
  {
    href: "/walking-adventure",
    title: "Adventure & Training",
    kicker: "More than exercise",
    image: walkingCard800,
    imageSrcSet: `${walkingCard400} 400w, ${walkingCard800} 800w`,
    imagePosition: "object-center",
    text: "Purposeful adventures, exercise and enrichment that leave your dog fulfilled, content and ready to settle at home.",
    note: "New clients start with an assessment.",
  },
];

const steps = [
  { title: "Book your assessment", text: "I take the time to understand what you want to achieve and get to know your dog's temperament." },
  { title: "Get a recommended program", text: "I work out how your dog responds and learns, then recommend a program to get you started." },
  { title: "Train at home and out in the world", text: "I work in-home and in everyday environments, so skills hold up around real distractions." },
];

const trainerPoints = [
  { title: "NDTF Certified Professional", text: "Nationally accredited through the National Dog Trainers Federation, with a focus on genetic fulfilment and play-based learning." },
  { title: "Professional & insured", text: "Grounded in current canine behaviour science and applied in the real world." },
  { title: "Ongoing Support", text: "Committed to your dog's progress for the long term, not just the sessions." },
];

const heroReview = "I didn’t feel judged once, no matter how cheeky she was or how frustrated I got, and he was very calm and kind.";

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className={`${className} fill-sun text-sun`} />
      ))}
    </span>
  );
}

const methodPoints = [
  { number: "01", title: "Built around your dog", text: "I look at genetics, drives, past learning and what daily life actually looks like, then tailor the training to the dog in front of me." },
  { number: "02", title: "Play with a purpose", text: "Play is high-value engagement. Used properly, it builds trust, motivation and the kind of focus that makes learning faster." },
  { number: "03", title: "Clarity at both ends of the lead", text: "Your dog gets consistent communication they can understand, while you learn what to do and why it works." },
  { number: "04", title: "Results that hold up outside", text: "I work in-home and out in the real world, because training only matters if it still works around everyday distractions." },
];

export default function HomePage() {
  const pricing = usePricing();
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen">
      <StaticSEO path="/" />

      {/* Hero */}
      <section className="hero-gradient py-12 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-charcoal lg:text-6xl">
              <span className="block">North Brisbane</span>
              <span className="block text-sky-deep">Dog Training</span>
            </h1>
            <h2 className="mb-5 text-2xl font-bold leading-snug text-charcoal lg:text-3xl">
              Calmer homes. Stronger bonds. Dogs that are fulfilled and thriving.
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-medium-grey lg:text-xl">
              I train dogs across North Brisbane to be calm, focused and connected
              with their owners. I work in-home and in everyday environments,
              using play, fulfilment and clear communication to build skills that
              hold up when life gets busy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="Home hero" className="h-auto px-7 py-4 text-lg" showIcon={false} />
              <ConsultationButton className="btn-secondary h-auto px-7 py-4 text-lg" showIcon={false} />
            </div>
            {/* Proof row */}
            <dl className="mt-8 grid grid-cols-3 divide-x divide-border border-t border-border pt-6">
              <div className="pr-4">
                <dt className="sr-only">Google rating</dt>
                <dd className="flex items-center gap-2 text-xl font-extrabold text-charcoal sm:text-2xl">
                  {GOOGLE_RATING} <Stars className="hidden h-4 w-4 sm:block" />
                </dd>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">{GOOGLE_REVIEW_COUNT} Google reviews</dd>
              </div>
              <div className="px-4">
                <dt className="sr-only">Mad Paws reviews</dt>
                <dd className="text-xl font-extrabold text-charcoal sm:text-2xl">{MAD_PAWS_REVIEW_FLOOR}+</dd>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">Reviews on Mad Paws</dd>
              </div>
              <div className="pl-4">
                <dt className="sr-only">Certification</dt>
                <dd className="text-xl font-extrabold text-charcoal sm:text-2xl">NDTF</dd>
                <dd className="mt-1 text-sm font-semibold text-muted-foreground">Certified professional</dd>
              </div>
            </dl>
          </div>
          <div className="relative pb-10 lg:pb-0">
            <picture>
              <source
                type="image/webp"
                srcSet={`${hero400} 400w, ${hero800} 800w, ${hero1200} 1200w`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <img
                src={heroJpeg}
                alt="Tristan training a dog outdoors in North Brisbane"
                className="h-auto w-full rounded-[26px] object-cover shadow-xl"
                width={640}
                height={480}
                loading="eager"
                decoding="async"
              />
            </picture>
            <figure className="absolute -bottom-2 left-4 right-4 rounded-2xl border border-border bg-white p-5 shadow-xl sm:left-auto sm:right-6 sm:max-w-sm lg:-bottom-8 lg:-left-10 lg:right-auto">
              <div className="mb-2" role="img" aria-label="5 out of 5 stars"><Stars /></div>
              <blockquote className="font-quote text-lg italic leading-snug text-foreground">
                “{heroReview}”
              </blockquote>
              <figcaption className="mt-2 text-sm font-bold text-muted-foreground">Alex C. · Owner of Lyla</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">How it works</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                Start with your dog's assessment
              </h2>
            </div>
            <p className="max-w-md font-semibold text-charcoal">
              You don't need to choose a program before we meet.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="flex flex-col gap-3 rounded-2xl border border-border bg-white p-7">
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

      {/* Services */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-3">Services</p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
              What would make life with your dog better?
            </h2>
            <p className="text-lg text-medium-grey">
              Choose the option below that best fits what you and your dog need
              right now. Whether you are raising a puppy, working through a
              behaviour issue or booking a walk or adventure, each option is
              built for a different need.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {doors.map(({ href, title, kicker, image, imageSrcSet, imagePosition, text, note }) => (
              <Link key={href} href={href} className="group block h-full">
                <Card className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                    <img
                      src={image}
                      srcSet={imageSrcSet}
                      sizes="(max-width: 1024px) 100vw, 400px"
                      alt=""
                      className={`h-full w-full object-cover ${imagePosition} transition duration-500 group-hover:scale-105`}
                      loading="lazy"
                    />
                  </div>
                  {/* flex-col + mt-auto so the footer row sits on the same
                      baseline in all three cards regardless of copy length. */}
                  <CardContent className="flex flex-1 flex-col p-7">
                    <p className="eyebrow mb-2 text-xs">{kicker}</p>
                    <h3 className="mb-3 text-2xl font-extrabold text-charcoal">{title}</h3>
                    <p className="mb-6 leading-relaxed text-medium-grey">{text}</p>
                    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
                      <p className="text-sm font-semibold text-charcoal">{note}</p>
                      <span className="font-extrabold text-primary transition group-hover:text-sky-deep">
                        See your options →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the trainer */}
      <section className="pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center overflow-hidden rounded-[26px] bg-sand lg:grid-cols-12">
            <picture className="lg:col-span-5">
              <source type="image/webp" srcSet={trainerWebp} />
              <img
                src={trainerJpeg}
                alt="Tristan from Canine Confidence with a grey staffy"
                className="h-80 w-full object-cover object-top sm:h-[28rem] lg:h-full lg:min-h-[34rem]"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="p-7 sm:p-10 lg:col-span-7 lg:px-14">
              <p className="eyebrow mb-3">Your trainer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">Hi, I'm Tristan.</h2>
              <p className="mb-7 text-lg leading-relaxed text-medium-grey">
                I want you to have a dog you can genuinely enjoy living with.
              </p>
              <ul className="space-y-5">
                {trainerPoints.map(({ title, text }) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-sky-deep" aria-hidden="true" />
                    <div>
                      <p className="font-extrabold text-charcoal">{title}</p>
                      <p className="text-medium-grey">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="mt-8 inline-block font-extrabold text-primary hover:text-sky-deep">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-[88rem] rounded-[28px] bg-primary py-16 text-white lg:rounded-[32px] lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <div>
                <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.12em] text-[#8FD3F2]">
                  Client Reviews
                </p>
                <h2 className="text-3xl font-extrabold lg:text-4xl">
                  What life with your dog can feel like
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-blue-100">
                  Read feedback from owners who wanted calmer homes, easier walks
                  and a better relationship with their dog.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-5xl font-extrabold">{GOOGLE_RATING}</span>
                <div>
                  <div role="img" aria-label={`${GOOGLE_RATING} out of 5 stars`}><Stars className="h-5 w-5" /></div>
                  <p className="mt-1 text-sm font-semibold text-blue-100">
                    {GOOGLE_REVIEW_COUNT} Google reviews · {MAD_PAWS_REVIEW_FLOOR}+ on Mad Paws
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {testimonials.filter((testimonial) => ["Patsy Poppins", "Alex C."].includes(testimonial.clientName)).map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  excerpt={testimonial.clientName === "Patsy Poppins"
                    ? "Previously Bean would lockjaw on balls or bones he picked up while walking. He now lets go when I ask."
                    : testimonial.clientName === "Alex C."
                      ? heroReview
                      : undefined}
                />
              ))}
            </div>
            <Link href="/reviews" className="mt-10 inline-flex items-center font-extrabold text-white hover:text-[#8FD3F2]">
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-sand py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow mb-3">Why Canine Confidence</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                Every dog is different. So is every program.
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-medium-grey">
              I do not force every dog through the same formula. I look at your
              dog's genetics, their drives and what your daily life actually looks
              like, then build the work around that. I aim for a confident,
              connected dog with the skills to handle everyday life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {methodPoints.map(({ number, title, text }) => (
              <article key={title} className="point-card">
                <p className="mb-4 text-3xl font-extrabold text-sky-deep">{number}</p>
                <h3 className="mb-2 text-lg font-extrabold text-charcoal">{title}</h3>
                <p className="leading-relaxed text-medium-grey">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/method" className="font-extrabold text-primary hover:text-sky-deep">
              See how I train →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 rounded-[26px] bg-primary p-8 text-white sm:p-12 lg:flex-row lg:items-center lg:p-16">
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-extrabold lg:text-4xl">Get clear on what your dog needs</h2>
              <p className="text-lg leading-relaxed text-blue-100">
                I take the time to understand what you want to achieve, get to know
                your dog's temperament and begin working out how they respond and
                learn. From there, I recommend a program to get you started.
              </p>
            </div>
            <div className="w-full rounded-2xl bg-cream p-7 text-foreground lg:w-96 lg:shrink-0">
              <p className="eyebrow mb-3">Initial Canine Success Assessment</p>
              <AssessmentDetails className="mb-6 text-lg text-charcoal" />
              <div className="flex flex-col gap-3">
                <AssessmentButton
                  location="Home final CTA"
                  className="w-full"
                  showIcon={false}
                />
                <ConsultationButton
                  label="Ask About Your Dog First"
                  className="btn-secondary w-full"
                  showIcon={false}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {blogPosts.length > 0 && (
        <section className="bg-sand py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-3xl">
                <p className="eyebrow mb-3">
                  From the blog
                </p>
                <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
                  Practical dog training advice
                </h2>
                <p className="text-lg text-medium-grey">
                  Straight answers about behaviour, training and life with your dog.
                </p>
              </div>
              <Link href="/blog" className="inline-flex font-extrabold text-primary hover:text-sky-deep">
                Read all articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
