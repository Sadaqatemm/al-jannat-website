"use client";

import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { buildDefaultMenu } from "@/data/menu";
import Reveal from "@/components/ui/Reveal";

const signatureIds = ["butter-chicken", "mutton-polao", "garlic-naan"];

export default function SignatureDishes() {
  const { t, pick } = useLanguage();
  const menu = buildDefaultMenu();
  const dishes = signatureIds
    .map((id) => menu.find((m) => m.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <section id="dishes" className="bg-tandoor border-t border-line py-[100px] md:py-[130px] px-6">
      <div className="max-w-[1280px] mx-auto">
        <Reveal className="text-center max-w-[680px] mx-auto mb-16">
          <span className="font-label text-[11px] block mb-4">{t.dishes.eyebrow}</span>
          <h2 className="font-display text-[34px] sm:text-[42px] md:text-[52px] font-semibold leading-tight">
            {t.dishes.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <Reveal key={dish.id} delay={i * 0.1} y={32}>
              <div className="bg-ivory/[0.025] border border-line rounded-[10px] p-7.5 backdrop-blur-md transition-all duration-400 hover:-translate-y-2 hover:border-gold-dim hover:bg-ivory/[0.045]">
                <div className="relative w-full aspect-[1.4/1] rounded-md overflow-hidden mb-5.5 group">
                  <Image
                    src={dish.image}
                    alt={pick(dish.name)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-108"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="font-display text-[25px] font-semibold mb-2">{pick(dish.name)}</div>
                <p className="text-[13px] text-ivory-dim leading-relaxed mb-4">{pick(dish.description)}</p>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
