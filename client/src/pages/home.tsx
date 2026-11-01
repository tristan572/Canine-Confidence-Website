import { usePricing } from "@/hooks/use-pricing";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { StaticSEO } from "@/components/SEO";
import { AssessmentDetails } from "@/components/funnel/assessment-intro";
import BlogCard from "@/components/ui/blog-card";
import FaqAnswer from "@/components/faq-answer";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import { CheckCircle2, Plus, Star } from "lucide-react";
import ReviewCards from "@/components/review-cards";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, MAD_PAWS_REVIEW_FLOOR } from "@shared/social-proof";
import { FAQ_ITEMS } from "@shared/faq-content";
import type { BlogPost } from "@shared/schema";
import heroJpeg from "@assets/hero_tug_1024.jpg";
import hero640 from "@assets/hero_tug_640.webp";
import hero1024 from "@assets/hero_tug_1024.webp";
import hero1536 from "@assets/hero_tug_1536.webp";
import walkingCard800 from "@assets/IMG_0084_card_800_opt.webp";
import walking1200 from "@assets/IMG_0084_1760870993102.webp";
import trainer600 from "@assets/trainer_staffy_600.webp";
import trainer1122 from "@assets/trainer_staffy_1122.webp";
import trainerJpeg from "@assets/trainer_staffy_800.jpg";

const steps = [
  { title: "Book your assessment", text: "I take the time to understand what you want to achieve and get to know your dog's temperament." },
  { title: "Get a recommended program", text: "I work out how your dog responds and learns, then recommend 1, 3 or 6 weeks of training." },
  { title: "Train at home and out in the world", text: "I work in-home and in everyday environments, so skills hold up around real distractions. You get written notes after every session." },
  { title: "Keep it going for life", text: "Dogs change as they grow and age, and life throws up new situations. Book a top-up session or a video call when you need one, or keep skills sharp with training adventures." },
];

// The four things every visitor should take away. Kept short on purpose;
// the sections further down give the detail and the proof.
const reasons = [
  { title: "I do the hard part first", text: "I train your dog myself, so you're not left struggling through the early stages, and the results come quicker." },
  { title: "Then I teach you", text: "You learn what to do, why it works and how to keep it going, so the training lasts." },
  { title: "Built around your dog", text: "I train the dog in front of me, and fit the plan around their needs and your week." },
  { title: "With you the whole way", text: "Detailed written notes, video updates and short tutorials, and I'm a message away when something comes up." },
];

const trainerPoints = [
  { title: "Safe, cared for and respected", text: "Your dog is safe with me. I train them with care, and with respect for who they are." },
  { title: "Reliable and flexible", text: "I turn up when I say I will, come to you anywhere across North Brisbane, and I'm as flexible as I can be with session times. I'm still here after your program ends." },
  { title: "Qualified and always learning", text: "NDTF certified, professional and insured. I never stop studying, so I can keep getting better results for your dog." },
];

const deliverables = [
  { title: "Detailed written notes after every session", text: "After your assessment and each coaching session, I email you everything we covered, why it matters and what to focus on first, so you can refer back to it as you practise." },
  { title: "Video updates and short tutorials", text: "During your program you'll see what your dog is learning, with short videos showing you how to do the exercises yourself." },
  { title: "Support between sessions", text: "Send me a question or a video if something isn't working, and I'll help you adjust before it becomes a habit." },
  { title: "Free guide: The Four Building Blocks of a Balanced Dog", text: "My framework of Health, Lifestyle, Clarity, then Skills. It's the order I work through with every dog, so you'll know why we start where we do." },
];

// Excerpt from a real assessment summary email, with the dog's and owners'
// names changed.
const sampleSummary = {
  dog: "MJ, an enthusiastic young puppy",
  intro: "We covered quite a lot, so I wanted to put everything into an email that you can refer back to as you practise.",
  topics: [
    "Building clear communication with markers",
    "Teaching reliable commands and recall",
    "Puppy biting and over-excitement",
    "Anxiety when someone gets out of the car",
    "Doors, gates and getting ready for walks",
    "Teaching place and calm behaviour",
    "Leash pressure",
    "Play and engagement",
  ],
  excerptTitle: "1. Building clear communication with markers",
  markers: [
    { word: "YES", meaning: "He's done the right thing, is released and gets his reward from you." },
    { word: "GET IT", meaning: "He's done the right thing, is released and gets his reward away from you, usually by chasing a tossed piece of food." },
    { word: "UH-UH", meaning: "What he's doing right now is incorrect. It interrupts or redirects the behaviour." },
  ],
  timing: "Say the marker first, then deliver the outcome. If you reach for the treat first, he may learn to watch your hand rather than listen to your marker.",
  focus: "Start with the YES and GET IT markers, short recall exercises, calm door manners and some easy place training.",
};

