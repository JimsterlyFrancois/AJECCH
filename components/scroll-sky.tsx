"use client";

import { useEffect, useRef } from "react";

export default function ScrollSky() {
  const distantClouds = useRef<HTMLDivElement>(null);
  const nearClouds = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    let frame = 0;
    const updateClouds = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scroll = window.scrollY || 0;
        if (distantClouds.current) {
          distantClouds.current.style.transform = `translate3d(0, ${scroll * -0.10}px, 0)`;
        }
        if (nearClouds.current) {
          nearClouds.current.style.transform = `translate3d(0, ${scroll * -0.19}px, 0)`;
        }
      });
    };

    updateClouds();
    window.addEventListener("scroll", updateClouds, { passive: true });
    window.addEventListener("resize", updateClouds, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateClouds);
      window.removeEventListener("resize", updateClouds);
    };
  }, []);

  return (
    <div className="scroll-sky" aria-hidden="true">
      <div className="scroll-sky-clouds scroll-sky-clouds-distant" ref={distantClouds} />
      <div className="scroll-sky-clouds scroll-sky-clouds-near" ref={nearClouds} />
    </div>
  );
}
