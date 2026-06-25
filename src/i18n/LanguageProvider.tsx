"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type TranslationKey } from "./translations";
import type { Locale, LocalizedText } from "@/data/types";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKey;
  /** Pick the right field from a { en, zh } localized text object */
  pick: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "aljannat-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always render "en" on the server and on the very first client paint so
  // server and client HTML match (avoids a hydration mismatch). The actual
  // saved/browser-detected locale is applied a moment later via the effect
  // below — this is the standard React pattern for syncing from
  // browser-only storage (localStorage/navigator) that isn't available
  // during SSR, and intentionally triggers one extra render on load.
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    const detected: Locale =
      stored === "en" || stored === "zh"
        ? stored
        : window.navigator.language.toLowerCase().startsWith("zh")
          ? "zh"
          : "en";
    if (detected !== "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing from browser-only storage, see comment above
      setLocaleState(detected);
    }
    document.documentElement.lang = detected === "zh" ? "zh-CN" : "en";
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
  }, []);

  const pick = useCallback(
    (text: LocalizedText) => text[locale],
    [locale]
  );

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
    pick,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