const programBenefits = [
  { title: "Your dog stays home", text: "No kennels and no weeks apart. Your dog learns with an experienced handler, in the places they actually live." },
  { title: "You don't need to be home", text: "Trainer-led sessions can happen while you're at work. You get video updates and short tutorials along the way." },
  { title: "You take over skills that already work", text: "By your coaching session the hard part is done, so you learn how to keep it going instead of starting from scratch." },
];


// Draft ladder: one weekly rhythm (4 trainer-led + 1 coaching) over 1, 3 or
// 6 weeks. The 3-week program's name is a working title and its details
// aren't decided yet.
const programLadder = [
  { stage: "Foundation", weeks: "1 week", name: "The Foundation Program", sessions: "5 sessions", text: "Engagement, motivation and fulfilment, plus the start of clear communication. The foundations every other skill is built on." },
  { stage: "Connection", weeks: "3 weeks", name: "The Connected Companion", sessions: "15 sessions", text: "A complete communication system and skills you can rely on in everyday life, plus work on everyday behaviour problems." },
  { stage: "Balance", weeks: "6 weeks", name: "From Chaos to Calm", sessions: "30 sessions", text: "For reactivity, anxiety, aggression and anything more complex, with time to change how your dog feels as well as what they do." },
];

// The questions that most often stop people booking. Wording comes from the
// FAQ page; the FAQPage schema stays on /faq only.
const homeFaqQuestions = [
  "What does it cost?",
  "Do you use corrections, e-collars or prong collars?",
  "How long will training take?",
  "Can you guarantee results?",
  "Will you judge me or my dog?",
  "Do I need to be present for training?",
  "Where do you work?",
];
const homeFaqs = homeFaqQuestions
  .map((question) => FAQ_ITEMS.find((item) => item.question === question))
  .filter((item): item is (typeof FAQ_ITEMS)[number] => item !== undefined);

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
  { number: "01", title: "Health", text: "Pain, poor sleep and the wrong diet all show up as behaviour. A dog that feels good in their body is ready to learn." },
  { number: "02", title: "Lifestyle", text: "A dog with nowhere to put their energy finds their own outlet: chewing, barking, pulling. Meet their needs and they can switch off at home." },
  { number: "03", title: "Clarity", text: "Without clear boundaries and feedback, dogs guess what's right and often get it wrong, and that guessing breeds anxiety. When your dog knows when they've got it right and when they haven't, they relax and succeed." },
  { number: "04", title: "Skills", text: "Built on the first three, skills become reliable. Calmer walks, a recall you can trust and manners that hold up at the park, the café and when visitors arrive." },
];

