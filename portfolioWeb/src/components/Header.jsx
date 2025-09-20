// src/Header.jsx
import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggle, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", labelKey: "nav_home" },
    { id: "tech", labelKey: "nav_tech" },
    { id: "projects", labelKey: "nav_projects" },
    { id: "experience", labelKey: "nav_experience" },
    { id: "courses", labelKey: "nav_courses" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
              Mulyadi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? "text-indigo-600" : "text-gray-600 hover:text-indigo-600"
                }`}
              >
                {t(item.labelKey)}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full transition-opacity duration-300 ${
                    activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Desktop Social Links + Language Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center gap-3">
              <div className="flex space-x-2">
                <a
                  href="https://github.com/mulyadi4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/mulyadi1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggle}
                className="px-3 py-2 rounded-md border border-gray-200 text-sm font-medium hover:bg-gray-50 transition"
                aria-label="Toggle language"
                title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
              >
                {language === "en" ? "EN" : "ID"}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              className="px-2 py-1 rounded-md text-sm font-medium border border-gray-200"
              title={language === "en" ? "Switch to Indonesian" : "Switch to English"}
            >
              {language === "en" ? "EN" : "ID"}
            </button>

            <div>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {/* Mobile Navigation Links */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-indigo-600 bg-indigo-50 border-l-4 border-indigo-600"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                >
                  {t(item.labelKey)}
                </button>
              ))}

              {/* Mobile Social Links */}
              <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/mulyadi4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-200"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mulyadi1999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-all duration-200"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
