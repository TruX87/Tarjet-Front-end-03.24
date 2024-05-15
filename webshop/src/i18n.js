import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./i18n/en.json";
import estonian from "./i18n/et.json";
import german from "./i18n/gr.json";
import finnish from "./i18n/fi.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: english 
  },
  et: {
    translation: estonian 
  },
  gr: {
      translation: german 
  },
  fi: {
    translation: finnish 
  }
};
  
  const checkLanguage = () => {
    if (localStorage.getItem("lang") === null) { 
      localStorage.setItem("lang", "en");
      return "en";
  }
  if (["en", "et", "gr", "fi"].includes(localStorage.getItem("lang")) === false) {
    localStorage.setItem("lang", "en");
    return "en";
  }
  return localStorage.getItem("lang");
}
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: checkLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;