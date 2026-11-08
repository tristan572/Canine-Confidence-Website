import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/funnel/program-card";
import { ConsultationButton, CTA_COLOURS } from "@/components/funnel/funnel-cta";
import { StaticSEO } from "@/components/SEO";
import FinalCta from "@/components/funnel/final-cta";
import { usePricing } from "@/hooks/use-pricing";
import { confidentStart, CONFIDENT_START_URL } from "@/lib/funnel";
import { getBookingLinkProps } from "@/lib/analytics";
import puppy600 from "@assets/tristan-with-boxer-puppy-600.webp";
import puppy1000 from "@assets/tristan-with-boxer-puppy-1000.webp";
import puppyJpeg from "@assets/tristan-with-boxer-puppy-800.jpg";
import cuddle640 from "@assets/tristan-cuddling-boxer-puppy-640.webp";
import cuddle1200 from "@assets/tristan-cuddling-boxer-puppy-1200.webp";
import cuddleJpeg from "@assets/tristan-cuddling-boxer-puppy-960.jpg";
import strip1 from "@assets/brown-and-white-puppy.webp";
import strip1Jpeg from "@assets/brown-and-white-puppy.jpg";
import strip2 from "@assets/black-and-white-puppy.webp";
import strip2Jpeg from "@assets/black-and-white-puppy.jpg";
import strip3 from "@assets/grey-staffy-puppy.webp";
import strip3Jpeg from "@assets/grey-staffy-puppy.jpg";
import { Star } from "lucide-react";
import { GOOGLE_REVIEW_COUNT } from "@shared/social-proof";
import { HERO_PHOTO, HERO_SECTION } from "@/lib/hero";

// Real puppies from Tristan's puppy clients.
const puppyPhotos = [
  { webp: strip1, jpeg: strip1Jpeg, alt: "A fluffy brown and white puppy with its tongue out at home" },
  { webp: strip2, jpeg: strip2Jpeg, alt: "A shaggy black and white puppy sitting on a deck, looking up" },
  { webp: strip3, jpeg: strip3Jpeg, alt: "A grey Staffy puppy sitting on a timber floor, looking up" },
];

const puppyReviews = [
  {
    name: "Judith Q.",
    quote:
      "Renegade absolutely loves Tristan & we are both learning so much. Every week we make progress & learn more. … Tristan is very relaxed & calm when teaching Renegade which is the perfect way for him to grow. His tail is always wagging as he wants to learn. … I can’t recommend Canine Confidence enough. We are both learning so much & the one on one training program is a great bonding & positive experience for Renegade & myself.",
  },
  {
    name: "Stephanie D.",
    quote:
      "Half way through the puppy program with Tristan and were very happy with the results for our staffy pup Molly. Being new dog parents to a very high energy pup, we knew we needed a professional trainer who could give us all the best possible tools to ensure Molly would live a happy, stress and anxiety-free life. Implementing the basics at this age has given us the confidence in this journey and seeing her learn simple commands, looking at us for direction and simply exploring all the new things in the world with ease has been so rewarding. Tristan is flexible to move the sessions outside to the real world if theres an area your struggling with and is happy to spend more time on certain things if needed. Highly recommend!!",
  },
];

function BookButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <Button asChild className={`btn-cta ${CTA_COLOURS} h-auto px-7 py-4 text-lg ${className}`}>
      <a {...getBookingLinkProps(CONFIDENT_START_URL, "package", "The Confident Start Program")}>{label}</a>
    </Button>
  );
}

