
import { motion } from 'framer-motion'
import { 
  BiLogoBootstrap, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript, 
  BiLogoNodejs, 
  BiLogoPostgresql, 
  BiLogoReact, 
  BiLogoTailwindCss 
} from "react-icons/bi"
import { SiExpress } from "react-icons/si";
// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120 }
  }
}

const hoverEffect = {
  scale: 1.3,
  y: -10,
  transition: { type: "spring", stiffness: 300 },

};

function Tech() {
  const techStack = [
     { icon: BiLogoHtml5, color: 'text-orange-500', label: 'JavaScript' },
    { icon: BiLogoCss3, color: 'text-red-500', label: 'JavaScript' },
    { icon: BiLogoJavascript, color: 'text-yellow-500', label: 'JavaScript' },
    { icon: BiLogoNodejs, color: 'text-green-600', label: 'Node.js' },
    { icon: BiLogoReact, color: 'text-sky-500', label: 'React' },
    { icon: BiLogoTailwindCss, color: 'text-sky-500', label: 'Tailwind CSS' },
    { icon: BiLogoBootstrap, color: 'text-violet-500', label: 'Bootstrap' },
    { icon: BiLogoPostgresql, color: 'text-sky-500', label: 'PostgreSQL' },
    { icon: SiExpress, color: 'text-white', label: 'Express' },
  ]

  return (
    <section 
      id="tech" 
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 py-12"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl font-light text-white md:text-6xl"
      >
        Tech Stack
      </motion.h1>

      <motion.div 
        className="flex flex-wrap items-center justify-center gap-10 p-5 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {techStack.map((tech, index) => {
          const Icon = tech.icon
          return (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={hoverEffect}
              className="flex flex-col items-center gap-2 "
            >
              <Icon 
                aria-label={tech.label}
                className={`cursor-pointer text-[80px] sm:text-[100px] md:text-[120px] ${tech.color} `}
              />
              <span className="text-white text-sm font-medium opacity-0 transition-opacity group-hover:opacity-100">
                {tech.label}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}

export default Tech