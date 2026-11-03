import { useEffect } from "react";
import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";
import { AssessmentButton, ConsultationButton } from "@/components/funnel/funnel-cta";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAD_PAWS_REVIEW_FLOOR } from "@shared/social-proof";
import portrait600 from "@assets/about_hero_600.webp";
import portrait1000 from "@assets/about_hero_1000.webp";
import portraitJpeg from "@assets/about_hero_800.jpg";
import training640 from "@assets/about_play_640.webp";
import training1000 from "@assets/about_play_1000.webp";
import trainingJpeg from "@assets/about_play_800.jpg";
import FinalCta from "@/components/funnel/final-cta";
import { usePricing } from "@/hooks/use-pricing";
import { HERO_PHOTO, HERO_SECTION } from "@/lib/hero";

// How it feels to work with Tristan, in his own terms. Short on purpose: the
// story above carries the page; these are the promises.
const promises = [
  { title: "Your dog is safe with me", text: "I train the dog in front of me, with care and with respect for who they are. Safety comes first, every session." },
  { title: "No judgement", text: "Most owners have already tried a few things by the time they call me. You'll never be made to feel bad about where you're starting from." },
  { title: "I turn up, and I stay available", text: "I come to you anywhere across North Brisbane, I'm as flexible as I can be with session times, and I'm a message away when something comes up, long after your program ends." },
];

const blocks = ["Health", "Lifestyle", "Clarity", "Skills"];

