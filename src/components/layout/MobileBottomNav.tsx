"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, MapPin, UtensilsCrossed, Image as ImageIcon, CalendarCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";

/**
 * App-like bottom nav for mobile devices only (hidden md+).
 * Matches the brief's "Mobile Enhancements" requirement.
 */
export default function MobileBottomNav() {
  const { t, locale } = useLanguage();
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-95 bg-[rgba(10,6,5,0.96)] backdrop-blur-xl border-t border-line flex items-stretch h-[68px] pb-[env(safe-area-inset-bottom)]">
      <Link
        href="/"
        className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide ${
          isHome ? "text-gold-bright" : "text-ivory-dim"
        }`}
      >
        <Home size={20} strokeWidth={1.75} />
        <span>{locale === "zh" ? "首页" : "Home"}</span>
      </Link>
      <Link href="/#branches" className="flex-1 flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide text-ivory-dim">
        <MapPin size={20} strokeWidth={1.75} />
        <span>{t.nav.branches}</span>
      </Link>
      <Link
        href="/menu"
        className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide ${
          pathname === "/menu" ? "text-gold-bright" : "text-ivory-dim"
        }`}
      >
        <UtensilsCrossed size={20} strokeWidth={1.75} />
        <span>{t.nav.menu}</span>
      </Link>
      <Link
        href="/gallery"
        className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide ${
          pathname === "/gallery" ? "text-gold-bright" : "text-ivory-dim"
        }`}
      >
        <ImageIcon size={20} strokeWidth={1.75} />
        <span>{t.nav.gallery}</span>
      </Link>
      <Link
        href="/reservations"
        className={`flex-1 flex flex-col items-center justify-center gap-1 text-[10px] tracking-wide ${
          pathname === "/reservations" ? "text-gold-bright" : "text-gold"
        }`}
      >
        <CalendarCheck size={20} strokeWidth={1.75} />
        <span>{t.nav.reserve}</span>
      </Link>
    </nav>
  );
}
