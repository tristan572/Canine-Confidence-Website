import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import trainer600 from "@assets/trainer_staffy_600.webp";
import trainer1122 from "@assets/trainer_staffy_1122.webp";
import trainerJpeg from "@assets/trainer_staffy_800.jpg";

const trainerPoints = [
  { title: "Safe, cared for and respected", text: "Your dog is safe with me. I train them with care, and with respect for who they are." },
  { title: "Reliable and flexible", text: "I turn up when I say I will, come to you anywhere across North Brisbane, and I'm as flexible as I can be with session times. I'm still here after your program ends." },
  { title: "Qualified and always learning", text: "NDTF certified, professional and insured. I never stop studying, so I can keep getting better results for your dog." },
];

// "Hi, I'm Tristan" with the Cleo portrait. On the homepage and every suburb
// page, so someone landing straight from a local search still sees who he is.
export default function MeetTristan() {
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center overflow-hidden rounded-[26px] bg-sand lg:grid-cols-12">
          <picture className="lg:col-span-5">
            <source type="image/webp" srcSet={`${trainer600} 600w, ${trainer1122} 1122w`} sizes="(max-width: 1024px) 100vw, 40vw" />
            <img
              src={trainerJpeg}
              alt="Tristan from Canine Confidence with his staffy Cleo"
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
  );
}
