import Reveal from "./Reveal";
import { timeline } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-16">
        <div>
          <div className="eyebrow mb-4">About</div>
          <Reveal>
            <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-8">
              Who I am
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-4 text-muted text-[15.5px]">
              <p>
                I&apos;m a <strong className="text-text font-semibold">Computer Science Engineering</strong> student
                who likes taking software from idea to something that actually runs — full-stack web apps built
                on the <strong className="text-text font-semibold">MERN stack</strong>, backed by REST APIs and
                real databases.
              </p>
              <p>
                Along the way I got curious about{" "}
                <strong className="text-text font-semibold">AI/ML and Generative AI</strong> — prompt
                engineering, LLM APIs, and the basics of RAG — and started weaving that into my projects, like an
                AI-powered career guidance platform.
              </p>
              <p>
                I&apos;m a quick learner who enjoys debugging real problems, collaborating in Agile teams, and
                picking up new tools fast. Right now I&apos;m looking to contribute as a{" "}
                <strong className="text-text font-semibold">Software Engineer Intern (AI Engineer)</strong> and
                help build scalable, intelligent platforms.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative pl-9">
          <div className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-gradient-to-b from-blue via-purple to-cyan" />
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="relative pb-9 last:pb-0">
              <div className="absolute -left-9 top-0.5 w-3.5 h-3.5 rounded-full bg-bg border-2 border-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.1)]" />
              <span className="font-mono text-[11.5px] text-cyan uppercase tracking-wide block mb-2">
                {item.tag}
              </span>
              <h4 className="text-[17px] text-white font-medium mb-1.5">{item.title}</h4>
              <p className="text-muted text-sm">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
