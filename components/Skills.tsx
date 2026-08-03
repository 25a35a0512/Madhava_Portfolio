import Reveal from "./Reveal";
import { skillGroups } from "@/data/content";

const badgeColors = ["bg-blue/15 text-blue", "bg-purple/15 text-purple", "bg-cyan/15 text-cyan"];

export default function Skills() {
  return (
    <section id="skills" className="py-28 md:py-36 bg-bg-elev border-y border-line">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-4">Skills</div>
        <Reveal>
          <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-4">
            What I work with
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-muted max-w-xl mb-14 text-[16.5px]">
            Pulled straight from what I&apos;ve actually built — my resume, GitHub repos, and daily tools.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 gap-y-5">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="bg-bg border border-line rounded-2xl p-6 h-full hover:-translate-y-1.5 hover:border-purple/50 hover:bg-bg-elev-2 transition-all duration-300">
                <div
                  className={`w-10 h-10 rounded-[10px] flex items-center justify-center mb-4 ${badgeColors[i % 3]}`}
                >
                  ◆
                </div>
                <h4 className="text-white text-base mb-3 font-medium">{group.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs text-muted bg-bg-elev-2 border border-line px-2.5 py-1.5 rounded-md"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
