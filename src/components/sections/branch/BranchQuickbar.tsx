"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import type { Branch } from "@/data/types";

export default function BranchQuickbar({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();
  const { openModal } = useModal();

  return (
    <div className="bg-tandoor border-y border-line flex flex-wrap justify-center">
      <QbItem label={t.branchPage.hours}>
        <strong className="font-display text-lg">{branch.openingHours}</strong>
      </QbItem>
      <QbItem label={t.branchPage.buffetNights}>
        <strong className="font-display text-lg">
          {pick(branch.buffet.days)}, {branch.buffet.time}
        </strong>
      </QbItem>
<<<<<<< HEAD
      <QbItem label={t.branchPage.orderNow} onClick={() => openModal("wechat")} clickable>
=======
      <QbItem label={t.branchPage.orderNow} onClick={() => openModal("whatsapp")} clickable>
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
        <strong className="font-display text-lg">{branch.phone}</strong>
      </QbItem>
      <QbItem label={t.branchPage.dianpingRating}>
        <strong className="font-display text-lg flex items-center justify-center gap-1.5">
          <span className="text-gold-bright text-[13px]">★</span>
          {branch.dianpingRating.toFixed(1)} / 5.0
          {branch.ratingIsPlaceholder && (
            <span className="text-[9px] text-ivory-dim opacity-60 ml-1">*est.</span>
          )}
        </strong>
      </QbItem>
    </div>
  );
}

function QbItem({
  label,
  children,
  clickable = false,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  clickable?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!clickable}
      className={`px-9.5 py-5.5 text-center border-r border-line last:border-r-0 flex-1 min-w-[170px] ${
        clickable ? "cursor-pointer hover:bg-gold/5 transition-colors" : "cursor-default"
      }`}
    >
      <span className="font-label text-[10px] block mb-2">{label}</span>
      {children}
    </button>
  );
}
