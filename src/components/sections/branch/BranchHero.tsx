"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageProvider";
import type { Branch } from "@/data/types";

export default function BranchHero({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();

  return (
    <section className="relative h-[74vh] min-h-[500px] flex items-end overflow-hidden">
      <Image
        src={branch.heroImage}
        alt={pick(branch.name)}
        fill
        priority
        className="object-cover brightness-[0.5] saturate-105"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, var(--char) 5%, transparent 65%)" }}
      />
      <div className="relative z-2 px-5 md:px-14 pb-15 w-full">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-wide text-gold-bright mb-5.5 uppercase"
        >
          ← {t.branchPage.back}
        </Link>
        <h1 className="font-display text-[38px] sm:text-[50px] md:text-[64px] lg:text-[72px] font-semibold mb-2.5">
          Al Jannat — {pick(branch.name)}
        </h1>
        <div className="flex gap-4.5 flex-wrap text-[13.5px] text-ivory-dim items-center">
          <span>
            {branch.addressIsPlaceholder ? (
              <>
                {pick(branch.address)}{" "}
                <span className="text-gold-bright opacity-80">
                  ({t.branchPage.addressUnverified})
                </span>
              </>
            ) : (
              pick(branch.address)
            )}
          </span>
          <Dot />
          <span>{t.branchPage.halalCertified}</span>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return <span className="w-1 h-1 bg-gold rounded-full" />;
}
