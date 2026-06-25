"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import { branches } from "@/data/branches";
import Reveal from "@/components/ui/Reveal";
import TiltCard from "@/components/ui/TiltCard";

export default function BranchSelector() {
  const { t, pick } = useLanguage();

  return (
    <section id="branches" className="bg-char py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-16">
          <span className="font-label text-[11px] block mb-4">{t.branches.eyebrow}</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {t.branches.title}
          </h2>
          <p className="mt-4.5 text-ivory-dim text-[15px] leading-relaxed">{t.branches.subtitle}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
          {branches.map((branch, i) => (
            <Reveal key={branch.slug} delay={i * 0.08} y={44}>
              <Link href={`/branches/${branch.slug}`} data-cursor-hover>
                <TiltCard
                  intensity={10}
                  className="group relative rounded-[10px] overflow-hidden aspect-[3/4.2] border border-line bg-tandoor transition-[border-color,box-shadow] duration-400 hover:border-gold hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)]"
                >
                  <Image
                    src={branch.cardImage}
                    alt={pick(branch.name)}
                    fill
                    className="object-cover transition-transform duration-700 ease-out grayscale-[0.4] brightness-[0.62] group-hover:scale-110 group-hover:grayscale-[0.05] group-hover:brightness-[0.55]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 z-1"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,6,5,0.97) 8%, rgba(10,6,5,0.2) 55%, rgba(10,6,5,0.5) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 z-2 flex flex-col justify-end p-6.5 [transform:translateZ(40px)]">
                    <span className="font-label text-[11px] mb-auto">{branch.number}</span>
                    <div className="font-display text-[28px] sm:text-[31px] font-semibold mb-2">
                      {pick(branch.name)}
                    </div>
                    <div className="text-[12.5px] text-ivory-dim leading-relaxed mb-4.5 min-h-[48px]">
                      {pick(branch.shortDescription)}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-gold-bright border-t border-line pt-3.5 group-hover:gap-3.5 transition-all">
                      {t.branches.enter}{" "}
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
