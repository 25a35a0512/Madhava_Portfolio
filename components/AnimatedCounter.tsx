"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({
  target,
  format,
}: {
  target: number;
  format?: "rank";
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const step = Math.max(1, Math.ceil(target / 60));
    let cur = 0;
    const t = setInterval(() => {
      cur = Math.min(target, cur + step);
      setValue(cur);
      if (cur >= target) clearInterval(t);
    }, 20);
    return () => clearInterval(t);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {format === "rank" ? `#${value.toLocaleString()}` : value.toLocaleString()}
    </span>
  );
}
