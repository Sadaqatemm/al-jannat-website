"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageProvider";
import { useModal } from "@/components/ui/ModalProvider";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Magnetic from "@/components/ui/Magnetic";

export default function Header() {
  const { t, locale } = useLanguage();
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-5 md:px-14 transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(10,6,5,0.82)] backdrop-blur-xl border-b border-line py-3.5"
            : "bg-gradient-to-b from-[rgba(10,6,5,0.9)] to-transparent py-5"
        }`}
      >
        <Link href="/" className="flex items-center gap-3 font-label text-[18px] font-semibold tracking-wide">
          <span className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-ivory border border-gold shadow-[0_0_0_3px_rgba(201,160,74,0.12)] flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Al Jannat logo"
              width={64}
              height={64}
              className="w-[108%] h-[108%] object-cover"
            />
          </span>
          <span>
            AL JANNAT
            <small className="block font-sans text-[9px] tracking-[0.2em] text-ivory-dim font-normal uppercase mt-0.5 normal-case">
              {locale === "zh" ? "印度餐厅" : "Indian Restaurants"}
            </small>
          </span>
        </Link>

        <nav className="hidden lg:flex gap-9 text-[13px] tracking-wide">
          <Link href="/#branches" className="nav-link">
            {t.nav.branches}
          </Link>
          <Link href="/#dishes" className="nav-link">
            {t.nav.dishes}
          </Link>
          <Link href="/menu" className="nav-link">
            {t.nav.menu}
          </Link>
          <Link href="/gallery" className="nav-link">
            {t.nav.gallery}
          </Link>
          <Link href="/reservations" className="nav-link">
            {t.nav.reservations}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <Magnetic
            as="button"
            onClick={() => openModal("reserve")}
            className="hidden sm:inline-block border border-gold text-gold px-5 py-2.5 rounded-full text-xs tracking-[0.08em] hover:bg-gold hover:text-char transition-colors"
          >
            {t.nav.reserve}
          </Magnetic>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden flex flex-col gap-1.5 w-6 z-101 relative"
          >
            <span
              className={`h-px bg-ivory w-full transition-all ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span className={`h-px bg-ivory w-full transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`h-px bg-ivory w-full transition-all ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div
        className={`fixed inset-0 bg-[rgba(10,6,5,0.98)] backdrop-blur-md z-99 flex flex-col items-center justify-center gap-7 transition-transform duration-500 ${
          mobileOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Link href="/#branches" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.branches}
        </Link>
        <Link href="/#dishes" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.dishes}
        </Link>
        <Link href="/menu" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.menu}
        </Link>
        <Link href="/gallery" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.gallery}
        </Link>
        <Link href="/reservations" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.reservations}
        </Link>
        <a href="tel:+862552235776" className="font-display text-3xl text-gold-bright">
          {t.nav.callUs}
        </a>
      </div>
    </>
  );
}
