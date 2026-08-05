import { Button } from "@/components/ui/button";
import { ProgramCard } from "@/components/funnel/program-card";
import { ConsultationButton } from "@/components/funnel/funnel-cta";
import { SEO } from "@/components/SEO";
import { confidentStart, CONFIDENT_START_URL } from "@/lib/funnel";
import { openBookingUrl } from "@/lib/analytics";
import puppyImage from "@assets/image_1750048904991_opt.webp";
import { Calendar } from "lucide-react";

export default function PuppyPage() {
  const bookNow = () =>
    openBookingUrl(CONFIDENT_START_URL, "package", "The Confident Start Program");

  return (
    <div className="min-h-screen">
      <SEO
        title="Puppy Training North Brisbane | The Confident Start Program"
        description="Build confidence, connection and clear communication during your puppy's critical learning period with six private in-home sessions."
        canonical="https://www.canineconfidence.com.au/puppy"
      />

      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">
              Puppy training
            </p>
            <h1 className="mb-5 text-4xl font-bold leading-tight text-charcoal lg:text-5xl">
              Stop guessing through the hard parts. Start building the dog you always pictured.
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">
              Together, we build the foundations of confidence, connection and
              clear communication during your puppy's critical learning period.
              I come to your home to coach you where puppy life actually happens,
              with advice shaped around your puppy, your household and the life
              you want to share with them.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={bookNow} className="btn-primary px-7 py-4 text-lg">
                <Calendar className="mr-2 h-5 w-5" />
                Book the Confident Start Program
              </Button>
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
            <p className="mt-4 text-sm font-medium text-charcoal">
              No assessment required. Book directly when you are ready.
            </p>
          </div>
          <img
            src={puppyImage}
            alt="Puppy training with Canine Confidence"
            className="h-auto w-full rounded-2xl object-cover shadow-xl"
            width={640}
            height={480}
          />
        </div>
      </section>

      <section className="bg-primary-blue py-10 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="text-2xl font-bold leading-snug">
            I want your puppy to grow into a confident, connected dog who
            understands how to live in your world.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-charcoal">
              In-home coaching, where it matters
            </h2>
            <p className="mb-5 text-lg leading-relaxed text-medium-grey">
              A puppy can look perfect in a class while home still feels chaotic.
              By coming to you, I can see the setup, routines and small moments
              behind toilet accidents, barking, chewing your possessions and
              struggling to settle.
            </p>
            <p className="text-lg leading-relaxed text-medium-grey">
              I show you what to change in the environment, how to communicate
              clearly and how to use play to build trust and cooperation. You are
              not left trying to translate generic advice back into real life.
            </p>
          </div>
          <ProgramCard
            program={confidentStart}
            location="Puppy"
            directAction={
              <Button onClick={bookNow} className="btn-primary w-full">
                <Calendar className="mr-2 h-5 w-5" />
                Book Now
              </Button>
            }
          />
        </div>
      </section>
    </div>
  );
}
