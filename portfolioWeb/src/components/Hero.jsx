import { useState, useEffect, useRef } from "react";
import NET from "vanta/src/vanta.net";
// import image1 from "./assets/image2.jpg"; 
import image1 from "../assets/img/image2.jpg";
import { motion } from "framer-motion"
import { FaAngleUp } from "react-icons/fa";
function Hero() {
  const [showButton, setShowButton] = useState(false);
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

    // Scroll to top handler
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    // Show/hide scroll button
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);


  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x3f3fff,
         
          backgroundAlpha: 0,      
          points: 8.00,
          maxDistance: 25.00,
          spacing: 15.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    
    <div id="Home" 
    className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 '>
   
 <div className="fixed -z-10 min-h-screen w-full
        [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      
  
      <div ref={vantaRef} className="absolute inset-0 z-0" />
      
     
      <div className='flex flex-col items-center justify-center gap-10 text-white relative z-10'>
      <motion.div 
      initial={{y:-50, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.5}}>
        <img src={image1} alt=""  className='w-[300px]
        cursor-pointer rounded-full shadow-xl shadow-indigo-900 
        transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-700
        md:w-[350px]'/>
      </motion.div>
      <motion.div
            initial={{y:50, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{duration:0.8, delay:0.5}}
      className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
      <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text 
       text-transparent  text-5xl font-light md:text-7xl '>Mulyadi</h1>
         <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text 
       text-transparent  text-5xl font-light md:text-7xl '>Web Developer</h3>
       <p className='md:text-base text-pretty text-sm text-gray-400'>
       A Diploma III graduate in Industrial Electronics from Politeknik Negeri Jakarta with experience as a Engineering Staff, specializing in RTU programming, electronic component assembly, and product testing. Currently transitioning into a career in Web Development, supported by a Full-Stack Development bootcamp focused on HTML, CSS, and modern frameworks like React.js and Node.js. As a detail-oriented and fast learner, I am passionate about contributing as a full-time web developer and delivering innovative solutions to every project.

       </p>
      </motion.div>
      </div>
            {/* Tombol Scroll to Top */}
            {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50  rounded-full bg-gradient-to-br from-blue-500 to-purple-500
          shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
        <FaAngleUp className="size-9 text-white"/>
        </motion.button>
      )}
      </div>
  )
}

export default Hero