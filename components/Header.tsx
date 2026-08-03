"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections } from "@/data/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navSections.filter((s) => s.id !== "home");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-line py-3.5"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        <a href="#home" className="font-head font-bold text-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-grad shadow-[0_0_12px_var(--cyan)]" />
          Madhava<span className="text-muted">.dev</span>
        </a>

        <ul className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="text-sm text-muted hover:text-text transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_8px_24px_-8px_rgba(59,107,255,0.6)] hover:-translate-y-0.5 transition-transform"
          >
            Let&apos;s Talk
          </a> */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 w-6"
          >
            <span
              className={`h-0.5 bg-text rounded transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 bg-text rounded transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 bg-text rounded transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-screen w-[78vw] max-w-[320px] bg-bg-elev border-l border-line flex flex-col justify-center items-start gap-7 p-10 md:hidden"
          >
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="text-lg text-text"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