export default function HomePage() {
  const pricing = usePricing();
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen">
      <StaticSEO path="/" />

      {/* Hero */}
      {/* -mt-20 slides the hero up under the floating navbar (h-20). */}
      <section className="fixed-photo-frame relative -mt-20 flex items-center pb-20 pt-36 lg:min-h-[92vh] lg:pb-24 lg:pt-40">
        <picture>
          <source
            type="image/webp"
            srcSet={`${hero640} 640w, ${hero1024} 1024w, ${hero1536} 1536w`}
            sizes="100vw"
          />
          <img
            src={heroJpeg}
            alt="Tristan training a dog outdoors in North Brisbane"
            className="fixed-photo object-[70%_top]"
            width={1536}
            height={1024}
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-navy/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-navy/90 lg:via-navy/70 lg:to-navy/10" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-6xl">
              <span className="block">North Brisbane</span>
              <span className="block text-[#8FD3F2]">Dog Training</span>
            </h1>
            <h2 className="mb-5 text-2xl font-bold leading-snug text-white lg:text-3xl">
              The best version of <em className="font-quote font-normal">your</em> dog.
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/85 lg:text-xl">
              I train your dog, then coach you, so they listen when you need them to.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <AssessmentButton label={`Book an Assessment · ${pricing.servicePrice("Initial Canine Success Assessment")}`} location="Home hero" className="h-auto px-7 py-4 text-lg" showIcon={false} />
              <ConsultationButton className="btn-secondary h-auto border-white/60 bg-transparent px-7 py-4 text-lg text-white hover:border-white hover:bg-white/10 hover:text-white" showIcon={false} />
            </div>
            <p className="mt-4 text-white/85">
              Got a puppy?{" "}
              <Link href="/puppy" className="font-semibold text-white underline underline-offset-4 hover:text-[#8FD3F2]">
                Puppy programs can be booked directly →
              </Link>
            </p>
            {/* Proof row */}
            <dl className="mt-8 grid grid-cols-3 divide-x divide-white/25 border-t border-white/25 pt-6">
              <div className="pr-4">
                <dt className="sr-only">Google rating</dt>
                <dd className="flex items-center gap-2 text-xl font-extrabold text-white sm:text-2xl">
                  {GOOGLE_RATING} <Stars className="hidden h-4 w-4 sm:block" />
                </dd>
                <dd className="mt-1 text-sm font-semibold text-white/80">{GOOGLE_REVIEW_COUNT} Google reviews</dd>
              </div>
              <div className="px-4">
                <dt className="sr-only">Mad Paws reviews</dt>
                <dd className="text-xl font-extrabold text-white sm:text-2xl">{MAD_PAWS_REVIEW_FLOOR}+</dd>
                <dd className="mt-1 text-sm font-semibold text-white/80">Reviews on Mad Paws</dd>
              </div>
              <div className="pl-4">
                <dt className="sr-only">Certification</dt>
                <dd className="text-xl font-extrabold text-white sm:text-2xl">NDTF</dd>
                <dd className="mt-1 text-sm font-semibold text-white/80">Certified professional</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Why owners choose me. Big numbered rows beside a heading that stays
          put on desktop, so it reads differently from the four-column
          building blocks further down. */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow mb-3">Why owners choose me</p>
              <h2 className="mb-6 text-3xl font-extrabold text-charcoal lg:text-5xl lg:leading-[1.1]">
                Your dog gets a professional. You get the know-how to keep it going.
              </h2>
              <AssessmentButton location="Home why choose me" className="h-auto px-7 py-4 text-lg" showIcon={false} />
            </div>
          </div>
          <ol className="lg:col-span-7">
            {reasons.map(({ title, text }, i) => (
              <li key={title} className="grid grid-cols-[3rem_1fr] gap-x-4 border-t border-navy/15 py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] lg:py-10">
                <span className="font-quote text-3xl italic text-sky-deep sm:text-4xl" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-3 font-quote text-2xl not-italic leading-tight text-charcoal sm:text-3xl">{title}</h3>
                  <p className="text-lg leading-relaxed text-medium-grey">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Meet the trainer */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center overflow-hidden rounded-[26px] bg-sand lg:grid-cols-12">
            <picture className="lg:col-span-5">
              <source type="image/webp" srcSet={`${trainer600} 600w, ${trainer1122} 1122w`} sizes="(max-width: 1024px) 100vw, 40vw" />
              <img
                src={trainerJpeg}
                alt="Tristan from Canine Confidence with a grey staffy"
                className="h-96 w-full object-cover object-[center_20%] sm:h-[32rem] lg:h-full lg:min-h-[36rem]"
                width={1122}
                height={1402}
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="p-7 sm:p-10 lg:col-span-7 lg:px-14">
              <p className="eyebrow mb-3">Your trainer</p>
              <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">Hi, I'm Tristan.</h2>
              <p className="mb-7 text-lg leading-relaxed text-medium-grey">
                I'm the trainer your dog can't wait to see.
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
        <div className="fixed-photo-frame fixed-photo-frame-rounded relative mx-auto max-w-[88rem] rounded-[28px] bg-primary py-16 text-white lg:rounded-[32px] lg:py-24">
          <img
            src={walking1200}
            srcSet={`${walkingCard800} 800w, ${walking1200} 1200w`}
            sizes="100vw"
            alt=""
            className="fixed-photo"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
            <ReviewCards />
            <Link href="/reviews" className="mt-10 inline-flex items-center font-extrabold text-white hover:text-[#8FD3F2]">
              Read all reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="eyebrow mb-3">My framework</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                Training lasts when the foundations are solid
              </h2>
            </div>
            <div className="space-y-4 text-lg leading-relaxed text-medium-grey">
              <p>
                The average dog trainer starts with commands. A dog that's under-exercised,
                uncomfortable or confused can't hold onto a sit, let alone a recall
                at the park. That's why so many owners pay for training and end up
                back where they started.
              </p>
              <p>
                Good trainers know a dog's needs come before obedience. The Four
                Building Blocks is how I put that into practice with every dog. I
                check all four at your assessment, work through them in order, and
                build your written plan around them.
              </p>
            </div>
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
          <figure className="mt-12 max-w-3xl border-l-2 border-sky-brand pl-6 lg:pl-10">
            <blockquote className="font-quote text-2xl font-normal italic leading-snug text-charcoal lg:text-3xl">
              “I have a much better understanding of what Rocket needs, how to
              communicate with him and we have so much fun together now. No more
              frustration around the house and on walks.”
            </blockquote>
            <figcaption className="mt-3 text-sm font-bold text-medium-grey">Michael F. · Owner of Rocket</figcaption>
          </figure>
          <div className="mt-10">
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/method" className="font-extrabold text-primary hover:text-sky-deep">
                See how I train →
              </Link>
              <Link href="/blog/creating-balance-complete-framework" className="font-extrabold text-primary hover:text-sky-deep">
                Read the full framework →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How my programs work */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow mb-3">How my programs work</p>
              <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
                Like board and train, without sending your dog away.
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-medium-grey">
                Board and train means your dog lives with a trainer for weeks. My
                programs give your dog that professional start in their own home.
                Every week runs the same way: four trainer-led sessions build the
                skills, then a coaching session hands them over to you.
              </p>
              <ul className="space-y-5">
                {programBenefits.map(({ title, text }) => (
                  <li key={title} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-sky-deep" aria-hidden="true" />
                    <div>
                      <p className="font-extrabold text-charcoal">{title}</p>
                      <p className="text-medium-grey">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* One week at a glance: the strip shows the 4 + 1 rhythm, the two
                rows below say what each kind of session is. */}
            <div className="self-center rounded-[26px] bg-sand p-6 sm:p-8 lg:p-10">
              <p className="mb-5 text-sm font-extrabold uppercase tracking-[0.14em] text-medium-grey">One week of training</p>
              <ol className="mb-8 grid grid-cols-5 gap-2" aria-label="Five sessions: four trainer-led, then one coaching session">
                {[1, 2, 3, 4, 5].map((n) => (
                  <li
                    key={n}
                    className={`flex h-14 items-center justify-center rounded-xl text-lg font-extrabold ${n === 5 ? "bg-sky-brand text-navy" : "bg-primary text-white"}`}
                  >
                    {n}
                  </li>
                ))}
              </ol>
              <dl className="space-y-6">
                <div className="flex gap-4">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <div>
                    <dt className="font-extrabold text-charcoal">Sessions 1 to 4: I train your dog</dt>
                    <dd className="mt-1 text-medium-grey">At home and out on walks. I do the hard part, so the skills are already in place before you take over.</dd>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full bg-sky-brand" aria-hidden="true" />
                  <div>
                    <dt className="font-extrabold text-charcoal">Session 5: I coach you</dt>
                    <dd className="mt-1 text-medium-grey">I show you what to do, why it works and how to keep it going, with detailed written notes to follow.</dd>
                  </div>
                </div>
              </dl>
              <p className="mt-8 border-t border-navy/10 pt-5 text-sm font-semibold text-medium-grey">
                The same rhythm repeats each week until we reach the outcome you're after.
              </p>
            </div>
          </div>

          {/* The ladder: same weekly rhythm, different number of weeks. */}
          <div className="mt-16 border-t border-navy/15 pt-10 lg:mt-24">
            <h3 className="mb-8 max-w-2xl text-2xl font-extrabold text-charcoal lg:text-3xl">
              Choose how many weeks your dog needs. I'll recommend one at your assessment.
            </h3>
            <ol className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {programLadder.map(({ stage, weeks, name, sessions, text }, i) => (
                <li key={weeks} className="border-t-2 border-sky-brand pt-5">
                  <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.14em] text-sky-deep">
                    {stage}
                    {i < programLadder.length - 1 && <span aria-hidden="true" className="ml-2 text-navy/30">→</span>}
                  </p>
                  <p className="font-quote text-4xl not-italic text-charcoal">{weeks}</p>
                  <p className="mt-2 font-extrabold text-charcoal">{name}</p>
                  <p className="text-sm font-semibold text-muted-foreground">{sessions}</p>
                  <p className="mt-3 leading-relaxed text-medium-grey">{text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
              <Link href="/behaviour-obedience" className="font-extrabold text-primary hover:text-sky-deep">
                See the programs →
              </Link>
              <p className="text-medium-grey">
                Also available:{" "}
                <Link href="/puppy" className="font-semibold text-sky-deep underline underline-offset-4">Puppy programs</Link>
                {" · "}
                <Link href="/walking-adventure" className="font-semibold text-sky-deep underline underline-offset-4">Adventure &amp; Training</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="eyebrow mb-3">What you get</p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
              You leave every session knowing what to do next
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-medium-grey">
              The hour we spend together is only part of it. Most of the change
              happens in the days between sessions, so I make sure you have what
              you need to keep it going.
            </p>
            <ul className="space-y-5">
              {deliverables.map(({ title, text }) => (
                <li key={title} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-sky-deep" aria-hidden="true" />
                  <div>
                    <p className="font-extrabold text-charcoal">{title}</p>
                    <p className="text-medium-grey">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <figure className="self-start border-l-2 border-sky-brand pl-6 lg:pl-10">
            <figcaption className="mb-5">
              <p className="eyebrow mb-2 text-xs">From a real assessment summary</p>
              <p className="text-xl font-extrabold text-charcoal">Your assessment summary</p>
              <p className="mt-1 text-sm font-semibold text-muted-foreground">{sampleSummary.dog}</p>
            </figcaption>
            <p className="mb-5 font-quote text-lg italic leading-snug text-foreground">“{sampleSummary.intro}”</p>
            <p className="mb-2 font-extrabold text-charcoal">What we covered</p>
            <ol className="mb-6 grid grid-cols-1 gap-x-6 gap-y-1 text-sm text-medium-grey sm:grid-cols-2">
              {sampleSummary.topics.map((topic, i) => (
                <li key={topic}>{i + 1}. {topic}</li>
              ))}
            </ol>
            <div className="mb-6">
              <p className="mb-3 font-extrabold text-charcoal">{sampleSummary.excerptTitle}</p>
              <dl className="space-y-2 text-sm leading-relaxed">
                {sampleSummary.markers.map(({ word, meaning }) => (
                  <div key={word}>
                    <dt className="inline font-extrabold text-charcoal">{word}: </dt>
                    <dd className="inline text-medium-grey">{meaning}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-sm leading-relaxed text-medium-grey">{sampleSummary.timing}</p>
            </div>
            <p className="mb-1 font-extrabold text-charcoal">What I'd like you to focus on first</p>
            <p className="leading-relaxed text-medium-grey">{sampleSummary.focus}</p>
            <p className="mt-6 text-sm text-muted-foreground">An excerpt from one of eight sections. Names changed.</p>
          </figure>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">How it works</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                From your first session to the years ahead
              </h2>
            </div>
            <p className="max-w-md font-semibold text-charcoal">
              You don't need to choose a program before we meet.
            </p>
          </div>
          <ol className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="flex flex-col gap-3 border-t-2 border-navy/15 pt-6">
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

      {/* FAQ */}
      <section className="bg-sand py-20 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-3">Questions</p>
            <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">
              What owners ask before booking
            </h2>
            <Link href="/faq" className="font-extrabold text-primary hover:text-sky-deep">
              See all questions →
            </Link>
          </div>
          <div className="lg:col-span-8">
            {homeFaqs.map((item) => (
              <details key={item.question} className="group border-b border-navy/15 py-5 first:pt-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold text-charcoal [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <Plus className="h-5 w-5 shrink-0 text-sky-deep transition-transform group-open:rotate-45" aria-hidden="true" />
                </summary>
                <div className="mt-3 space-y-2 leading-relaxed text-medium-grey">
                  <FaqAnswer answer={item.answer} />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10 rounded-[26px] bg-sand p-8 text-charcoal sm:p-12 lg:flex-row lg:items-center lg:p-16">
            <div className="flex-1">
              <p className="mb-3 font-quote text-xl italic text-sky-deep">
                Calmer homes. Stronger bonds. Dogs that are fulfilled and thriving.
              </p>
              <h2 className="mb-4 text-3xl font-extrabold text-charcoal lg:text-4xl">Get clear on what your dog needs</h2>
              <p className="text-lg leading-relaxed text-medium-grey">
                I take the time to understand what you want to achieve, get to know
                your dog's temperament and build a plan around who they are and how
                they learn. From there, I recommend a program to get you started.
              </p>
            </div>
            <div className="w-full rounded-2xl bg-white p-7 text-foreground lg:w-96 lg:shrink-0">
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
        <section className="bg-sand py-20 lg:py-32">
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
