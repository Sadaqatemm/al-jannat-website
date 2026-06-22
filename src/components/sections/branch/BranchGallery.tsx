"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Branch } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

export default function BranchGallery({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="scroll-mt-20 py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-16">
          <span className="font-label text-[11px] block mb-4">{t.branchPage.galleryEyebrow}</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {pick(branch.name)} {t.branchPage.galleryTitle}
          </h2>
        </Reveal>

        <Reveal>
          <div className="columns-2 md:columns-3 gap-3.5 [column-gap:14px]">
            {branch.gallery.map((img) => (
              <Image
                key={img.id}
                src={img.src}
                alt={pick(img.alt)}
                width={500}
                height={500}
                onClick={() => setLightboxImg({ src: img.src, alt: pick(img.alt) })}
                className="w-full rounded-md mb-3.5 block cursor-pointer transition-[transform,filter] duration-400 brightness-[0.85] hover:scale-[1.02] hover:brightness-100"
                style={{ breakInside: "avoid" }}
              />
            ))}
          </div>
        </Reveal>
      </div>

      <Lightbox
        src={lightboxImg?.src ?? null}
        alt={lightboxImg?.alt ?? ""}
        onClose={() => setLightboxImg(null)}
      />
    </section>
  );
}
