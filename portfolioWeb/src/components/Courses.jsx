// src/Courses.jsx
import { motion } from "framer-motion";
import { LuBadgeCheck } from "react-icons/lu";
import { Calendar, MapPin } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

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

const CourseCard = ({ course }) => {
  const { language } = useLanguage();

  return (
    <div className="mb-8 p-6 rounded-lg bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 ">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-300">
            {course.company[language]}
          </h3>
          <div className="flex items-center gap-1 text-gray-500">
            <MapPin size={16} />
            <p>{course.location[language]}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 text-gray-300 text-sm">
          <Calendar size={16} />
          <span>{course.duration[language]}</span>
        </div>
      </div>

      {/* Detail Program */}
      <div className="mb-4">
        <p className="font-medium text-gray-300">
          {course.role[language]} • GPA: {course.gpa}
        </p>
      </div>

      {/* Final Project */}
      <div className="mb-4 p-4 bg-white/8 rounded-lg">
        <h4 className="font-semibold text-blue-500 mb-2">
          {course.final_project_title[language]}
        </h4>
        <p className="text-gray-200">{course.description[language]}</p>
      </div>

      {/* Coursework */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-300 mb-2">
          {course.coursework_title[language]}
        </h4>
        <div className="flex flex-wrap gap-2 mt-1">
          {course.coursework.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-white/8 text-gray-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Sertifikat */}
      <div className="flex items-center gap-1">
        <LuBadgeCheck className="text-blue-500" />
        <div className="text-blue-500 hover:underline cursor-pointer">
          <a href={course.link} target="_blank" rel="noopener noreferrer">
            {course.view_certificate[language]}
          </a>
        </div>
      </div>
    </div>
  );
};

function Courses() {
  const { language } = useLanguage();

  const translations = {
    section_title: {
      en: "Courses, Training and Certifications",
      id: "Kursus, Pelatihan dan Sertifikasi",
    },
  };

  const courses = [
    {
      company: {
        en: "Harisenin.com",
        id: "Harisenin.com",
      },
      location: {
        en: "Jakarta, Indonesia",
        id: "Jakarta, Indonesia",
      },
      duration: {
        en: "Feb, 2024 - July, 2024",
        id: "Februari 2024 - Juli 2024",
      },
      role: {
        en: "Full Stack Developer Bootcamp",
        id: "Bootcamp Full Stack Developer",
      },
      gpa: "3.40/4.00",
      description: {
        en: "Developed a clone of the Periplus website using React.js for the frontend, Express.js for the backend, and PostgreSQL as the database.",
        id: "Mengembangkan kloning website Periplus menggunakan React.js untuk frontend, Express.js untuk backend, dan PostgreSQL sebagai basis data.",
      },
      coursework: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MySQL",
      ],
      final_project_title: {
        en: "Final Project:",
        id: "Proyek Akhir:",
      },
      coursework_title: {
        en: "Course materials:",
        id: "Materi kursus::",
      },
      view_certificate: {
        en: "View Certificate",
        id: "Lihat Sertifikat",
      },
      link: "https://tinyurl.com/fsd11mulyadi",
    },
  ];

  return (
    <section
      id="courses"
      className="max-w-4xl mx-auto p-6 rounded-xl shadow-lg "
    >
      <h2 className="text-3xl font-bold text-white mb-8">
        {translations.section_title[language]}
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
