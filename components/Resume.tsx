"use client";

import Reveal from "./Reveal";
import Magnetic from "./Magnetic";

export default function Resume() {
  return (
    <>
      <section id="resume" className="py-28 md:py-36">
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
          <div className="eyebrow mb-4 justify-center">Resume</div>
          <Reveal>
            <div className="bg-bg-elev border border-line rounded-2xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,107,255,0.12),transparent_60%)]" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-grad flex items-center justify-center mx-auto mb-6 text-2xl">
                  📄
                </div>
                <h3 className="text-white text-2xl mb-2.5 font-head">
                  Want the full picture on paper?
                </h3>
                <p className="text-muted mb-8">
                  Download or print my resume — always up to date with the same details shown here.
                </p>
                <div className="flex justify-center gap-3.5 flex-wrap">
                  <Magnetic>
                    <a
                      href="/resume.pdf"
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_8px_24px_-8px_rgba(59,107,255,0.6)]"
                    >
                      Download PDF
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line-strong hover:border-cyan hover:bg-cyan/5 transition-colors"
                    >
                      View in Browser
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <button
                      onClick={() => window.open("/resume.pdf", "_blank")}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-line-strong hover:border-cyan hover:bg-cyan/5 transition-colors"
                    >
                      Print Resume
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Magnetic>
        <a
          href="/resume.pdf"
          download
          className="fixed bottom-6 right-6 z-[800] inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-grad text-white shadow-[0_12px_32px_-8px_rgba(59,107,255,0.6)]"
        >
          📄 Resume
        </a>
      </Magnetic>
    </>
  );
}
