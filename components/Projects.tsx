"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { projects, Project } from "@/data/content";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-28 md:py-36">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="eyebrow mb-4">Projects</div>
        <Reveal>
          <h2 className="font-head text-white text-[28px] sm:text-4xl lg:text-[44px] mb-4">
            Things I&apos;ve built
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="text-muted max-w-xl mb-14 text-[16.5px]">
            Two projects I&apos;m proudest of — full case studies are one click away.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <div className="bg-bg-elev border border-line rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-blue/50 hover:shadow-[0_24px_48px_-24px_rgba(59,107,255,0.35)] transition-all duration-300 h-full flex flex-col">
                <div className="h-[190px] relative flex items-center justify-center bg-gradient-to-br from-blue/20 via-purple/15 to-cyan/15 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:26px_26px]">
                  <span className="font-head text-[44px] font-bold text-white/85 relative z-10">
                    {p.glyph}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white text-[19px] mb-2 font-medium">{p.title}</h3>
                  <p className="text-muted text-[14.5px] mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[11px] text-muted border border-line px-2.5 py-1 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2.5 mt-auto">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13.5px] font-semibold border border-line-strong px-3.5 py-2 rounded-lg hover:border-cyan hover:text-cyan transition-colors"
                    >
                      GitHub ↗
                    </a>
                    <button
                      onClick={() => setActive(p)}
                      className="text-[13.5px] font-semibold border border-line-strong px-3.5 py-2 rounded-lg hover:border-cyan hover:text-cyan transition-colors"
                    >
                      Case Study →
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[2000] flex items-center justify-center p-6"
            onClick={(e) => e.target === e.currentTarget && setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bg-elev border border-line-strong rounded-[20px] max-w-xl w-full max-h-[85vh] overflow-y-auto scrollbar-thin p-9 relative"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute top-5 right-5 w-9 h-9 rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:text-cyan transition-colors"
              >
                ✕
              </button>
              <h3 className="text-white text-2xl mb-1.5 font-head">{active.title}</h3>
              <div className="font-mono text-[13.5px] text-muted mb-6">
                {active.tech.join(" · ")} — {active.dateRange}
              </div>

              <div className="mb-5">
                <h5 className="font-mono text-[12.5px] uppercase tracking-wide text-cyan mb-2">Overview</h5>
                <p className="text-muted text-[14.5px]">{active.overview}</p>
              </div>

              {active.architecture && (
                <div className="mb-5">
                  <h5 className="font-mono text-[12.5px] uppercase tracking-wide text-cyan mb-2">Architecture</h5>
                  <p className="text-muted text-[14.5px]">{active.architecture}</p>
                </div>
              )}

              <div className="mb-5">
                <h5 className="font-mono text-[12.5px] uppercase tracking-wide text-cyan mb-2">Key Features</h5>
                <ul className="list-disc pl-4.5 space-y-1.5">
                  {active.features.map((f) => (
                    <li key={f} className="text-muted text-[14.5px]">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {active.process && (
                <div className="mb-5">
                  <h5 className="font-mono text-[12.5px] uppercase tracking-wide text-cyan mb-2">Process</h5>
                  <p className="text-muted text-[14.5px]">{active.process}</p>
                </div>
              )}

              <div>
                <h5 className="font-mono text-[12.5px] uppercase tracking-wide text-cyan mb-2">Links</h5>
                <a
                  href={active.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan text-[14.5px]"
                >
                  {active.githubUrl.replace("https://", "")} ↗
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
