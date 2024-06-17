import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";

const resources = {
  en: {
    translation: en,
  },
};

const iNextUse = i18next;

iNextUse.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources,
  fallbackLng: "en",
});

export default i18next;
