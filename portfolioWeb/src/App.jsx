
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import ProjectDashboard from './components/ProjectDashboard'
import Experience from './components/Experiences'
import Courses from './components/Courses'







function App() {


  return (
    <>
  <div className="fixed -z-10 min-h-screen w-full
    [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    
   <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 '>

      <Navbar/> 
      <Hero/>
      <Tech/>
      <ProjectDashboard/> 
      <Experience/>
      <Courses/>

      
        <button>

        </button>
    </main>
    </>
  )
}

export default App
