"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Branch } from "@/data/types";
import Reveal from "@/components/ui/Reveal";

export default function BranchStaff({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();

  return (
    <section className="py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-16">
          <span className="font-label text-[11px] block mb-4">{t.branchPage.teamEyebrow}</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {t.branchPage.teamTitle}
          </h2>
          {branch.staff.some((s) => s.isPlaceholder) && (
            <p className="text-xs opacity-55 mt-3">{t.branchPage.placeholderStaff}</p>
          )}
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6.5">
          {branch.staff.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08} y={24} className="text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mx-auto mb-4.5 w-[140px] border border-line group">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[0.5] transition-[filter] duration-400 group-hover:grayscale-0"
                  sizes="140px"
                />
              </div>
              <div className="font-display text-xl font-semibold mb-1">{member.name}</div>
              <div className="font-label text-[11px] mb-2.5">{pick(member.role)}</div>
              <p className="text-[12.5px] text-ivory-dim leading-relaxed">{pick(member.bio)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
