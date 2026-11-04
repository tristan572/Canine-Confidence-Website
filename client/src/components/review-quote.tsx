import { Link } from "wouter";

// One owner's Google review as a pull quote. The quote is the owner's own
// words, trimmed with an ellipsis rather than reworded.
export default function ReviewQuote({
  label,
  quote,
  owner,
  dog,
  className = "bg-sand",
}: {
  label: string;
  quote: string;
  owner: string;
  dog: string;
  className?: string;
}) {
  return (
    <section className={`${className} py-16 lg:py-24`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <figure className="border-l-2 border-sky-brand pl-6 lg:pl-10">
          <p className="eyebrow mb-3">{label}</p>
          <blockquote className="font-quote text-2xl font-normal italic leading-snug text-charcoal lg:text-3xl">
            “{quote}”
          </blockquote>
          <figcaption className="mt-4 text-sm font-bold text-medium-grey">
            {owner} · Owner of {dog}
          </figcaption>
        </figure>
        <Link href="/reviews" className="mt-8 inline-flex font-extrabold text-primary hover:text-sky-deep">
          Read all reviews →
        </Link>
      </div>
    </section>
  );
}
