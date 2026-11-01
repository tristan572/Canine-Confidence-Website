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
import { ArrowLeft, ArrowRight, CheckCircle2, Play, Plus, Star, X } from "lucide-react";
import { useRef, useState } from "react";
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
import bean480 from "@assets/review_bean_480.webp";
import bean768 from "@assets/review_bean_768.webp";
import beanJpeg from "@assets/review_bean_768.jpg";
import lyla480 from "@assets/review_lyla_480.webp";
import lyla768 from "@assets/review_lyla_768.webp";
import lylaJpeg from "@assets/review_lyla_768.jpg";
import lylaClip from "@assets/review_lyla_clip.mp4";
import archie480 from "@assets/review_archie_480.webp";
import archie768 from "@assets/review_archie_768.webp";
import archieJpeg from "@assets/review_archie_768.jpg";
import molly480 from "@assets/review_molly_480.webp";
import molly768 from "@assets/review_molly_768.webp";
import mollyJpeg from "@assets/review_molly_768.jpg";
import ziggy480 from "@assets/review_ziggy_480.webp";
import ziggy768 from "@assets/review_ziggy_768.webp";
import ziggyJpeg from "@assets/review_ziggy_768.jpg";
import rae480 from "@assets/review_rae_480.webp";
import rae768 from "@assets/review_rae_768.webp";
import raeJpeg from "@assets/review_rae_768.jpg";

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
  dog: "Ziggy, an enthusiastic young puppy",
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

const caseStudies = [
  {
    dog: "Bean",
    owner: "Patsy",
    program: "Private coaching",
    before: "Locked onto balls and bones on walks and wouldn't give them up. Frustration-based reactivity.",
    work: "Taught key words through play, then carried them into everyday walks.",
    after: "Lets go when asked, and his reactivity was resolved after four coaching sessions.",
    quote: "The whole process has improved my relationship with Bean.",
    photo: { webp: `${bean480} 480w, ${bean768} 768w`, jpeg: beanJpeg, alt: "Tristan crouching beside Bean, who is lying calmly on the grass" },
  },
  {
    dog: "Lyla",
    owner: "Alex C.",
    program: "3 week intensive",
    before: "A stubborn Malamute, unruly at home, challenging on walks and aggressive towards other dogs.",
    work: "Guidance, praise, positive reinforcement and fair correction, with Alex learning to communicate more clearly.",
    after: "Ignores other dogs' reactions and stays engaged with Alex instead of choosing aggression, and Alex feels far more confident handling her.",
    quote: "I didn’t feel judged once, no matter how cheeky she was or how frustrated I got.",
    photo: { webp: `${lyla480} 480w, ${lyla768} 768w`, jpeg: lylaJpeg, alt: "Tristan standing beside Lyla, a Malamute, in a backyard" },
    video: lylaClip,
  },
  {
    dog: "Archie",
    owner: "Sheridan",
    program: "Lead walking",
    before: "A Brittany Spaniel with two years of frustrating lead pulling.",
    work: "Trained Archie, then taught the family how to guide him, with realistic expectations for his breed.",
    after: "Zero pulling, and Sheridan walks him with complete confidence.",
    quote: "Thank you, Tristan, for giving us back the joy of walking our dog.",
    photo: { webp: `${archie480} 480w, ${archie768} 768w`, jpeg: archieJpeg, alt: "Archie, a Brittany Spaniel, standing on the grass looking up happily" },
  },
  {
    dog: "Molly",
    owner: "Stephanie",
    program: "Puppy program",
    before: "New dog parents with a very high-energy Staffy pup.",
    work: "The basics at home first, then sessions out in the real world where they were struggling.",
    after: "Learning simple commands, looking to her family for direction and exploring new things with ease.",
    quote: "Implementing the basics at this age has given us the confidence in this journey.",
    photo: { webp: `${molly480} 480w, ${molly768} 768w`, jpeg: mollyJpeg, alt: "Tristan holding Molly, a grey Staffy puppy, at her home" },
  },
  {
    dog: "Ziggy",
    owner: "Anna",
    program: "Coaching and walk & train",
    before: "A high-energy adolescent Staffy cross, and office days meant doggy daycare.",
    work: "Coaching for engagement and clearer communication, plus walk and train sessions on office days, with video updates.",
    after: "Walking at heel on her first walk and train, and home fulfilled and mentally stimulated.",
    quote: "My partner couldn’t believe it when we got sent a video of her walking beautifully at heel on the FIRST walk and train.",
    photo: { webp: `${ziggy480} 480w, ${ziggy768} 768w`, jpeg: ziggyJpeg, alt: "Ziggy, a black and white Staffy cross, lying on the grass beside a ball during a training walk" },
  },
  {
    dog: "Rae",
    owner: "Brodie",
    program: "Coaching and training walks",
    before: "Pulling on the lead made walks hard work.",
    work: "Calm lead walking, learning to read Rae's cues, and training walks while the family was at work, with photo and video updates.",
    after: "Big improvements in lead walking and overall obedience in a short time.",
    quote: "…taught us how to better understand Rae and her cues, which has made walking her genuinely enjoyable again.",
    photo: { webp: `${rae480} 480w, ${rae768} 768w`, jpeg: raeJpeg, alt: "Rae sitting on the grass on lead, looking up happily" },
  },
  // Buster (Rich's rescue) is ready to swap back in once there's a photo of him.
  // {
  //   dog: "Buster",
  //   owner: "Rich",
  //   program: "Training program",
  //   before: "A 1-year-old Staffy/Boxer, recently rehomed from a rescue shelter.",
  //   work: "A progressive, well-structured program.",
  //   after: "Real progress in just a few weeks.",
  //   quote: "The progress we have made in just a few weeks has been a real game changer!",
  // },
];

