import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { language } = useLanguage();

  // translations untuk judul, subtitle, kategori, tombol, dll
  const text = {
    title: { en: "Featured Projects", id: "Proyek Unggulan" },
    subtitle: { en: "Some of my recent work", id: "Beberapa karya terbaru saya" },
    categories: {
      all: { en: "All Projects", id: "Semua Proyek" },
      frontend: { en: "Frontend", id: "Frontend" },
      backend: { en: "Backend", id: "Backend" },
      fullstack: { en: "Full Stack", id: "Full Stack" },
    },
    live_demo: { en: "Live Demo", id: "Demo Langsung" },
    source_code: { en: "Source Code", id: "Kode Sumber" },
  };

  // list project (title & desc juga bisa diterjemahkan di sini)
  const projects = [
    {
      id: 1,
      title: {
        en: "Clone of Periplus",
        id: "Kloning Periplus",
      },
      description: {
        en: "A meticulously crafted clone of the Periplus website, utilizing React.js for a dynamic frontend, Express.js for robust backend services, and PostgreSQL for reliable data management.",
        id: "Sebuah kloning website Periplus yang dibuat dengan teliti, menggunakan React.js untuk frontend dinamis, Express.js untuk layanan backend yang kuat, dan PostgreSQL untuk manajemen data yang andal.",
      },
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Node.js", "Express.js", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/Kelompok-1-FSD11/Fullstack-Periplus-Kelompok-1",
    },
    {
      id: 2,
      title: { en: "TechStore", id: "TechStore" },
      description: {
        en: "An innovative e-commerce platform offering a seamless shopping experience, developed with modern web technologies including React.js.",
        id: "Platform e-commerce inovatif yang menawarkan pengalaman belanja mulus, dikembangkan dengan teknologi web modern termasuk React.js.",
      },
      technologies: ["HTML", "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/Ecommerce",
      live: "https://ecommerce-lac-nine.vercel.app/",
    },
    {
      id: 3,
      title: { en: "CaffeShop", id: "CaffeShop" },
      description: {
        en: "An immersive, Vite-powered React.js coffee shop experience featuring a beautifully responsive menu gallery, real-time category filtering, and a seamless cart workflow.",
        id: "Sebuah website coffee shop dengan React.js dan Vite yang menghadirkan galeri menu responsif, filter kategori real-time, dan alur keranjang belanja yang mulus.",
      },
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/coffeshop",
      live: "https://coffeshop-two.vercel.app/",
    },
    {
      id: 4,
      title: { en: "ResistorCalculator", id: "Kalkulator Resistor" },
      description: {
        en: "A user-friendly resistor calculator built with React.js, designed to quickly and accurately compute resistance values.",
        id: "Kalkulator resistor yang ramah pengguna dibuat dengan React.js, dirancang untuk menghitung nilai resistansi dengan cepat dan akurat.",
      },
      technologies: ["HTML", "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/react-resistor/tree/main/kresistor",
      live: "https://kalkulator-resistor.vercel.app/",
    },
    {
      id: 5,
      title: { en: "ConvertLIVE", id: "ConvertLIVE" },
      description: {
        en: "A versatile unit conversion tool crafted with React.js, enabling fast and precise conversions across multiple measurement units.",
        id: "Alat konversi satuan serbaguna dengan React.js, memungkinkan konversi cepat dan tepat untuk berbagai satuan ukur.",
      },
      technologies: ["HTML", "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/react-convert/tree/main/convert",
      live: "https://react-convert.vercel.app",
    },
  ];

  const categories = [
    { id: "all", label: text.categories.all[language] },
    { id: "frontend", label: text.categories.frontend[language] },
    { id: "backend", label: text.categories.backend[language] },
    { id: "fullstack", label: text.categories.fullstack[language] },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
            {text.title[language]}
          </h2>
          <p className="text-xl text-gray-300">{text.subtitle[language]}</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                  : "bg-white/15 text-gray-500 backdrop-blur-sm hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-200 mb-4 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-white/8 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      {text.live_demo[language]}
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    {text.source_code[language]}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
