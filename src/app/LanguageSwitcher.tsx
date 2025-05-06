import { useState, useEffect } from "react";
import {
  getDirection,
  getUserLocale,
  setDirection,
  setUserLocale,
} from "./language";

const LanguageSwitcher = () => {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const locale = getUserLocale();
    setLang(locale);
    document.documentElement.dir = getDirection();
  }, []);

  const switchLang = () => {
    const newLang = lang === "en" ? "fa" : "en";
    setUserLocale(newLang);
    setDirection(lang === "en" ? "rtl" : "ltr");
  };
  return (
    <div>
      <button className="button-icon" onClick={switchLang}>
        {lang === "en" ? "FA" : "EN"}
      </button>
    </div>
  );
};
export default LanguageSwitcher;
