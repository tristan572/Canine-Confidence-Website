import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/funnel/program-card";
import { ConsultationButton, CTA_COLOURS } from "@/components/funnel/funnel-cta";
import { StaticSEO } from "@/components/SEO";
import { confidentStart, CONFIDENT_START_URL } from "@/lib/funnel";
import { getBookingLinkProps } from "@/lib/analytics";
import puppy480 from "@assets/puppy_renegade_480.webp";
import puppy768 from "@assets/puppy_renegade_768.webp";
import puppyJpeg from "@assets/puppy_renegade_768.jpg";
import strip1 from "@assets/puppy_strip_1.webp";
import strip1Jpeg from "@assets/puppy_strip_1.jpg";
import strip2 from "@assets/puppy_strip_2.webp";
import strip2Jpeg from "@assets/puppy_strip_2.jpg";
import strip3 from "@assets/puppy_strip_3.webp";
import strip3Jpeg from "@assets/puppy_strip_3.jpg";
import { Star } from "lucide-react";
import { GOOGLE_REVIEW_COUNT } from "@shared/social-proof";

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
      <section className="py-16 lg:py-24">
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
            <source type="image/webp" srcSet={`${puppy480} 480w, ${puppy768} 768w`} sizes="(max-width: 1024px) 100vw, 40vw" />
            <img
              src={puppyJpeg}
              alt="Renegade, a curly apricot Cavoodle puppy, looking up from the grass"
              className="aspect-[4/5] h-auto w-full rounded-[26px] object-cover"
              width={768}
              height={960}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* The goal, in one line */}
      <section className="px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-[88rem] rounded-[28px] bg-primary py-16 text-white lg:rounded-[32px] lg:py-24">
          <p className="mx-auto max-w-4xl px-4 text-center font-quote text-3xl font-normal italic leading-snug sm:px-6 lg:text-5xl">
            I want your puppy to grow into a confident, connected dog who
            understands how to live in your world.
          </p>
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

          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="https://share.google/NJfyc690NWAMVb3LX"
              target="_blank"
              rel="noreferrer"
              className="font-extrabold text-primary hover:text-sky-deep"
            >
              Read all {GOOGLE_REVIEW_COUNT} Google reviews →
            </a>
            <BookButton label="Book the Confident Start Program" />
          </div>
        </div>
      </section>
    </div>
  );
}
