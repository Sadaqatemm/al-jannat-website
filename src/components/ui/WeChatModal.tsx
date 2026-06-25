"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "./ModalProvider";
import { branches } from "@/data/branches";
import ModalShell from "./ModalShell";

export default function WeChatModal() {
  const { t, pick } = useLanguage();
  const { activeModal } = useModal();

  if (activeModal !== "wechat") return null;

  return (
    <ModalShell title={t.modals.wechatTitle} subtitle={t.modals.wechatSub}>
      <div className="flex flex-col gap-2.5">
        {branches.map((b) => (
          <a
            key={b.slug}
            href={`weixin://dl/chat?${b.wechat}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3.5 border border-line rounded-lg transition-colors hover:border-[#07C160]"
          >
            <span className="font-display text-lg">{pick(b.name)}</span>
            <span className="text-[11px] text-[#07C160] tracking-wide uppercase">
              {t.modals.chat} →
            </span>
          </a>
        ))}
      </div>
      <p className="text-[11px] text-ivory-dim mt-4 opacity-70">{t.modals.wechatNote}</p>
    </ModalShell>
  );
}
