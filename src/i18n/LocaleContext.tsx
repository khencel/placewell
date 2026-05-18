"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { defaultLocale, type Locale } from "./config";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextType>({
  locale: defaultLocale,
  setLocale: () => {},
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [messages, setMessages] = useState<Record<string, unknown>>({});
  const [ready, setReady] = useState(false);

  // I-load ang locale mula sa localStorage on mount
  useEffect(() => {
    const stored = (localStorage.getItem("locale") as Locale) ?? defaultLocale;
    loadLocale(stored);
  }, []);

  const loadLocale = async (newLocale: Locale) => {
    const mod = await import(`../messages/${newLocale}.json`);
    setMessages(mod.default);
    setLocaleState(newLocale);
    setReady(true);
  };

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem("locale", newLocale);
    loadLocale(newLocale);
  };

  if (!ready) return null; // o loading spinner mo dito

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LocaleContext.Provider>
  );
}