export default function AboutPage() {
  const pricing = usePricing();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <StaticSEO
        path="/about"
        keywords={[
          "NDTF certified dog trainer",
          "North Brisbane dog trainer",
          "professional dog trainer Brisbane",
          "play-based dog training",
        ]}
      />

      {/* Hero: portrait beside one line that sums up who Tristan is. */}
      <section className={HERO_SECTION}>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-3">About Tristan</p>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.05] text-charcoal lg:text-6xl">
              The trainer your dog can't wait to see.
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-medium-grey lg:text-xl">
              I'm Tristan. I've spent years learning how dogs think, feel and learn,
              and what I love doing most is helping dogs and their owners across
              North Brisbane build a life they both enjoy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="About hero" className="px-7 py-4 text-lg" />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" />
            </div>
          </div>
          <picture className="lg:col-span-6">
            <source type="image/webp" srcSet={`${portrait600} 600w, ${portrait1000} 1000w`} sizes="(max-width: 1024px) 100vw, 50vw" />
            <img
              src={portraitJpeg}
              alt="Tristan from Canine Confidence smiling in a North Brisbane park, with a grey staffy sitting at his feet looking up at him"
              className={`h-[28rem] w-full rounded-[26px] object-[center_20%] sm:h-[34rem] ${HERO_PHOTO}`}
              width={1000}
              height={1333}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      {/* The story, told as a story. */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-3">How I got here</p>
          <h2 className="mb-10 text-3xl font-extrabold text-charcoal lg:text-5xl lg:leading-[1.1]">
            A weekend hobby I couldn't stop thinking about.
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-medium-grey lg:text-xl">
            <p>
              I started training my own dog in 2016. It began as something to do
              on weekends, and it quickly became the thing I thought about the
              rest of the week.
            </p>
            <p>
              For years I kept it alongside a regular job. Then in 2020 I was made
              redundant, and I took it as the push I'd been waiting for.
            </p>
          </div>
          <blockquote className="my-12 border-l-2 border-sky-brand pl-6 font-quote text-2xl italic leading-snug text-charcoal lg:pl-10 lg:text-3xl">
            “I didn't want to be another backyard trainer. I wanted to actually
            understand dogs.”
          </blockquote>
          <div className="space-y-6 text-lg leading-relaxed text-medium-grey lg:text-xl">
            <p>
              So I studied with the National Dog Trainers Federation and earned my
              Certificate III in Dog Behaviour and Training. That was where the
              learning started.
            </p>
            <p>
              Since then it's been books, podcasts, seminars and courses, and
              above all, dogs. Hundreds of them across North Brisbane, every
              breed and temperament you can think of. I never stop studying, and
              every dog I work with teaches me something new.
            </p>
          </div>
          <h3 className="mb-6 mt-16 font-quote text-2xl not-italic text-charcoal lg:text-4xl">
            Why I started Canine Confidence
          </h3>
          <div className="space-y-6 text-lg leading-relaxed text-medium-grey lg:text-xl">
            <p>
              A lot of dogs end up in shelters because life with them got too
              hard. Usually they're good dogs whose needs weren't being met, with
              owners who didn't get the right help in time.
            </p>
            <p className="font-semibold text-charcoal">
              I started Canine Confidence to stop that happening. I want every
              owner I work with to understand their dog, really enjoy them and get
              the best out of them, so giving up never crosses their mind.
            </p>
          </div>
        </div>
      </section>

      {/* What he believes, tied to the framework rather than a new list. */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <picture>
            <source type="image/webp" srcSet={`${training640} 640w, ${training1000} 1000w`} sizes="(max-width: 1024px) 100vw, 50vw" />
            <img
              src={trainingJpeg}
              alt="Tristan playing tug with a grey staffy under the trees in a North Brisbane park"
              className="h-auto w-full rounded-[26px] object-cover"
              width={1000}
              height={1236}
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div>
            <p className="eyebrow mb-3">What I believe</p>
            <h2 className="mb-6 text-3xl font-extrabold text-charcoal lg:text-4xl">
              Get the foundations right and behaviour follows.
            </h2>
            <div className="space-y-5 text-lg leading-relaxed text-medium-grey">
              <p>
                A lot of problem behaviour starts with a need that isn't being
                met. So before I teach a single cue, I look at what your dog is
                wired for and what their days actually look like.
              </p>
              <p>
                My own dog Cleo is the proof. She's never been destructive or
                highly anxious, because her needs are met every day.
              </p>
              <p>
                Play is my favourite tool. A dog that loves the game is
                motivated, engaged and wants to be there.
              </p>
            </div>
            <p className="mt-8 mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-medium-grey">
              The four building blocks I work through with every dog
            </p>
            <p className="font-quote text-2xl not-italic text-charcoal lg:text-3xl">
              {blocks.map((block, i) => (
                <span key={block}>
                  {block}
                  {i < blocks.length - 1 && <span className="mx-2 text-sky-brand" aria-hidden="true">→</span>}
                </span>
              ))}
            </p>
            <Link href="/blog/creating-balance-complete-framework" className="mt-6 inline-block font-extrabold text-primary hover:text-sky-deep">
              Read the full framework →
            </Link>
          </div>
        </div>
      </section>

      {/* What working with him is like, with a client's words as proof. */}
      <section className="px-2 sm:px-4 lg:px-6">
        <div className="mx-auto max-w-[88rem] rounded-[28px] bg-primary py-20 text-white lg:rounded-[32px] lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.14em] text-[#8FD3F2]">Working with me</p>
            <h2 className="mb-12 max-w-3xl text-3xl font-extrabold lg:text-4xl">
              What you can count on
            </h2>
            <ul className="grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-3">
              {promises.map(({ title, text }) => (
                <li key={title} className="border-t border-white/25 pt-6">
                  <h3 className="mb-3 font-quote text-2xl not-italic text-white">{title}</h3>
                  <p className="leading-relaxed text-white/80">{text}</p>
                </li>
              ))}
            </ul>
            <figure className="mt-16 max-w-3xl">
              <blockquote className="font-quote text-2xl italic leading-snug text-white lg:text-3xl">
                “I didn’t feel judged once, no matter how cheeky she was or how
                frustrated I got, and he was very calm and kind.”
              </blockquote>
              <figcaption className="mt-4 text-sm font-bold text-white/70">Alex C. · Owner of Lyla</figcaption>
            </figure>
            <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-white/25 pt-8 sm:grid-cols-4">
              <div>
                <dt className="text-sm font-semibold text-white/70">Google</dt>
                <dd className="text-2xl font-extrabold">{GOOGLE_RATING}★ · {GOOGLE_REVIEW_COUNT} reviews</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-white/70">Mad Paws</dt>
                <dd className="text-2xl font-extrabold">{MAD_PAWS_REVIEW_FLOOR}+ reviews</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-white/70">Qualified</dt>
                <dd className="text-2xl font-extrabold">NDTF Cert III</dd>
              </div>
              <div>
                <dt className="text-sm font-semibold text-white/70">Cover</dt>
                <dd className="text-2xl font-extrabold">Fully insured</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Next step */}
      <FinalCta
        heading="Let's meet your dog."
        text="Start with an assessment at your home. If you'd like to talk it through first, request a free 15-minute call and I'll get back to you within 24 hours."
        location="About final CTA"
      />
    </div>
  );
}
