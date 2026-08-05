import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { LocalBusinessSchema } from "@/components/StructuredData";
import TestimonialCard from "@/components/ui/testimonial-card";
import BlogCard from "@/components/ui/blog-card";
import {
  AssessmentButton,
  ConsultationButton,
} from "@/components/funnel/funnel-cta";
import type { BlogPost, Testimonial } from "@shared/schema";
import heroJpeg from "@assets/IMG_0177_fallback_opt.jpg";
import hero400 from "@assets/IMG_0177_hero_400_opt.webp";
import hero800 from "@assets/IMG_0177_hero_800_opt.webp";
import hero1200 from "@assets/IMG_0177_hero_1200_opt.webp";
import puppyCardImage from "@assets/image_1750048904991_opt.webp";
import behaviourCardImage from "@assets/IMG_0237_1760870095911.jpeg";
import walkingCardImage from "@assets/image_1750049520029_opt.webp";

const doors = [
  {
    href: "/puppy",
    title: "Puppy",
    kicker: "Start them right",
    image: puppyCardImage,
    imagePosition: "object-center",
    text: "Stop worrying about toilet training, biting and whether you are getting socialisation right. Build confidence, connection and clear communication from the start.",
    note: "Direct booking. No assessment required.",
  },
  {
    href: "/behaviour-obedience",
    title: "Behaviour & Obedience",
    kicker: "Training for real life",
    image: behaviourCardImage,
    imagePosition: "object-[center_75%]",
    text: "From bad manners, to obedience, reactivity and anxiety, I look beyond the visible behaviour and build skills that make daily life calmer.",
    note: "New clients start with an assessment.",
  },
  {
    href: "/walking-adventure",
    title: "Walking & Adventure",
    kicker: "More than exercise",
    image: walkingCardImage,
    imagePosition: "object-center",
    text: "Purposeful adventures, exercise and enrichment that leave your dog fulfilled, content and ready to settle at home.",
    note: "New clients start with an assessment.",
  },
];

const methodPoints = [
  { number: "01", title: "Built around your dog", text: "I look at genetics, drives, past learning and what daily life actually looks like, then tailor the training to the dog in front of me." },
  { number: "02", title: "Play with a purpose", text: "Play is high-value engagement. Used properly, it builds trust, motivation and the kind of focus that makes learning faster." },
  { number: "03", title: "Clarity at both ends of the lead", text: "Your dog gets consistent communication they can understand, while you learn what to do and why it works." },
  { number: "04", title: "Results that hold up outside", text: "I work in-home and out in the real world, because training only matters if it still works around everyday distractions." },
];

