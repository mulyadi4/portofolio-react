import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";
import Techstore from "../assets/img/TechStore.png";

const projectData = [
  {
    image: "/project1.jpg",
    title: "Clone of Periplus",
    description: "A meticulously crafted clone of the Periplus website, utilizing React.js for a dynamic frontend, Express.js for robust backend services, and PostgreSQL for reliable data management.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js", "Express.js", "PostgreSQL"],
    link: "https://tinyurl.com/cloneperiplus"
  },
  {
    image: Techstore,
    title: "TechStore",
    description: "An innovative e-commerce platform offering a seamless shopping experience, developed with modern web technologies including React.js and Node.js.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "https://ecommerce-lac-nine.vercel.app/"
  },
  {
    image: "/project3.jpg",
    title: "ResistorCalculator",
    description: "A user-friendly resistor calculator built with React.js, designed to quickly and accurately compute resistance values.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "#"
  },
  {
    image: "/project4.jpg",
    title: "CircuitCalculator",
    description: "A powerful circuit calculator developed with React.js, streamlining complex electrical computations with an intuitive interface.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "#"
  },
  {
    image: "/project5.jpg",
    title: "Converter",
    description: "A versatile unit conversion tool crafted with React.js, enabling fast and precise conversions across multiple measurement units.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "#"
  }
];

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(project)} 
      className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
    >
      <img  
        src={project.image} 
        alt={project.title} 
        className="h-64 w-full object-cover transition-all group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="rounded-full bg-white/10 px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
        <div className="flex items-center gap-6-5">
    <BsEye size={20} className="text-blue-500" />
    <div  className="text-blue-500 hover:underline cursor-pointer">
      <a href={project.link}>View</a>
    </div>
  </div>
    </div>
  );
};

const Projects = ({ onSelect }) => {
  return (
    <section  id="projects" className="min-h-screen py-20 px-8 sm:px-16">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Featured Projects
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projectData.map((project, index) => (
          <ScrollReveal key={index}>
         <a href="#viewProject">
            <ProjectCard project={project} onSelect={onSelect} />
          </a>   
         
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
