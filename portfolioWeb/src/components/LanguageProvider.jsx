// src/LanguageProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  nav_home: { en: "Home", id: "Beranda" },
  nav_tech: { en: "Tech", id: "Teknologi" },
  nav_projects: { en: "Projects", id: "Proyek" },
  nav_experience: { en: "Experience", id: "Pengalaman" },
  nav_courses: { en: "Course", id: "Kursus" },

  hi_im: { en: "Hi, I'm", id: "Hai, saya" },
  view_my_work: { en: "View My Work", id: "Lihat Karya" },
  download_cv: { en: "Download CV", id: "Unduh CV" },
  front_end_dev: { en: "FrontEnd Web Developer", id: "FrontEnd Web Developer" },
  tech_stack: { en: "Tech Stack", id: "Tumpukan Teknologi" },
  
  about_paragraph: {
    en:
      "A Diploma III graduate in Industrial Electronics from Politeknik Negeri Jakarta with experience as an Instrumentation Staff, specializing in RTU programming, electronic component assembly, and product testing. I'm now actively transitioning into FrontEnd Developer, having completed an intensive Full-Stack Development bootcamp where I mastered HTML, CSS, and modern JavaScript frameworks including React.js and Node.js. As a detail-oriented professional and rapid learner, I'm passionate about creating exceptional user experiences as a Frontend Developer and delivering innovative, performant solutions for every project I undertake.",
    id:
      "Lulusan Diploma III Elektronika Industri dari Politeknik Negeri Jakarta dengan pengalaman sebagai Instrumentation Staff, khususnya pemrograman RTU, perakitan komponen elektronik, dan pengujian produk. Saat ini saya sedang beralih menjadi FrontEnd Developer setelah menyelesaikan bootcamp Full-Stack Development dimana saya menguasai HTML, CSS, dan framework JavaScript modern termasuk React.js dan Node.js. Sebagai pribadi yang teliti dan cepat belajar, saya bersemangat menciptakan pengalaman pengguna yang baik dan solusi yang performa untuk setiap proyek."
  },

  scroll_to_projects_aria: {
    en: "Scroll to projects",
    id: "Gulir ke bagian proyek"
  }
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem("lang") || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", language);
    } catch {}
  }, [language]);

  const t = (key) => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[language] ?? entry.en;
  };

  const toggle = () => setLanguage((l) => (l === "en" ? "id" : "en"));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
