
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Clone of Periplus",
      description:
        "A meticulously crafted clone of the Periplus website, utilizing React.js for a dynamic frontend, Express.js for robust backend services, and PostgreSQL for reliable data management.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Node.js", "Express.js", "PostgreSQL"],
      category: "fullstack",
      github: "https://github.com/Kelompok-1-FSD11/Fullstack-Periplus-Kelompok-1",
      
    },
    {
      id: 2,
        title: "TechStore",
      description: "An innovative e-commerce platform offering a seamless shopping experience, developed with modern web technologies including React.js .",
     technologies: ["HTML",  "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/Ecommerce",
      live: "https://ecommerce-lac-nine.vercel.app/",
    },
      {
      id: 3,
    title: "CaffeShop",
    description: "An immersive, Vite‑powered React.js coffee shop experience featuring a beautifully responsive menu gallery, real‑time category filtering, and a seamless cart workflow—complete with smooth animations and mobile‑first design for effortless browsing and ordering.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/coffeshop",
      live: "https://coffeshop-two.vercel.app/",
    },
    {
      id: 4,
     title: "ResistorCalculator",
    description: "A user-friendly resistor calculator built with React.js, designed to quickly and accurately compute resistance values.",
    technologies: ["HTML",  "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/react-resistor/tree/main/kresistor",
      live: "https://kalkulator-resistor.vercel.app/",
    },
    {
      id: 5,
        title: "ConvertLIVE",
    description: "A versatile unit conversion tool crafted with React.js, enabling fast and precise conversions across multiple measurement units.",
    technologies: ["HTML", "JavaScript", "Tailwind", "React"],
      category: "frontend",
      github: "https://github.com/mulyadi4/react-convert/tree/main/convert",
      live: "https://react-convert.vercel.app",
    }
  
    

  ]

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300">Some of my recent work</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                  :  "bg-white/15 text-gray-500 backdrop-blur-sm transition-all hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="mb-8 p-6 rounded-xl bg-white/5 backdrop-blur-sm  hover:bg-white/10 hover:-translate-y-2 transition-all duration-300"
            >
           
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-white/8   text-gray-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium transition-colors duration-200"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
