"use client";

import { useRef, type ReactNode, type ElementType, type MouseEvent } from "react";
import gsap from "gsap";

interface MagneticProps {
  children: ReactNode;
  as?: ElementType;
  strength?: number;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

/**
 * Wraps any element so it gently pulls toward the cursor on hover —
 * the "magnetic button" interaction used throughout the hero and CTAs.
 * No-ops gracefully on touch devices (no mousemove events fire there).
 */
export default function Magnetic({
  children,
  as = "div",
  strength = 0.3,
  className = "",
  ...rest
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    gsap.to(el, { x: x * strength, y: y * strength, duration: 0.3, ease: "power2.out" });
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
  }

  const Component = as as "div";

  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block will-change-transform ${className}`}
      {...(rest as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </Component>
  );
}
