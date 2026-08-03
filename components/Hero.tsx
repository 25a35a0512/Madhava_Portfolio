"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import NeuralBackground from "./NeuralBackground";
import { profile, roles } from "@/data/content";
import Magnetic from "./Magnetic";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const word = roles[roleIndex];
    const i = display.length;
    const typing = display.length < word.length && word.startsWith(display);

    if (typing) {
      timeout.current = setTimeout(() => setDisplay(word.slice(0, i + 1)), 45);
    } else if (display === word) {
      timeout.current = setTimeout(() => setDisplay(word.slice(0, word.length - 1)), 1600);
    } else {
      timeout.current = setTimeout(() => {
        if (display.length > 0) setDisplay(display.slice(0, -1));
        else setRoleIndex((r) => (r + 1) % roles.length);
      }, 28);
    }
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [display, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden">
      <NeuralBackground />
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 bg-blue -top-52 -left-40 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-25 bg-purple -bottom-64 -right-24 pointer-events-none" />

      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
        <div>
          <div className="font-mono text-[13px] text-cyan tracking-wider flex items-center gap-2.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#4ade80] pulse-dot" />
            OPEN TO SOFTWARE ENGINEER INTERN (AI ENGINEER) ROLES
          </div>

          <h1 className="font-head text-[38px] sm:text-5xl lg:text-[68px] leading-[1.05] font-semibold text-white mb-6 tracking-tight">
            Building <span className="text-gradient">intelligent</span>
            <br />
            full-stack products,
            <br />
            one clean commit at a time.
          </h1>

          <div className="font-mono text-base sm:text-xl text-muted mb-6 min-h-[28px] flex items-center gap-2">
            I build {display}
            <span className="w-0.5 h-5 bg-cyan cursor-blink" />
          </div>

          <p className="text-muted text-[16.5px] max-w-lg mb-9">{profile.summary}</p>

          <div className="flex flex-wrap gap-3.5 mb-11">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_8px_24px_-8px_rgba(59,107,255,0.6)] hover:shadow-[0_12px_32px_-8px_rgba(139,92,246,0.65)] transition-shadow"
              >
                View Projects →
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line-strong hover:border-cyan hover:bg-cyan/5 transition-colors"
              >
                Download Resume
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line-strong hover:border-cyan hover:bg-cyan/5 transition-colors"
              >
                Contact Me
              </a>
            </Magnetic>
          </div>

          <div className="flex gap-4">
            {[
              { icon: <FiGithub size={18} />, href: profile.github, label: "GitHub" },
              { icon: <FiLinkedin size={18} />, href: profile.linkedin, label: "LinkedIn" },
              { icon: <SiLeetcode size={18} />, href: profile.leetcode, label: "LeetCode" },
              { icon: <FiMail size={18} />, href: `mailto:${profile.email}`, label: "Email" },
            ].map((s) => (
              <Magnetic key={s.label}>
                <a
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:bg-cyan/5 hover:-translate-y-1 transition-all"
                >
                  {s.icon}
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-gradient-to-b from-bg-elev to-bg-elev-2 border border-line rounded-[20px] p-7 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]"
        >
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-line-strong" />
              <span className="w-2 h-2 rounded-full bg-line-strong" />
              <span className="w-2 h-2 rounded-full bg-line-strong" />
            </div>
            <span className="font-mono text-[11px] text-muted">madhava.dev</span>
          </div>
          <div className="w-full aspect-square rounded-2xl border border-line flex items-center justify-center mb-5 relative overflow-hidden bg-bg-elev-2">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,107,255,0.35),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.3),transparent_60%)]" />
            <span className="font-head text-7xl font-bold text-white/90 relative">MB</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { n: 6, l: "Repos" },
              { n: 64, l: "LeetCode" },
              { n: 2, l: "Internships" },
            ].map((s) => (
              <div key={s.l} className="bg-bg-elev-2 border border-line rounded-[10px] text-center py-3 px-2">
                <div className="font-head text-xl font-bold text-white">
                  <AnimatedCounter target={s.n} />
                </div>
                <div className="text-[10.5px] text-muted font-mono uppercase tracking-wide mt-0.5">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-2 text-[11px] font-mono tracking-widest z-10">
        <div className="w-[22px] h-9 border border-line-strong rounded-[14px] relative">
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[3px] h-1.5 bg-cyan rounded-sm animate-bounce" />
        </div>
        SCROLL
      </div>
    </section>
  );
}
