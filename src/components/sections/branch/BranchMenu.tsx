"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import type { Branch, MenuCategory } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

const CATEGORIES: MenuCategory[] = ["starters", "mains", "desserts", "drinks"];

export default function BranchMenu({ branch }: { branch: Branch }) {
  const { t, pick } = useLanguage();
  const { openModal } = useModal();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");
  const [vegOnly, setVegOnly] = useState(false);

  const categoryLabels: Record<MenuCategory, string> = {
    starters: t.branchPage.starters,
    mains: t.branchPage.mains,
    desserts: t.branchPage.desserts,
    drinks: t.branchPage.drinks,
  };

  const filteredItems = useMemo(() => {
    return branch.menu.filter(
      (item) => item.category === activeCategory && (!vegOnly || item.isVeg)
    );
  }, [branch.menu, activeCategory, vegOnly]);

  const hasPlaceholderPrices = branch.menu.some((m) => m.isPlaceholder);

  return (
    <section id="menu" className="bg-tandoor scroll-mt-20 py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-12">
          <span className="font-label text-[11px] block mb-4">{t.branchPage.menuEyebrow}</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {pick(branch.name)} {t.nav.menu}
          </h2>
          {hasPlaceholderPrices && (
            <p className="text-xs opacity-55 mt-3">{t.branchPage.placeholderMenu}</p>
          )}
        </Reveal>

        <div className="flex gap-2.5 justify-center flex-wrap mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 border rounded-full text-[12.5px] tracking-wide transition-all ${
                activeCategory === cat
                  ? "border-gold text-gold-bright bg-gold/8"
                  : "border-line text-ivory-dim hover:border-gold hover:text-gold-bright"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        <div className="flex justify-center mb-12">
          <label className="flex items-center gap-2 text-xs text-ivory-dim cursor-pointer">
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={(e) => setVegOnly(e.target.checked)}
              className="accent-emerald-bright"
            />
            <span className="tracking-wide">🌱 {vegOnly ? "Veg only" : "Show veg only"}</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 py-6 px-2.5 border-b border-line items-center hover:bg-ivory/[0.02] transition-colors"
            >
              <div className="relative w-[84px] h-[84px] rounded-md overflow-hidden flex-shrink-0">
                <Image src={item.image} alt={pick(item.name)} fill className="object-cover" sizes="84px" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline gap-2.5">
                  <span className="font-display text-[19px] font-semibold">
                    {pick(item.name)}
                    {item.spiceLevel ? (
                      <span className="ml-2 text-[11px]">{"🌶️".repeat(item.spiceLevel)}</span>
                    ) : null}
                    {item.isVeg && <span className="ml-1.5 text-[11px]">🌱</span>}
                  </span>
                  <span className="font-label text-gold-bright text-sm whitespace-nowrap">
                    ¥{item.price}
                  </span>
                </div>
                <p className="text-[12.5px] text-ivory-dim mt-1.5 leading-relaxed">
                  {pick(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12.5 flex gap-3.5 justify-center flex-wrap">
          <Magnetic
            as="a"
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="bg-gold text-char px-9 py-4 text-[13px] tracking-[0.1em] font-bold uppercase"
          >
            {t.branchPage.callToOrder}
          </Magnetic>
          <Magnetic
            as="button"
            onClick={() => openModal("whatsapp")}
            className="border border-ivory/30 text-ivory px-9 py-4 text-[13px] tracking-[0.1em] uppercase hover:border-ivory hover:bg-ivory/7 transition-colors"
          >
            {t.branchPage.orderWhatsApp}
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
