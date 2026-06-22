"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";

interface TiltCardProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  onClick?: () => void;
}

/**
 * Wraps a card so it tilts in 3D space following the cursor —
 * used for branch cards and the story-section photo.
 */
export default function TiltCard({
  children,
  intensity = 10,
  className = "",
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: px * intensity,
      rotateX: -py * intensity,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 800,
    });
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`[transform-style:preserve-3d] will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
