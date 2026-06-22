"use client";

import { useMemo } from "react";

/**
 * The site's signature structural device: a row of drifting spice pods
 * (cardamom-shaped) connecting a hand-drawn line, used between sections
 * instead of a generic <hr>. Ties the divider motif directly to the cuisine.
 */
export default function SpiceDivider() {
  const pods = useMemo(() => {
    const colors = ["#c9a04a", "#9a3232", "#2d4a3e"];
    return Array.from({ length: 14 }, (_, i) => {
      const x = (i / 13) * 1080 + 10;
      const y = 30 + Math.sin(i * 1.3) * 14;
      const rot = i * 37;
      const scale = 0.8 + ((i * 37) % 50) / 100; // deterministic pseudo-random
      return { x, y, rot, scale, color: colors[i % 3], key: i };
    });
  }, []);

  return (
    <div className="relative h-[110px] flex items-center justify-center overflow-hidden bg-char">
      <svg
        viewBox="0 0 1100 60"
        fill="none"
        className="w-full max-w-[1100px] h-[60px] opacity-80"
      >
        <path
          d="M0,30 Q150,5 300,30 T600,30 T900,30 T1100,30"
          stroke="#c9a04a"
          strokeWidth="1"
          opacity="0.4"
          fill="none"
        />
        {pods.map((p) => (
          <g
            key={p.key}
            transform={`translate(${p.x},${p.y}) rotate(${p.rot}) scale(${p.scale})`}
          >
            <path d="M0,0 Q6,-8 14,0 Q6,8 0,0 Z" fill={p.color} opacity={0.7} />
          </g>
        ))}
      </svg>
    </div>
  );
}
