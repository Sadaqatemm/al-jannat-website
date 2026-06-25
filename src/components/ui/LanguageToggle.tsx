"use client";

import { useLanguage } from "@/i18n/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex border border-line rounded-full overflow-hidden text-xs">
      <button
        onClick={() => setLocale("en")}
        className={`px-3.5 py-1.5 tracking-wide transition-all ${
          locale === "en"
            ? "bg-gold text-char font-semibold"
            : "text-ivory-dim hover:text-ivory"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={`px-3.5 py-1.5 tracking-wide transition-all ${
          locale === "zh"
            ? "bg-gold text-char font-semibold"
            : "text-ivory-dim hover:text-ivory"
        }`}
      >
        中文
      </button>
    </div>
  );
}
