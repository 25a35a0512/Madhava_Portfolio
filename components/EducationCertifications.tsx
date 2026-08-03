import Reveal from "./Reveal";
import { education, certifications } from "@/data/content";

export default function EducationCertifications() {
  return (
    <section id="education" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow mb-4">Education</div>
          <Reveal>
            <h2 className="font-head text-white text-[28px] sm:text-4xl mb-9">Academic background</h2>
          </Reveal>
          <div className="relative pl-9">
            <div className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-blue via-purple to-cyan" />
            {education.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08} className="relative pb-9 last:pb-0">
                <div className="absolute -left-9 top-0.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.1)]" />
                <span className="font-mono text-[11.5px] text-cyan uppercase tracking-wide block mb-2">
                  {e.tag}
                </span>
                <h4 className="text-[17px] text-white font-medium mb-1.5">{e.title}</h4>
                <p className="text-muted text-sm">{e.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <div className="eyebrow mb-4">Certifications</div>
          <Reveal>
            <h2 className="font-head text-white text-[28px] sm:text-4xl mb-9">
              Certifications &amp; recognition
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3.5">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="bg-bg-elev border border-line rounded-xl p-4.5 flex gap-3.5 items-start hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-8.5 h-8.5 w-[34px] h-[34px] rounded-lg bg-cyan/15 text-cyan flex items-center justify-center flex-shrink-0 text-sm">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-[14.5px] text-white leading-snug mb-1 font-medium">{c.title}</h4>
                    <p className="text-[12.5px] text-muted">{c.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
