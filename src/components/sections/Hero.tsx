"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { useLanguage } from "@/i18n/LanguageProvider";
import Magnetic from "@/components/ui/Magnetic";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), { ssr: false });

export default function Hero() {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2)
      .fromTo(
        ".hero-title",
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
        0.4
      )
      .fromTo(
        ".hero-sub",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        0.65
      )
      .fromTo(
        ".hero-cta-row",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
        0.8
      )
      .fromTo(
        ".hero-stat-rail",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        0.95
      );

    // Parallax fade of hero content on scroll
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: 80,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: contentRef.current.closest("section"),
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <HeroScene />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center 45%, transparent 25%, rgba(10,6,5,0.5) 75%, rgba(10,6,5,0.97) 100%)",
        }}
      />

      <div ref={contentRef} className="relative z-5 text-center max-w-[920px] px-6">
        <div className="hero-eyebrow font-label text-[11px] opacity-0 translate-y-3.5">
          {t.hero.eyebrow1}
          <span className="inline-block w-1 h-1 bg-gold rounded-full mx-2.5 align-middle" />
          {t.hero.eyebrow2}
        </div>
        <h1 className="hero-title font-display font-semibold text-[42px] sm:text-[56px] md:text-[76px] lg:text-[96px] leading-[1.02] my-4.5 text-ivory" style={{ textShadow: "0 4px 60px rgba(0,0,0,0.6)" }}>
          {t.hero.titleLine1} <em className="not-italic text-shimmer">{t.hero.titleEm}</em>
          <br />
          {t.hero.titleLine2}
        </h1>
        <p className="hero-sub text-sm md:text-lg text-ivory-dim max-w-[580px] mx-auto mb-9 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="hero-cta-row flex gap-4 justify-center flex-wrap">
          <Magnetic
            as="a"
            href="#branches"
            className="bg-gold text-char px-9 py-4 text-[13px] tracking-[0.1em] font-bold uppercase relative overflow-hidden group"
          >
            <span className="relative z-10">{t.hero.ctaPrimary}</span>
          </Magnetic>
          <Magnetic
            as="a"
            href="/menu"
            className="border border-ivory/30 text-ivory px-9 py-4 text-[13px] tracking-[0.1em] uppercase backdrop-blur-md hover:border-ivory hover:bg-ivory/7 transition-colors"
          >
            {t.hero.ctaSecondary}
          </Magnetic>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-5 flex flex-col items-center gap-2.5 opacity-70">
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-ivory-dim">{t.hero.scroll}</span>
      </div>

      <div className="hero-stat-rail absolute bottom-0 left-0 right-0 z-6 flex border-t border-line bg-gradient-to-t from-[rgba(10,6,5,0.9)] to-[rgba(10,6,5,0.3)] backdrop-blur-md flex-wrap">
        <StatItem value="4" label={t.hero.statBranches} />
        <StatItem value="10AM–10PM" label={t.hero.statHours} />
        <StatItem value="100%" label={t.hero.statHalal} />
        <StatItem value="4.7★" label={t.hero.statRating} />
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex-1 min-w-[50%] sm:min-w-0 text-center py-4.5 px-2.5 border-r border-line last:border-r-0">
      <strong className="block font-display text-[22px] text-gold-bright font-semibold">{value}</strong>
      <span className="text-[9.5px] tracking-[0.12em] text-ivory-dim uppercase">{label}</span>
    </div>
  );
}
