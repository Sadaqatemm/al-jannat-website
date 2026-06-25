"use client";

import { useState } from "react";
import { branches } from "@/data/branches";
import { useLanguage } from "@/i18n/LanguageProvider";
import BranchMenu from "@/components/sections/branch/BranchMenu";
import Reveal from "@/components/ui/Reveal";

export default function MenuPage() {
  const { t, pick } = useLanguage();
  const [activeSlug, setActiveSlug] = useState(branches[0].slug);
  const activeBranch = branches.find((b) => b.slug === activeSlug)!;

  return (
    <div className="pt-32 md:pt-40">
      <Reveal className="text-center max-w-[680px] mx-auto px-6 mb-12">
        <span className="font-label text-[11px] block mb-4">{t.nav.menu}</span>
        <h1 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
          {t.branches.title}
        </h1>
      </Reveal>

      <div className="flex gap-2.5 justify-center flex-wrap mb-8 px-6">
        {branches.map((b) => (
          <button
            key={b.slug}
            onClick={() => setActiveSlug(b.slug)}
            className={`px-6 py-2.5 border rounded-full text-[13px] tracking-wide transition-all ${
              activeSlug === b.slug
                ? "border-gold text-gold-bright bg-gold/8"
                : "border-line text-ivory-dim hover:border-gold hover:text-gold-bright"
            }`}
          >
            {pick(b.name)}
          </button>
        ))}
      </div>

      <BranchMenu branch={activeBranch} />
    </div>
  );
}