export default function HomePage() {
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  return (
    <div className="min-h-screen">
      <SEO
        title="Dog Training North Brisbane | Canine Confidence"
        description="Dog training on Brisbane's Northside. Build a calmer home and stronger bond through play, clarity and practical real-world training."
        canonical="https://www.canineconfidence.com.au/"
      />
      <LocalBusinessSchema />

      <section className="hero-gradient py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="mb-3 text-4xl font-bold leading-tight text-charcoal lg:text-6xl">
              North Brisbane <span className="text-primary-blue">Dog Training</span> for Calm, Connected Dogs
            </h1>
            <h2 className="mb-5 text-2xl font-semibold leading-tight text-charcoal lg:text-3xl">
              The Dog You Always Pictured
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-medium-grey">
              I train dogs across North Brisbane to be calm, focused and connected
              with their owners. I work in-home and in everyday environments,
              using play, fulfilment and clear communication to build skills that
              hold up when life gets busy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <AssessmentButton location="Home hero" className="px-7 py-4 text-lg" showIcon={false} />
              <ConsultationButton className="btn-secondary px-7 py-4 text-lg" showIcon={false} />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-medium-grey">
              In-home training · Real-world practice · Lifelong Results
            </p>
          </div>
          <picture>
            <source
              type="image/webp"
              srcSet={`${hero400} 400w, ${hero800} 800w, ${hero1200} 1200w`}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <img
              src={heroJpeg}
              alt="Tristan training a dog outdoors in North Brisbane"
              className="h-auto w-full rounded-2xl shadow-2xl"
              width={640}
              height={480}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 text-3xl font-bold text-charcoal lg:text-4xl">
              What would make life with your dog better?
            </h2>
            <p className="text-lg text-medium-grey">
              Start with what needs to change. I will help you choose the training
              that gets you from daily frustration to a calmer, more connected dog
              you can enjoy living with.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {doors.map(({ href, title, kicker, image, imagePosition, text, note }) => (
              <Link key={href} href={href} className="group block h-full">
                <Card className="h-full overflow-hidden border-0 bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <img
                      src={image}
                      alt=""
                      className={`h-full w-full object-cover ${imagePosition} transition duration-500 group-hover:scale-105`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <p className="absolute bottom-5 left-6 right-6 text-sm font-bold uppercase tracking-[0.14em] text-white">
                      {kicker}
                    </p>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="mb-3 text-2xl font-bold text-charcoal">{title}</h3>
                    <p className="mb-5 leading-relaxed text-medium-grey">{text}</p>
                    <p className="mb-6 text-sm font-semibold text-charcoal">{note}</p>
                    <span className="font-bold text-primary-blue transition group-hover:tracking-wide">
                      See your options →
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-primary-blue">
                Five-star feedback
              </div>
              <h2 className="text-3xl font-bold text-charcoal lg:text-4xl">
                Five-star feedback from the people living the difference.
              </h2>
              <p className="mt-3 max-w-2xl text-lg text-medium-grey">
                Five-star feedback from owners who wanted more than obedience in
                the backyard. They wanted calmer homes, easier walks and a better
                relationship with their dog.
              </p>
            </div>
            <Link href="/reviews" className="inline-flex items-center font-semibold text-primary-blue hover:underline">
              Read all reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {testimonials.slice(0, 2).map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl border-l-4 border-primary-blue pl-6">
            <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">Why Canine Confidence</p>
            <h2 className="mb-4 text-3xl font-bold text-charcoal lg:text-4xl">
              Every dog is different. So is every program.
            </h2>
            <p className="text-lg leading-relaxed text-medium-grey">
              I do not force every dog through the same formula. I look at your
              dog's genetics, their drives and what your daily life actually looks
              like, then build the work around that. I aim for a confident,
              connected dog with the skills to handle everyday life.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">
            {methodPoints.map(({ number, title, text }) => (
              <article key={title} className="rounded-2xl border border-blue-100 bg-blue-50 p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <p className="mb-6 text-4xl font-black text-primary-blue">{number}</p>
                <h3 className="mb-3 text-lg font-bold text-charcoal">{title}</h3>
                <p className="leading-relaxed text-medium-grey">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/method" className="font-semibold text-primary-blue hover:underline">
              See how I train →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary-blue py-16 text-center text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">Most dog problems have a clear cause</h2>
          <p className="mb-8 text-lg text-blue-100">
            Once I understand the behaviour and the circumstances around it, I can
            give you practical first steps. Your assessment gives you a training
            plan built around your dog and your life.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <AssessmentButton
              location="Home final CTA"
              className="bg-white text-primary-blue hover:bg-gray-50"
              showIcon={false}
            />
            <ConsultationButton
              label="Ask About Your Dog First"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-blue"
              showIcon={false}
            />
          </div>
        </div>
      </section>

      {blogPosts.length > 0 && (
        <section className="bg-gray-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div className="max-w-3xl">
                <p className="mb-3 font-semibold uppercase tracking-wide text-primary-blue">
                  From the blog
                </p>
                <h2 className="mb-4 text-3xl font-bold text-charcoal lg:text-4xl">
                  Practical dog training advice
                </h2>
                <p className="text-lg text-medium-grey">
                  Straight answers about behaviour, training and life with your dog.
                </p>
              </div>
              <Link href="/blog" className="inline-flex font-semibold text-primary-blue hover:underline">
                Read all articles →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
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
