import { motion } from "framer-motion";
import { BsEye } from "react-icons/bs";

const projectData = [
  {
    image: "/project1.jpg",
    title: "Clone of Periplus",
    description: "Developed a clone of the Periplus website using React.js for the frontend, Express.js for the backend, and PostgreSQL as the database.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js", "Express.js", "PostgreSQL"],
    link: "https://tinyurl.com/cloneperiplus"
  },
  {
    image: "/project2.jpg",
    title: "ResistorCalculator",
    description: "Developed a resistor calculator using React.js for the frontend.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "https://portofolio-react-eta.vercel.app/#/kalres"
  },
  {
    image: "/project3.jpg",
    title: "CircuitCalculator",
    description: "Developed a circuit calculator using React.js for the frontend.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "https://portofolio-react-eta.vercel.app/#/cafe"
  },
  {
    image: "/project4.jpg",
    title: "Converter",
    description: "Developed a circuit calculator using React.js for the frontend.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Node.js"],
    link: "https://portofolio-react-eta.vercel.app/#/cafe"
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
    <section id="projects" className="min-h-screen py-20 px-8 sm:px-16">
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
            <ProjectCard project={project} onSelect={onSelect} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
