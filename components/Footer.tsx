"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line pt-12 pb-7">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex justify-between items-center flex-wrap gap-5">
        <div className="font-head font-bold text-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-grad" />
          Madhava<span className="text-muted">.dev</span>
        </div>
        <div className="flex gap-3.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:-translate-y-1 transition-all"
          >
            <FiGithub size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:-translate-y-1 transition-all"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="w-10 h-10 rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:-translate-y-1 transition-all"
          >
            <FiMail size={16} />
          </a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="w-10.5 h-10.5 w-[42px] h-[42px] rounded-full border border-line-strong flex items-center justify-center hover:border-cyan hover:-translate-y-1 transition-all"
        >
          <FiArrowUp size={16} />
        </button>
      </div>
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <p className="text-muted-2 text-[13px] mt-6">
          © 2026 Madhava Bobbili. Built with Next.js, TypeScript &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
