"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom gold ring + dot cursor for desktop pointer devices.
 * Hidden via CSS on touch devices (matches .cursor-target's
 * `@media (hover: hover)` rule in globals.css) rather than a
 * state flag set inside an effect, so there is no synchronous
 * setState-during-effect render cascade.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!isFinePointer) return;

    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    let raf = 0;

    function handleMove(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top = `${my}px`;
      }
    }

    function loop() {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    }

    function handleOver(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHovering(true);
      }
    }
    function handleOut(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setHovering(false);
      }
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="fine-pointer-only">
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ background: "var(--gold-bright)", mixBlendMode: "difference", zIndex: 400 }}
      />
      <div
        ref={ringRef}
        className="fixed rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          width: hovering ? 64 : 38,
          height: hovering ? 64 : 38,
          border: `1px solid ${hovering ? "var(--gold-bright)" : "var(--gold)"}`,
          background: hovering ? "rgba(201,160,74,0.08)" : "transparent",
          opacity: 0.65,
          zIndex: 400,
        }}
      />
    </div>
  );
}
