
import Courses from "./Courses"
import Experience from "./Experiences"
import Hero from "./Hero"
import Navbar from "./Navbar"
import Projects from "./Projects"
import Tech from "./Tech"



const Portfolio = () => {
  return (
    <>
  <div className="fixed -z-10 min-h-screen w-full
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    
   <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 '>

      <Navbar/> 
        <Hero/>
        <Tech/>
        <Projects/> 
        <Experience/>
        <Courses/>
      
        <button>

        </button>
    </main>
    </>
    
  )
}

export default Portfolio