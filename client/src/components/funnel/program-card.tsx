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
      id={program.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}
      className="flex h-full flex-col overflow-hidden border border-gray-100 border-t-4 border-t-primary-blue bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <CardContent className="flex h-full flex-col p-7">
        <div className="mb-5">
          <div className="mb-2 flex flex-wrap items-baseline gap-3">
            <h3 className="text-2xl font-bold text-charcoal">{program.name}</h3>
            <span className="text-2xl font-bold text-primary-blue">{program.price}</span>
          </div>
          <div className="flex flex-wrap gap-2 text-sm font-semibold">
            {program.value && <span className="text-medium-grey">{program.value}</span>}
            {program.saving && <span className="text-primary-blue">{program.saving}</span>}
          </div>
        </div>

        <p className="mb-6 text-lg font-medium leading-relaxed text-charcoal">{program.summary}</p>

        {program.benefits && (
          <div className="mb-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-primary-blue">
              What's included
            </p>
            <ul className="space-y-3">
              {program.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className={`flex items-start gap-3 text-sm leading-relaxed ${
                    benefit.startsWith("Free ")
                      ? "rounded-lg bg-blue-50 p-3 font-semibold text-primary-blue"
                      : "text-medium-grey"
                  }`}
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-blue" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-6 rounded-xl bg-blue-50 p-4 text-sm">
          <p className="mb-1 font-bold text-charcoal">Program structure</p>
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
