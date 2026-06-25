"use client";

import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import Magnetic from "@/components/ui/Magnetic";

export default function BuffetBanner() {
  const { t } = useLanguage();
  const { openModal } = useModal();

  return (
    <section
      className="relative overflow-hidden py-[60px] px-6"
      style={{ background: "linear-gradient(135deg, var(--brick) 0%, #5e1f1f 100%)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(245,234,216,0.07) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-2 max-w-[1280px] mx-auto flex items-center justify-between gap-10 flex-wrap">
        <div>
          <h3 className="font-display text-[26px] sm:text-[32px] md:text-[40px] font-semibold">
            {t.buffet.title}
          </h3>
          <p className="text-ivory/88 mt-2 text-sm max-w-[480px]">{t.buffet.description}</p>
          <div className="bg-ivory text-brick px-4.5 py-2.5 rounded-full text-xs font-bold tracking-wide inline-flex items-center gap-2 mt-3.5">
            🧒 {t.buffet.kidsFree}
          </div>
        </div>
        <Magnetic
          as="button"
          onClick={() => openModal("reserve")}
          className="border border-ivory text-ivory px-9 py-4 text-[13px] tracking-[0.1em] uppercase hover:bg-ivory/10 transition-colors"
        >
          {t.buffet.cta}
        </Magnetic>
      </div>
    </section>
  );
}
