"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import type { Branch, MenuCategory } from "@/data/types";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";

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

  const filteredItems = useMemo(() => {
    return branch.menu.filter(
      (item) => item.category === activeCategory && (!vegOnly || item.isVeg)
    );
  }, [branch.menu, activeCategory, vegOnly]);

  return (
    <section id="menu" className="bg-tandoor scroll-mt-20 py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-12">
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
            <input
              type="checkbox"
              checked={vegOnly}
              onChange={(e) => setVegOnly(e.target.checked)}
              className="w-3.5 h-3.5 accent-gold"
            />
            🌱 {zh ? "仅显示素食" : "Show veg only"}
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
      </div>
    </section>
  );
}
