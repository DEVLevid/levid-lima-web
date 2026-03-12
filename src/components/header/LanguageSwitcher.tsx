"use client";

import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "pt", label: "Português", flag: "🇧🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "es", label: "Español", flag: "🇪🇸" },
] as const;

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  function handleChangeLanguage(code: (typeof LANGUAGES)[number]["code"]) {
    i18n.changeLanguage(code);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", code);
    }
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {LANGUAGES.map((lang) => {
        const isActive = currentLanguage.startsWith(lang.code);

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => handleChangeLanguage(lang.code)}
            aria-label={lang.label}
            title={lang.label}
            style={{
              fontSize: "1.25rem",
              lineHeight: 1,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              opacity: isActive ? 1 : 0.4,
              transition: "opacity 0.2s ease-in-out",
            }}
          >
            <span aria-hidden="true">{lang.flag}</span>
          </button>
        );
      })}
    </div>
  );
}

