"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { branches } from "@/data/branches";

export default function Footer() {
  const { t, pick } = useLanguage();

  return (
    <footer className="bg-char border-t border-line px-6 pt-20 pb-7.5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-9 lg:gap-12.5 max-w-[1280px] mx-auto mb-15">
        <div>
          <Link href="/" className="flex items-center gap-3 font-label text-[18px] font-semibold mb-4.5">
            <span className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-ivory border border-gold">
              <Image src="/images/logo.png" alt="Al Jannat logo" width={64} height={64} className="w-[108%] h-[108%] object-cover" />
            </span>
            <span>
<<<<<<< HEAD
              AL JANNAT<sup className="text-[10px] text-gold align-super">®</sup>
=======
              AL JANNAT
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
              <small className="block font-sans text-[9px] tracking-[0.2em] text-ivory-dim font-normal uppercase mt-0.5 normal-case">
                Indian Restaurants
              </small>
            </span>
          </Link>
          <p className="text-ivory-dim text-[13.5px] leading-7 max-w-[280px]">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-label text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
            {t.footer.branchesHeading}
          </h4>
          {branches.map((b) => (
            <Link
              key={b.slug}
              href={`/branches/${b.slug}`}
              className="block text-[13.5px] text-ivory-dim mb-2.5 hover:text-gold-bright transition-colors"
            >
              {pick(b.name)}
            </Link>
          ))}
        </div>

        <div>
          <h4 className="font-label text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
            {t.footer.exploreHeading}
          </h4>
          <Link href="/menu" className="block text-[13.5px] text-ivory-dim mb-2.5 hover:text-gold-bright transition-colors">
            {t.nav.menu}
          </Link>
          <Link href="/gallery" className="block text-[13.5px] text-ivory-dim mb-2.5 hover:text-gold-bright transition-colors">
            {t.nav.gallery}
          </Link>
          <Link href="/reservations" className="block text-[13.5px] text-ivory-dim mb-2.5 hover:text-gold-bright transition-colors">
            {t.nav.reservations}
          </Link>
        </div>

        <div>
          <h4 className="font-label text-[11px] tracking-[0.15em] uppercase text-gold mb-5">
            {t.footer.contactHeading}
          </h4>
          <a href="tel:+862552235776" className="block text-[13.5px] text-ivory-dim mb-2.5 hover:text-gold-bright transition-colors">
            +86 25 5223 5776
          </a>
          <p className="text-[13.5px] text-ivory-dim">{t.footer.hours}</p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto pt-7.5 border-t border-line flex flex-wrap justify-between gap-3.5 text-xs text-ivory-dim">
        <span>{t.footer.rights}</span>
        <span>{t.footer.certified}</span>
      </div>
    </footer>
  );
}
