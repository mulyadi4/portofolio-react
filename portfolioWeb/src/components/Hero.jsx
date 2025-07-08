import { useState, useEffect } from "react";
import { ChevronDown, Download, ArrowRight } from "lucide-react";
import profile from "./img/profile.jpeg";
const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed] = useState(150);

  const words = ["FrontEnd Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 30 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Mulyadi
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white/90 mb-6 min-h-[3.5rem]">
              I'm a{" "}
              <span className="text-cyan-400">
                {text}
                <span className="animate-pulse">|</span>
              </span>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-2xl">
              A Diploma III graduate in Industrial Electronics from Politeknik Negeri Jakarta with experience as an Instrumentation Staff, specializing in RTU programming, electronic component assembly, and product testing. I'm now actively transitioning into FrontEnd Developer, having completed an intensive Full-Stack Development bootcamp where I mastered HTML, CSS, and modern JavaScript frameworks including React.js and Node.js. As a detail-oriented professional and rapid learner, I'm passionate about creating exceptional user experiences as a Frontend Developer and delivering innovative, performant solutions for every project I undertake.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work <ArrowRight size={20} />
              </button>
              <button onClick={() => window.open("https://drive.google.com/file/d/1RCOXkAck6GLQd-WT2LEKDAcuD3NDYrpx/view", "_blank")}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 backdrop-blur-sm hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
                > 
                <Download size={20} />
                Download CV
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/20 relative z-10">
                <img
                  src={profile}
                  
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-pink-600 rounded-full blur-2xl opacity-30 animate-pulse scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>


      <div className="absolute bottom-6 w-full px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center ">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white/70 hover:text-white transition-colors duration-300 animate-bounce"
              aria-label="Scroll to projects"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;