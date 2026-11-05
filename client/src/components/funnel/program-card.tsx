import { programAnchorId } from "@/lib/funnel";
import { Card, CardContent } from "@/components/ui/card";
import type { FunnelProgram } from "@/lib/funnel";
import { AssessmentButton } from "./funnel-cta";

export function ProgramCard({
  program,
  location,
  directAction,
  upgrade,
}: {
  program: FunnelProgram;
  location: string;
  directAction?: React.ReactNode;
  upgrade?: { label: string; targetId: string };
}) {
  return (
    <Card
      id={programAnchorId(program.name)}
      className="flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[22px] border border-navy/10 bg-white shadow-none transition duration-300 hover:shadow-[0_20px_50px_rgba(31,33,89,0.12)]"
    >
      <CardContent className="flex h-full flex-col p-7">
        <div className="mb-5">
          <div className="mb-2 flex flex-wrap items-baseline gap-3">
            <h3 className="font-quote text-2xl not-italic leading-tight text-charcoal sm:text-3xl">{program.name}</h3>
            <span className="text-2xl font-bold text-primary-blue">{program.price}</span>
            <span className="text-sm font-semibold text-medium-grey">inc. GST</span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            {program.value && <span className="text-medium-grey">{program.value}</span>}
            {program.saving && <span className="text-primary-blue">{program.saving}</span>}
          </div>
        </div>

        <p className="mb-6 text-lg font-medium leading-relaxed text-charcoal">{program.summary}</p>

        {program.benefits && (
          <div className="mb-6">
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-sky-deep">
              What's included
            </p>
            <ul className="space-y-3">
              {program.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    benefit.startsWith("Free ")
                      ? "rounded-xl bg-sand p-3 font-semibold text-charcoal"
                      : "text-medium-grey"
                  }`}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-brand" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6 rounded-2xl bg-sand p-4 text-sm">
          <p className="mb-1 font-bold text-charcoal">
            {program.kind === "single" ? "Session details" : "Program structure"}
          </p>
          <p className="leading-relaxed text-medium-grey">{program.composition}</p>
          {program.expiry && (
            <p className="mt-2 font-medium text-charcoal">{program.expiry}</p>
          )}
        </div>

        <div className="mt-auto">
          {directAction ?? (
            <AssessmentButton
              location={`${location} | ${program.name}`}
              className="w-full"
            />
          )}
          {upgrade && (
            <a
              href={`#${upgrade.targetId}`}
              className="mt-4 block text-center text-sm font-semibold text-primary-blue hover:underline"
            >
              {upgrade.label}
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
