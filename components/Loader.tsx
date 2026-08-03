"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-bg flex items-center justify-center flex-col gap-4 transition-[opacity,visibility] duration-500 ${
        hide ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div className="font-head text-sm tracking-[0.3em] text-muted flex gap-3">
        <span>M</span>
        <span>B</span>
      </div>
      <div className="w-44 h-0.5 bg-line rounded-full overflow-hidden relative">
        <div className="absolute inset-0 bg-grad origin-left animate-[loadbar_1.2s_cubic-bezier(.16,1,.3,1)_forwards]" />
      </div>
      <style>{`
        @keyframes loadbar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}</style>
    </div>
  );
}
