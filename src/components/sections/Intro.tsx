"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className="bg-tandoor border-y border-line py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
        <Reveal>
          <span className="font-label text-[11px] block mb-4.5">{t.intro.eyebrow}</span>
          <h2 className="font-display text-[30px] sm:text-[36px] md:text-[48px] font-semibold leading-tight mb-5.5">
            {t.intro.titleLine1}
            <br />
            {t.intro.titleLine2}
          </h2>
          <p className="text-ivory-dim leading-[1.85] text-[15.5px] mb-4">{t.intro.p1}</p>
          <p className="text-ivory-dim leading-[1.85] text-[15.5px] mb-4">{t.intro.p2}</p>
          <div className="flex gap-10 mt-9">
            <Stat value="4" label={t.intro.statBranches} />
            <Stat value="10AM–10PM" label={t.intro.statDaily} />
            <Stat value="100%" label={t.intro.statHalal} />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <TiltCard intensity={8} className="relative aspect-[4/5] rounded-lg overflow-hidden border border-line">
            <Image
              src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=900&q=80"
              alt="Tandoor cooking"
              fill
              className="object-cover saturate-110 contrast-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,6,5,0.75)] to-transparent" />
            <span className="absolute bottom-5 left-5 z-2 font-label text-[11px] text-gold-bright">
              {t.intro.tag}
            </span>
          </TiltCard>
          <div className="absolute -top-6.5 -right-6.5 w-[120px] h-[120px] bg-gold rounded-full flex items-center justify-center text-center text-char font-label text-[11px] font-bold leading-[1.4] p-3.5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] animate-floaty z-3">
            {t.intro.badge}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <strong className="block font-display text-[40px] text-gold-bright font-semibold">{value}</strong>
      <span className="text-[11px] tracking-[0.1em] text-ivory-dim uppercase">{label}</span>
    </div>
  );
}
