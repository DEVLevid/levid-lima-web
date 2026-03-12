import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { headerPt, headerEn, headerEs } from "./components/header";
import { homePt, homeEn, homeEs } from "./components/home";
import { aboutPt, aboutEn, aboutEs } from "./components/about";
import { servicesPt, servicesEn, servicesEs } from "./components/services";
import { contactPt, contactEn, contactEs } from "./components/contact";
import { footerPt, footerEn, footerEs } from "./components/footer";
import {
  feedbacksPt,
  feedbacksEn,
  feedbacksEs,
} from "./components/feedbacks";

const resources = {
  pt: {
    header: headerPt,
    home: homePt,
    about: aboutPt,
    services: servicesPt,
    contact: contactPt,
    footer: footerPt,
    feedbacks: feedbacksPt,
  },
  en: {
    header: headerEn,
    home: homeEn,
    about: aboutEn,
    services: servicesEn,
    contact: contactEn,
    footer: footerEn,
    feedbacks: feedbacksEn,
  },
  es: {
    header: headerEs,
    home: homeEs,
    about: aboutEs,
    services: servicesEs,
    contact: contactEs,
    footer: footerEs,
    feedbacks: feedbacksEs,
  },
} as const;

const fallbackLng = "pt";
const supportedLanguages = ["pt", "en", "es"] as const;

function getInitialLanguage() {
  if (typeof window === "undefined") {
    return fallbackLng;
  }

  const stored = window.localStorage.getItem("language");
  if (stored && supportedLanguages.includes(stored as (typeof supportedLanguages)[number])) {
    return stored;
  }

  const browserLang = window.navigator.language.split("-")[0];
  if (supportedLanguages.includes(browserLang as (typeof supportedLanguages)[number])) {
    return browserLang;
  }

  return fallbackLng;
}

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng,
    interpolation: {
      escapeValue: false,
    },
  });
}

export default i18n;

