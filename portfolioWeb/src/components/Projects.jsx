
import { motion } from "framer-motion"
const projectData = [
  {
    image: "/project1.jpg",
    title: "Clone of Periplus",
    description: "developed a clone of the Periplus website using React.js for the frontend, Express.js for the backend, and PostgreSQL as the database.",
    technologies: ["HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",],
    link:"https://tinyurl.com/cloneperiplus"
  },  {
    image: "/project2.jpg",
    title: "Kalkulator Resistor",
    description: "developed a resistor calculator using React.js for the frontend.",
    technologies: ["HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Node.js",
     ],
    link:"https://portofolio-react-eta.vercel.app/#/kalres"
  }


]

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
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div  className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 ">
      <a href={project.link}>
      <img 
        src={project.image} 
        alt={project.title} 
        className="h-64 w-full object-cover transition-all group-hover:scale-105"
      />
      </a>
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
    </div>
  )
}

const Projects = () => {
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
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

export default Projects