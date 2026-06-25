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
<<<<<<< HEAD
  const [reviewOpen, setReviewOpen] = useState(false);
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e

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

<<<<<<< HEAD
  // Close review dropdown when clicking outside
  useEffect(() => {
    if (!reviewOpen) return;
    const close = () => setReviewOpen(false);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, [reviewOpen]);

  const reviewBranches = [
    { slug: "gulou",     en: "Gulou",     zh: "鼓楼" },
    { slug: "xianlin",  en: "Xianlin",   zh: "仙林" },
    { slug: "jiangning",en: "Jiangning", zh: "江宁" },
    { slug: "pukou",    en: "Pukou",     zh: "浦口" },
  ];

=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-5 md:px-14 transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(10,6,5,0.82)] backdrop-blur-xl border-b border-line py-3.5"
            : "bg-gradient-to-b from-[rgba(10,6,5,0.9)] to-transparent py-5"
        }`}
      >
<<<<<<< HEAD
        {/* Logo with ® */}
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
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
<<<<<<< HEAD
            AL JANNAT<sup className="text-[10px] text-gold align-super">®</sup>
=======
            AL JANNAT
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
            <small className="block font-sans text-[9px] tracking-[0.2em] text-ivory-dim font-normal uppercase mt-0.5 normal-case">
              {locale === "zh" ? "印度餐厅" : "Indian Restaurants"}
            </small>
          </span>
        </Link>

<<<<<<< HEAD
        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-9 text-[13px] tracking-wide items-center">
          <Link href="/#branches" className="nav-link">
            {t.nav.branches}
          </Link>
=======
        <nav className="hidden lg:flex gap-9 text-[13px] tracking-wide">
          <Link href="/#branches" className="nav-link">
            {t.nav.branches}
          </Link>
          <Link href="/#dishes" className="nav-link">
            {t.nav.dishes}
          </Link>
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
          <Link href="/menu" className="nav-link">
            {t.nav.menu}
          </Link>
          <Link href="/gallery" className="nav-link">
            {t.nav.gallery}
          </Link>
          <Link href="/reservations" className="nav-link">
            {t.nav.reservations}
          </Link>
<<<<<<< HEAD

          {/* Review dropdown */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setReviewOpen((v) => !v); }}
              className="nav-link flex items-center gap-1.5"
            >
              {locale === "zh" ? "评价我们" : "Leave a Review"}
              <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className={`transition-transform ${reviewOpen ? "rotate-180" : ""}`}>
                <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>

            {reviewOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute top-full right-0 mt-3 w-72 bg-[rgba(10,6,5,0.97)] backdrop-blur-xl border border-line rounded-xl shadow-2xl overflow-hidden z-200"
              >
                <p className="text-[10px] uppercase tracking-[0.15em] text-ivory-dim px-4 pt-3.5 pb-2">
                  {locale === "zh" ? "选择分店" : "Choose a branch"}
                </p>
                {reviewBranches.map((b) => (
                  <Link
                    key={b.slug}
                    href={`/reviews?branch=${b.slug}`}
                    onClick={() => setReviewOpen(false)}
                    className="flex items-center justify-between border-t border-line px-4 py-3.5 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-[14px] font-display text-ivory">
                      {locale === "zh" ? b.zh : b.en}
                    </span>
                    <span className="text-[11px] text-gold-bright">✍️ →</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
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
<<<<<<< HEAD
            <span className={`h-px bg-ivory w-full transition-all ${mobileOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`h-px bg-ivory w-full transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`h-px bg-ivory w-full transition-all ${mobileOpen ? "-translate-y-[6px] -rotate-45" : ""}`} />
=======
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
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
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
<<<<<<< HEAD
=======
        <Link href="/#dishes" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.dishes}
        </Link>
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
        <Link href="/menu" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.menu}
        </Link>
        <Link href="/gallery" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.gallery}
        </Link>
        <Link href="/reservations" onClick={() => setMobileOpen(false)} className="font-display text-3xl">
          {t.nav.reservations}
        </Link>
<<<<<<< HEAD
        {/* Mobile Review section — direct links to Dianping & Meituan */}
        <div className="flex flex-col items-center gap-3">
          <p className="font-display text-3xl text-gold-bright">
            {locale === "zh" ? "评价我们" : "Leave a Review"}
          </p>
          <div className="flex flex-col gap-2 w-72">
            {[
              { slug: "gulou",     en: "Gulou",     zh: "鼓楼", dianping: "https://www.dianping.com/shop/H3wfj71c5YJ8Jpkf", meituan: "https://dpurl.cn/vkG4OGdz" },
              { slug: "xianlin",  en: "Xianlin",   zh: "仙林", dianping: "https://www.dianping.com/shop/H50v6del7j1yOxjP", meituan: "https://dpurl.cn/oKqjSGAz" },
              { slug: "jiangning",en: "Jiangning", zh: "江宁", dianping: "https://www.dianping.com/shop/l1aBLNWtBe0ZR8di", meituan: "https://dpurl.cn/XtyYjGfz" },
              { slug: "pukou",    en: "Pukou",     zh: "浦口", dianping: "https://www.dianping.com/shop/ie6jJhWi8l4jTHgn", meituan: "https://dpurl.cn/myGOroNz" },
            ].map((b) => (
              <div key={b.slug} className="border border-line rounded-lg px-3 py-2.5">
                <p className="text-[12px] text-ivory mb-2 font-display">{locale === "zh" ? b.zh : b.en}</p>
                <div className="flex gap-2">
                  <a
                    href={b.dianping}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-1.5 rounded text-[11px] text-center bg-[#FF5B3E]/10 border border-[#FF5B3E]/40 text-[#FF5B3E]"
                  >
                    大众点评
                  </a>
                  <a
                    href={b.meituan}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-1.5 rounded text-[11px] text-center bg-[#F9C120]/10 border border-[#F9C120]/40 text-[#F9C120]"
                  >
                    美团
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
=======
>>>>>>> c90f6974ea263d903fd93f7e5d93c92800961a6e
        <a href="tel:+862552235776" className="font-display text-3xl text-gold-bright">
          {t.nav.callUs}
        </a>
      </div>
    </>
  );
}
