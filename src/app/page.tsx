"use client";
import { useState, useEffect, useRef } from "react";
import { getDictionary } from "./getDictionary";
import { getUserLocale } from "./language";
import ThemeChanger from "./ThemeChanger";
import LanguageSwitcher from "./LanguageSwitcher";
import { menus } from "./services/menu.service";
import MainSection from "./MainSection";
import { gsap } from "gsap";
import Projects from "./projects";
import Skills from "./skills";
export default function Home() {
  const [t, setT] = useState<Record<string, string>>({});
  const [lang, setLang] = useState("en");
  const bodyRef = useRef(null);
  useEffect(() => {
    const locale = getUserLocale();
    setLang(locale);
    getDictionary(locale).then(setT);
    gsap.from(bodyRef.current, {
      y: -50,
      opacity: 0,
      duration: 3,
      ease: "power3.out",
    });
  }, []);
  const handleMouseEnter = (event: any) => {
    gsap.to(event.target, {
      borderColor: "#0069a8",
      duration: 0.2,
      ease: "power2.out",
    });
  };
  const handleScroller = (target: any) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };
  const handleMouseLeave = (event: any) => {
    gsap.to(event.target, {
      borderColor: "transparent",
      duration: 0.2,
      ease: "power2.in",
    });
  };
  if (!lang) return null;
  return (
    <div
      ref={bodyRef}
      className="bg-gray-100 dark:bg-gray-900 h-[100vh] overflow-y-auto w-[100vw] p-4 py-20 text-gray-800 dark:text-gray-400"
    >
      <div className="w-[100%] m-auto h-full ">
        <div className="flex justify-around">
          <div>
            <h1 className="text-blue-500 text-2xl font-bold">{t.Writer}</h1>
          </div>
          <div className="flex justify-around">
            <div className="my-auto mx-2">
              {menus.map((menu) => {
                return (
                  <button
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    key={menu.id}
                    onClick={() => handleScroller(menu.route)}
                    className="mx-4 relative border-b-2 border-transparent"
                  >
                    {t[menu.name]}
                  </button>
                );
              })}
            </div>
            <LanguageSwitcher></LanguageSwitcher>
            <ThemeChanger></ThemeChanger>
          </div>
        </div>
        <div id="main_Id">
          <MainSection t={t}></MainSection>
        </div>
        <div className="my-20 w-[70%] m-auto" id="project_Id">
          <Projects props={{ t }}></Projects>
        </div>
        <div className="my-20 w-[70%] m-auto" id="skills_Id">
          <Skills props={{ t }}></Skills>
        </div>
        <div id="contact_Id" className="py-20"></div>
      </div>
    </div>
  );
}
