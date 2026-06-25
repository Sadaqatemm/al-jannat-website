"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import type { Branch, MenuCategory } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

<<<<<<< HEAD
const CATEGORIES: MenuCategory[] = [
  "appetizer", "soup", "salad", "tandoori",
  "vegetarian", "chicken", "lamb", "seafood",
  "naan", "rice", "indo-chinese", "desserts-drinks", "set-menu",
];

const CATEGORY_LABELS: Record<MenuCategory, { en: string; zh: string }> = {
  "appetizer":      { en: "Appetizer",    zh: "小食" },
  "soup":           { en: "Soup",         zh: "汤" },
  "salad":          { en: "Salad",        zh: "沙拉" },
  "tandoori":       { en: "Tandoori",     zh: "炉烤" },
  "vegetarian":     { en: "Vegetarian",   zh: "素菜咖喱" },
  "chicken":        { en: "Chicken Curry",zh: "鸡肉咖喱" },
  "lamb":           { en: "Lamb Curry",   zh: "羊肉咖喱" },
  "seafood":        { en: "Seafood",      zh: "海鲜咖喱" },
  "naan":           { en: "Naan",         zh: "印度烤饼" },
  "rice":           { en: "Rice",         zh: "米饭" },
  "indo-chinese":   { en: "Indo-Chinese", zh: "印式中餐" },
  "desserts-drinks":{ en: "Desserts & Drinks", zh: "甜品&饮品" },
  "set-menu":       { en: "Set Menu",     zh: "特色套餐" },
};

export default function BranchMenu({ branch }: { branch: Branch }) {
  const { pick, locale } = useLanguage();
  const { openModal } = useModal();
  const zh = locale === "zh";
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("appetizer");
  const [vegOnly, setVegOnly] = useState(false);

  // Only show categories that have items
  const availableCategories = useMemo(
    () => CATEGORIES.filter((cat) => branch.menu.some((m) => m.category === cat)),
    [branch.menu]
  );
=======
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
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e

  const filteredItems = useMemo(() => {
    return branch.menu.filter(
      (item) => item.category === activeCategory && (!vegOnly || item.isVeg)
    );
  }, [branch.menu, activeCategory, vegOnly]);

<<<<<<< HEAD
=======
  const hasPlaceholderPrices = branch.menu.some((m) => m.isPlaceholder);

>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
  return (
    <section id="menu" className="bg-tandoor scroll-mt-20 py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-12">
<<<<<<< HEAD
          <span className="font-label text-[11px] block mb-4">À LA CARTE</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {pick(branch.name)} {zh ? "菜单" : "Menu"}
          </h2>
        </Reveal>

        {/* Category tabs — scrollable on mobile */}
        <div className="overflow-x-auto pb-2 mb-6 -mx-2 px-2">
          <div className="flex gap-2 justify-start md:justify-center flex-nowrap md:flex-wrap min-w-max md:min-w-0">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 border rounded-full text-[12px] tracking-wide transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? "border-gold text-gold-bright bg-gold/8"
                    : "border-line text-ivory-dim hover:border-ivory-dim"
                }`}
              >
                {CATEGORY_LABELS[cat][zh ? "zh" : "en"]}
              </button>
            ))}
          </div>
        </div>

        {/* Veg filter */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <label className="flex items-center gap-2 cursor-pointer select-none text-[13px] text-ivory-dim">
=======
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
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={(e) => setVegOnly(e.target.checked)}
<<<<<<< HEAD
              className="w-3.5 h-3.5 accent-gold"
            />
            🌱 {zh ? "仅显示素食" : "Show Veg Only"}
          </label>
        </div>

        {/* Menu items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => (
            <Reveal key={item.id}>
              <div className="bg-tandoor-2 border border-line rounded-xl overflow-hidden flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] bg-char">
                  <Image
                    src={item.image}
                    alt={pick(item.name)}
                    fill
                    className="object-cover"
                    sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,33vw"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-[17px] font-semibold leading-snug">
                      {pick(item.name)}
                    </span>
                    {!!item.spiceLevel && (
                      <span className="text-[10px]">{"🌶️".repeat(item.spiceLevel)}</span>
                    )}
                    {item.isVeg && <span className="text-[10px]">🌱</span>}
                  </div>
                  <p className="text-ivory-dim text-[12.5px] leading-relaxed flex-1">
                    {pick(item.description)}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
          {filteredItems.length === 0 && (
            <p className="col-span-full text-center text-ivory-dim py-10 text-[14px]">
              {zh ? "该分类暂无素食选项" : "No items match this filter."}
            </p>
          )}
        </div>

        <Reveal className="text-center mt-12">
          <Magnetic
            as="button"
            onClick={() => openModal("reserve")}
            className="border border-gold text-gold px-10 py-3.5 rounded-full text-[12.5px] tracking-[0.08em] hover:bg-gold hover:text-char transition-colors"
          >
            {zh ? "立即预订" : "Reserve a Table"}
          </Magnetic>
        </Reveal>
=======
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
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
      </div>
    </section>
  );
}
