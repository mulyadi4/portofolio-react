import { motion } from "framer-motion";
import { LuBadgeCheck } from "react-icons/lu";
const courses = [
  {
    company: "Harisenin.com",
    location: "Jakarta, Indonesia",
    duration: "June, 2024 - July, 2024",
    role: "Full Stack Developer Bootcamp",
    gpa: "3.40/4.00",
    description:
      "developed a clone of the Periplus website using React.js for the frontend, Express.js for the backend, and PostgreSQL as the database.",
    coursework: [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    link:"https://tinyurl.com/fsd11mulyadi"
  },
];


const ScrollReveal = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}

    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.div>
);

const CourseCard = ({ course }) => (
  <div className="mb-8 p-6 rounded-lg  bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 ">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-semibold text-gray-300">{course.company}</h3>
        <p className="text-gray-500">{course.location}</p>
      </div>
      <span className="text-gray-300 text-sm">{course.duration}</span>
    </div>

    {/* Detail Program */}
    <div className="mb-4">
      <p className="font-medium text-gray-300">
        {course.role} • GPA: {course.gpa}
      </p>
    </div>

    {/* Final Project */}
    <div className="mb-4 p-4 bg-white/8  rounded-lg">
      <h4 className="font-semibold text-blue-500 mb-2">Final Project:</h4>
      <p className="text-gray-200">{course.description}</p>
    </div>

    {/* Coursework */}
    <div className="mb-4">
      <h4 className="font-semibold text-gray-300 mb-2">Relevant Coursework:</h4>
      <div className="flex flex-wrap  gap-2 mt-1">
        {course.coursework.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm bg-white/8  rounded-lg text-gray-300 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    {/* Sertifikat */}
    <div className="flex items-center gap-1">
    <LuBadgeCheck className="text-blue-500" />
      <div  className="text-blue-500 hover:underline cursor-pointer">
        <a href={course.link}>
          View Certificate</a>
      </div>
    </div>
  </div>
);

function Courses() {
  return (
    <section id="courses" className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg ">
      <h2 className="text-3xl font-bold text-white  mb-8 ">
        Courses, Training and Certifications
      </h2>

      {courses.map((course, index) => (
        <ScrollReveal key={index}>
          <CourseCard course={course} />
        </ScrollReveal>
      ))}
    </section>
  );
}

export default Courses;
