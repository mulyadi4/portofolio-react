
import './App.css'
import Hero from './components/Hero'
import Tech from './components/Tech'
import Experience from './components/Experiences'
import Courses from './components/Courses'
import Projects from './components/Projects'
import Header from './components/Header'







function App() {


  return (
    <>
  {/* <div className="fixed -z-10 min-h-screen w-full
    [background:radial-gradient(110%_110%_at_50%_10%,#000_30%,#62e_100%)]"></div>
     */}
   <main className='flex flex-col items-center px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 '>

      <Header/> 
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

export default App
