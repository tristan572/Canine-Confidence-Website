// Renders the limited markdown actually used in service/package descriptions
// (paragraphs separated by a blank line, **bold** spans) without pulling in
// react-markdown's full CommonMark parser. Not a general markdown renderer —
// use ReactMarkdown directly for content that needs headings, lists, or links
// (e.g. blog posts).
export default function FormattedText({ text }: { text: string }) {
  const paragraphs = text.split("\n\n");

  return (
    <>
      {paragraphs.map((paragraph, i) => {
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g);
        return (
          <p key={i}>
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j}>{part.slice(2, -2)}</strong>
              ) : (
                part
              )
            )}
          </p>
        );
      })}
    </>
  );
}
