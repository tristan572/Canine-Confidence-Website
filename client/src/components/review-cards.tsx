import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play, Star, X } from "lucide-react";
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

// Owners' stories from Google reviews, each with a photo of the dog. Shared by
// the homepage and the Reviews page. Quotes are the owners' own words.
export const caseStudies = [
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
function Stars() {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="h-4 w-4 fill-sun text-sun" />
      ))}
    </span>
  );
}

export default function ReviewCards() {
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
