//Eslint disable 
//
import es from "./es.json";
import en from "./en.json";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  es: {
    translation: es,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) // Add the language detector plugin
  .init({
    resources,
    fallbackLng: "en", // Fallback language if detection fails
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