type CaseStudy = (typeof caseStudies)[number] & {
  photo?: { webp: string; jpeg: string; alt: string };
  video?: string;
};

// The clip only downloads once someone taps Watch, so it costs nothing on
// page load.
function ReviewMedia({ dog, photo, video }: Pick<CaseStudy, "dog" | "photo" | "video">) {
  const [playing, setPlaying] = useState(false);

  if (!photo) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-sand" aria-hidden="true">
        <span className="px-6 text-center font-quote text-6xl italic text-primary/30">{dog}</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {playing && video ? (
        <video
          src={video}
          poster={photo.jpeg}
          className="aspect-[4/5] w-full bg-navy object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-label={`Video of ${dog} on a training walk`}
        />
      ) : (
        <picture>
          <source type="image/webp" srcSet={photo.webp} sizes="(max-width: 640px) 85vw, 384px" />
          <img
            src={photo.jpeg}
            alt={photo.alt}
            className="aspect-[4/5] w-full object-cover"
            width={768}
            height={960}
            loading="lazy"
            decoding="async"
          />
        </picture>
      )}
      {video && (
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-navy/85 px-4 py-2 text-sm font-extrabold text-white backdrop-blur-sm transition-colors hover:bg-navy"
        >
          {playing ? <X className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
          {playing ? "Close video" : `Watch ${dog}`}
        </button>
      )}
    </div>
  );
}

