import { motion } from "framer-motion";

const experiences = [
  {
    role: "Engineering Staff",
    company: "PT. Pasti Makmurkencana",
    location:"Bekasi,Indonesia",
    duration: "Jan 2022 - Present",
    description: "Specializing in RTU programming, electronic component assembly, and product testing.",
    link:"https://tinyurl.com/fsd11mulyadi",
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

const ExperienceCard = ({ experience }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm p-4 transition-all hover:bg-white/10">
      <h3 className="text-2xl font-semibold text-white">{experience.role} </h3>
      <p className="text-gray-400 text-xs mb-2">  {experience.location} <span className="text-gray-400 fixed right-3  text-xs mb-2">{experience.duration}</span></p>
      <p className="text-gray-300">{experience.company}</p>
     
      <p className="text-gray-300">{experience.description}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experiences" className="min-h-screen py-20 px-8 sm:px-16">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center text-4xl font-bold text-white md:text-5xl"
      >
        Work Experience
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-1 lg:grid-cols-2">
        {experiences.map((experience, index) => (
          <ScrollReveal key={index}>
            <ExperienceCard experience={experience} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Experience;
