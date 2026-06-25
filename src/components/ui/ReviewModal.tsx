"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "./ModalProvider";
import ModalShell from "./ModalShell";

// Dianping & Meituan review links for each branch
const reviewLinks: Record<string, { dianping: string; meituan: string }> = {
  gulou: {
    dianping: "https://www.dianping.com/shop/H3wfj71c5YJ8Jpkf",
    meituan: "https://dpurl.cn/vkG4OGdz",
  },
  xianlin: {
    dianping: "https://www.dianping.com/shop/H50v6del7j1yOxjP",
    meituan: "https://dpurl.cn/oKqjSGAz",
  },
  jiangning: {
    dianping: "https://www.dianping.com/shop/l1aBLNWtBe0ZR8di",
    meituan: "https://dpurl.cn/XtyYjGfz",
  },
  pukou: {
    dianping: "https://www.dianping.com/shop/ie6jJhWi8l4jTHgn",
    meituan: "https://dpurl.cn/myGOroNz",
  },
};

const branchOptions = [
  { slug: "gulou",     en: "Gulou",     zh: "鼓楼" },
  { slug: "xianlin",  en: "Xianlin",   zh: "仙林" },
  { slug: "jiangning",en: "Jiangning", zh: "江宁" },
  { slug: "pukou",    en: "Pukou",     zh: "浦口" },
];

export default function ReviewModal() {
  const { t, locale, pick } = useLanguage();
  const { activeModal } = useModal();

  if (activeModal !== "review") return null;

  return (
    <ModalShell title={t.modals.reviewTitle} subtitle={t.modals.reviewSub}>
      <div className="flex flex-col gap-3">
        {branchOptions.map((b) => {
          const links = reviewLinks[b.slug];
          const name = locale === "zh" ? b.zh : b.en;
          return (
            <div key={b.slug} className="border border-line rounded-lg px-4 py-3.5">
              <p className="font-display text-lg mb-2.5">{name}</p>
              <div className="flex gap-2.5 flex-wrap">
                <a
                  href={links.dianping}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-md bg-[#FF5B3E]/10 border border-[#FF5B3E]/40 text-[#FF5B3E] text-[12px] tracking-wide hover:bg-[#FF5B3E]/20 transition-colors"
                >
                  大众点评
                </a>
                <a
                  href={links.meituan}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 rounded-md bg-[#F9C120]/10 border border-[#F9C120]/40 text-[#F9C120] text-[12px] tracking-wide hover:bg-[#F9C120]/20 transition-colors"
                >
                  美团
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[11px] text-ivory-dim mt-4 opacity-70">{t.modals.reviewNote}</p>
    </ModalShell>
  );
}