// Swipeable on touch, scroll-snapped, with arrow buttons on larger screens.
// Plain overflow scrolling, so the cards still render in the prerender.
function ReviewCards() {
  const track = useRef<HTMLUListElement>(null);
  const scroll = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (el && card) el.scrollBy({ left: direction * (card.clientWidth + 24), behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={track}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:scroll-px-6 sm:px-6 lg:-mx-8 lg:scroll-px-8 lg:px-8 [&::-webkit-scrollbar]:hidden"
        aria-label="Client reviews"
      >
        {(caseStudies as CaseStudy[]).map(({ dog, owner, program, before, after, quote, photo, video }) => (
          <li key={dog} className="w-[85%] shrink-0 snap-start sm:w-[22rem] lg:w-[24rem]">
            <article className="flex h-full flex-col overflow-hidden rounded-[22px] bg-cream text-charcoal shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
              <ReviewMedia dog={dog} photo={photo} video={video} />
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-quote text-3xl not-italic text-charcoal">{dog}</h3>
                    <p className="text-sm font-semibold text-medium-grey">{program}</p>
                  </div>
                  <div role="img" aria-label="5 out of 5 stars"><Stars /></div>
                </div>
                <blockquote className="mb-6 font-quote text-xl italic leading-snug text-charcoal">
                  “{quote}”
                  <footer className="mt-2 text-sm font-bold not-italic text-medium-grey">{owner}</footer>
                </blockquote>
                <dl className="mt-auto space-y-3 border-t border-charcoal/10 pt-5 text-[15px] leading-relaxed">
                  <div>
                    <dt className="mb-1 text-xs font-extrabold uppercase tracking-[0.14em] text-sky-deep">Before</dt>
                    <dd className="text-medium-grey">{before}</dd>
                  </div>
                  <div>
                    <dt className="mb-1 text-xs font-extrabold uppercase tracking-[0.14em] text-sky-deep">After</dt>
                    <dd className="font-semibold text-charcoal">{after}</dd>
                  </div>
                </dl>
              </div>
            </article>
          </li>
        ))}
      </ul>
      <div className="mt-6 hidden gap-3 sm:flex">
        <button type="button" onClick={() => scroll(-1)} aria-label="Previous review" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-navy">
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button type="button" onClick={() => scroll(1)} aria-label="Next review" className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-navy">
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

const programBenefits = [
  { title: "Your dog stays home", text: "No kennels and no weeks apart. Your dog learns with an experienced handler, in the places they actually live." },
  { title: "You don't need to be home", text: "Trainer-led sessions can happen while you're at work. You get video updates and short tutorials along the way." },
  { title: "You take over skills that already work", text: "By your coaching session the hard part is done, so you learn how to keep it going instead of starting from scratch." },
];

const programSteps = [
  ...Array.from({ length: 4 }, () => ({ title: "Trainer-led session", text: "I work with your dog at home or on walks.", coaching: false })),
  { title: "Coaching session with you", text: "I show you what to do, why it works and how to keep it going.", coaching: true },
];

// Draft ladder: one weekly rhythm (4 trainer-led + 1 coaching) over 1, 3 or
// 6 weeks. The 3-week program's name is a working title and its details
// aren't decided yet.
const programLadder = [
  { stage: "Foundation", weeks: "1 week", name: "The Foundation Program", sessions: "5 sessions", text: "Motivation and communication. The foundations every other skill is built on." },
  { stage: "Connection", weeks: "3 weeks", name: "The Connected Companion", sessions: "15 sessions", text: "Details to come." },
  { stage: "Balance", weeks: "6 weeks", name: "From Chaos to Calm", sessions: "30 sessions", text: "For reactivity, anxiety and complex behaviour, with time to change how your dog feels as well as what they do." },
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
  { number: "01", title: "Health", text: "A dog that feels good in their body. Steady energy, good sleep and comfortable with touch and grooming, so they're ready to learn." },
  { number: "02", title: "Lifestyle", text: "A dog whose needs are met. With a proper outlet for their drives, they can switch off at home instead of finding their own entertainment." },
  { number: "03", title: "Clarity", text: "A dog that understands you. Fewer mixed messages and repeated commands, and a dog that knows what you're asking and what happens next." },
  { number: "04", title: "Skills", text: "A dog you can take places. Calmer walks, a recall you can trust and manners that still work at the park, the café and when visitors arrive." },
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
          <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow mb-3">Why Canine Confidence</p>
              <h2 className="text-3xl font-extrabold text-charcoal lg:text-4xl">
                A balanced dog is built on four blocks
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-medium-grey">
              When all four are in place, you get a dog that's calm because their
              needs are met, confident because they understand the world, and
              easier to live with because their skills work in everyday life.
              Each block builds on the one before it.
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
            <div className="self-center">
              <p className="mb-6 text-sm font-extrabold uppercase tracking-[0.14em] text-medium-grey">One week of training</p>
              <ol className="relative space-y-6 before:absolute before:bottom-6 before:left-[21px] before:top-6 before:w-0.5 before:bg-navy/15">
                {programSteps.map(({ title, text, coaching }, i) => (
                  <li key={i} className="relative flex items-start gap-5">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg font-extrabold ${coaching ? "bg-sky-brand text-navy" : "bg-primary text-white"}`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <p className="font-extrabold text-charcoal">{title}</p>
                      <p className="text-sm text-medium-grey">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
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
