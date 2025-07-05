import { Calendar, MapPin, Briefcase } from "lucide-react"

const Experience = () => {
  const experiences = [
     {
      id: 1,
      title: "Instrumentation Staff",
      company: "PT. Pasti Makmurkencana",
      location: "Bekasi, Indonesia",
      period: "2021 - Present",
      type: "Full-time",
      description:
        "Specialized in RTU programming, electronic component assembly, and product testing in industrial automation systems.",
     
    },
  

  ]

  return (
    <section id="experience" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300">My professional journey</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-600 to-pink-600"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline marker */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content */}
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"} ml-16 md:ml-0`}>
                <div className="bg-white/5 p-6 rounded-xl shadow-lg border  hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                      <Briefcase size={16} className="text-gray-300" />
                      <span className="text-sm font-medium text-gray-600">{exp.type}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-indigo-600 mb-3">{exp.company}</h4>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

            
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