export default function PuppyPage() {
  return (
    <div className="min-h-screen">
      <StaticSEO path="/puppy" />

      {/* Hero */}
      <section className={HERO_SECTION}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-3">Puppy raising</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">
              Stop guessing through the hard parts. Start building the dog you always pictured.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-medium-grey lg:text-xl">
              Together, we build the foundations of confidence, connection and
              clear communication during your puppy's critical learning period.
              I come to your home to coach you where puppy life actually happens,
              with advice shaped around your puppy, your household and the life
              you want to share with them.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <BookButton label="Book the Confident Start Program" />
              <ConsultationButton
                className="btn-secondary h-auto px-7 py-4 text-lg"
                label="Not sure? Book a free phone consult"
                showIcon={false}
              />
            </div>
            <p className="mt-5 text-sm font-semibold text-medium-grey">
              No assessment required. Book directly when you are ready.
            </p>
          </div>
          <picture className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            <source type="image/webp" srcSet={`${puppy600} 600w, ${puppy1000} 1000w`} sizes="(max-width: 1024px) 100vw, 40vw" />
            <img
              src={puppyJpeg}
              alt="Tristan sitting on the grass in a family backyard with a boxer puppy at his side"
              className={`aspect-[4/5] h-auto w-full rounded-[26px] ${HERO_PHOTO}`}
              width={1000}
              height={1250}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* The goal, in one line */}
      <section className="bg-sand py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border-l-2 border-sky-brand pl-6 lg:pl-10">
            <p className="eyebrow mb-3">The goal</p>
            <p className="font-quote text-2xl font-normal italic leading-snug text-charcoal lg:text-3xl">
              I want your puppy to grow into a confident, connected dog who
              understands how to live in your world.
            </p>
          </div>
        </div>
      </section>

      {/* The program */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-6">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-3">The Confident Start Program</p>
              <h2 className="mb-6 text-3xl font-extrabold text-charcoal lg:text-5xl lg:leading-[1.1]">
                In-home coaching, where it matters
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-medium-grey">
                <p>
                  A puppy can look perfect in a class while home still feels chaotic.
                  By coming to you, I can see the setup, routines and small moments
                  behind toilet accidents, barking, chewing your possessions and
                  struggling to settle.
                </p>
                <p>
                  I show you what to change in the environment, how to communicate
                  clearly and how to use play to build trust and cooperation. You are
                  not left trying to translate generic advice back into real life.
                </p>
              </div>
              <picture>
                <source type="image/webp" srcSet={`${cuddle640} 640w, ${cuddle1200} 1200w`} sizes="(max-width: 1024px) 100vw, 45vw" />
                <img
                  src={cuddleJpeg}
                  alt="A boxer puppy climbing into Tristan's lap for a cuddle during an in-home session"
                  className="mt-8 h-auto w-full rounded-[26px] object-cover"
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
          <div className="lg:col-span-6">
            <ProgramCard
              program={confidentStart}
              location="Puppy"
              directAction={<BookButton label="Book Now" className="w-full" />}
            />
          </div>
        </div>
      </section>

      {/* Real puppies */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-3xl font-extrabold text-charcoal lg:text-4xl">
            A few of the puppies I've worked with
          </h2>
          <ul className="grid grid-cols-3 gap-3 sm:gap-5">
            {puppyPhotos.map((photo) => (
              <li key={photo.jpeg}>
                <picture>
                  <source type="image/webp" srcSet={photo.webp} />
                  <img
                    src={photo.jpeg}
                    alt={photo.alt}
                    className="aspect-square w-full rounded-[22px] object-cover"
                    width={640}
                    height={640}
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow mb-3">Google reviews</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                What puppy owners say after working with me
              </h2>
            </div>
            <div role="img" aria-label="Five stars" className="flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-sun text-sun" aria-hidden="true" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2">
            {puppyReviews.map((review) => (
              <figure key={review.name} className="border-t border-navy/15 pt-8">
                <blockquote className="font-quote text-xl font-normal italic leading-snug text-charcoal lg:text-2xl">
                  “{review.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm font-bold text-medium-grey">
                  {review.name}, Google review
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12">
            <a
              href="https://share.google/NJfyc690NWAMVb3LX"
              target="_blank"
              rel="noreferrer"
              className="font-extrabold text-primary hover:text-sky-deep"
            >
              Read all {GOOGLE_REVIEW_COUNT} Google reviews →
            </a>
          </div>
        </div>
      </section>

      <FinalCta
        heading="Give your puppy a confident start"
        text="No assessment needed for puppies. Book the program directly and I'll come to your home to start on house training, settling, manners and socialisation. If you'd like to talk it through first, ask about your puppy."
        location="Puppy final CTA"
        cardTitle="The Confident Start Program"
        details={<PuppyDetails />}
        primaryAction={<BookButton label="Book the Program" className="w-full" />}
        askLabel="Ask About Your Puppy First"
      />
    </div>
  );
}

function PuppyDetails() {
  const pricing = usePricing();
  return (
    <p className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold text-charcoal">
      <span>{pricing.packagePrice(confidentStart.name)}</span>
      <span aria-hidden="true">·</span>
      <span>6 sessions</span>
      <span aria-hidden="true">·</span>
      <span>In your home</span>
    </p>
  );
}
