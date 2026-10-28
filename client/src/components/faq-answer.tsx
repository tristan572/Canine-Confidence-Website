import { Link } from "wouter";
import type { FaqParagraph } from "@shared/faq-content";

// Renders an FAQ answer's paragraphs, turning link segments into internal links.
export default function FaqAnswer({
  answer,
  className = "",
}: {
  answer: FaqParagraph[];
  className?: string;
}) {
  return (
    <>
      {answer.map((paragraph, index) => (
        <p key={index} className={className}>
          {typeof paragraph === "string"
            ? paragraph
            : paragraph.map((segment, segmentIndex) =>
                typeof segment === "string" ? (
                  segment
                ) : (
                  <Link key={segmentIndex} href={segment.href} className="text-primary-blue hover:underline">
                    {segment.text}
                  </Link>
                ),
              )}
        </p>
      ))}
    </>
  );
}
