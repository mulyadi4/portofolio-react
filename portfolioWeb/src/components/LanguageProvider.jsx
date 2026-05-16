// src/LanguageProvider.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const translations = {
  nav_home: { en: "Home", id: "Beranda" },
  nav_tech: { en: "Tech", id: "Teknologi" },
  nav_projects: { en: "Projects", id: "Proyek" },
  nav_experience: { en: "Experience", id: "Pengalaman" },
  nav_courses: { en: "Course", id: "Kursus" },
  i_am: { en: "I'm a", id: "Saya seorang" },
  hi_im: { en: "Hi, I'm", id: "Hai, saya" },
  view_my_work: { en: "View My Work", id: "Lihat Karya" },
  download_cv: { en: "Download CV", id: "Unduh CV" },
  front_end_dev: { en: "FrontEnd Web Developer/Engineer", id: "FrontEnd Web Developer/Engineer" },
  tech_stack: { en: "Tech Stack", id: "Tumpukan Teknologi" },
  
  about_paragraph: {
    en:
      "Experienced in developing web applications based on React.js through various projects for approximately 2 years, including full-stack development and RESTful API integration with responsive interfaces using Tailwind CSS. Proficient in React.js, JavaScript, Vue.js, Node.js, Express.js, PostgreSQL, MySQL, Git, as well as the basics of CI/CD and Docker. Has more than 4 years of formal work experience as an Instrumentation Staff, which has strengthened analytical skills, troubleshooting abilities, and teamwork. Graduated with a D3 in Industrial Electronics from Politeknik Negeri Jakarta.",
    id:
      "Berpengalaman dalam pengembangan aplikasi web berbasis React.js melalui berbagai proyek selama kurang lebih 2 tahun, mencakup full stack development hingga integrasi RESTful API dengan tampilan responsif menggunakan Tailwind CSS. Menguasai React.js, JavaScript, Vue.js, Node.js, Express.js, PostgreSQL, MySQL, Git, serta dasar CI/CD dan Docker. Memiliki pengalaman kerja formal lebih dari 4 tahun sebagai Staff Instrumentasi yang mengasah kemampuan analitis, troubleshooting, dan kerja sama tim. Lulusan D3 Elektronika Industri Politeknik Negeri Jakarta."
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

  const toggle = () => setLanguage((l) => (l === "id" ? "en" : "id"));

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
