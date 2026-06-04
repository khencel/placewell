"use client";
import { useState, useRef, useEffect } from "react";
import { useLocale } from "@/i18n/LocaleContext";
import s from "@/styles/LangSelector.module.css";

const LANGUAGES = [
  { value: "en",  flag: "🇺🇸", label: "English",    native: "English"   },
  { value: "ar",  flag: "🇸🇦", label: "Arabic",     native: "العربية"   },
  { value: "zh",  flag: "🇨🇳", label: "Mandarin",   native: "普通话"     },
  { value: "yue", flag: "🇭🇰", label: "Cantonese",  native: "廣東話"     },
  { value: "ja",  flag: "🇯🇵", label: "Japanese",   native: "日本語"     },
  { value: "lt",  flag: "🇱🇹", label: "Lithuanian", native: "Lietuvių"  },
  { value: "hr",  flag: "🇭🇷", label: "Croatian",   native: "Hrvatski"  },
  { value: "pl",  flag: "🇵🇱", label: "Polish",     native: "Polski"    },
];

export function LanguagePicker() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.value === locale) ?? LANGUAGES[0];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className={`${s.langWrapper} ${open ? s.open : ""}`}>
      <button className={s.langTrigger} onClick={() => setOpen((v) => !v)}>
        <span className={s.flag}>{current.flag}</span>
        <span className={s.label}>{current.label}</span>
        <span className={s.chevron}>▾</span>
      </button>

      <div className={s.langDropdown}>
        {LANGUAGES.map((lang) => (
          <button
            key={lang.value}
            className={`${s.langOption} ${locale === lang.value ? s.active : ""}`}
            onClick={() => {
              setLocale(lang.value as Parameters<typeof setLocale>[0]);
              setOpen(false);
            }}
          >
            <span className={s.flag}>{lang.flag}</span>
            <span className={s.name}>{lang.label}</span>
            <span className={s.native}>{lang.native}</span>
          </button>
        ))}
      </div>
    </div>
  );
}