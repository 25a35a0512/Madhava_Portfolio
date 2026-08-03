import Reveal from "./Reveal";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section className="py-28 md:py-36 bg-bg-elev border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-4">Experience</div>
        <Reveal>
          <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-10">
            Where I&apos;ve worked
          </h2>
        </Reveal>

        {experience.map((e) => (
          <Reveal key={e.title}>
            <div className="bg-bg border border-line rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-[3px] h-full bg-grad" />
              <div className="flex flex-wrap justify-between gap-2 mb-5">
                <h3 className="text-white text-xl font-medium">{e.title}</h3>
                <span className="font-mono text-[12.5px] text-cyan border border-line px-3 py-1.5 rounded-full h-fit">
                  {e.date}
                </span>
              </div>
              <ul className="list-disc pl-5 space-y-2.5">
                {e.points.map((p) => (
                  <li key={p} className="text-muted text-[14.5px]">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
