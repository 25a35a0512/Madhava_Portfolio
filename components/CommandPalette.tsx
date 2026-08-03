"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navSections } from "@/data/content";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = navSections.filter((s) =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 left-6 z-[700] font-mono text-xs text-muted-2 border border-line px-3.5 py-2 rounded-lg bg-bg-elev/70 backdrop-blur-md items-center gap-2 hidden md:flex">
        <kbd className="border border-line-strong px-1.5 py-0.5 rounded">Ctrl</kbd>+
        <kbd className="border border-line-strong px-1.5 py-0.5 rounded">K</kbd> Quick nav
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[3000] flex items-start justify-center pt-[14vh] px-6"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg bg-bg-elev border border-line-strong rounded-2xl overflow-hidden shadow-2xl"
            >
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section..."
                className="w-full px-5 py-4 bg-transparent border-b border-line text-text text-[15px] outline-none"
              />
              <div className="max-h-80 overflow-y-auto scrollbar-thin">
                {filtered.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => go(s.id)}
                    className="px-5 py-3 text-sm text-muted hover:bg-bg-elev-2 hover:text-text cursor-pointer flex justify-between transition-colors"
                  >
                    <span>{s.label}</span>
                    <kbd className="font-mono text-xs text-muted-2">↵</kbd>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
