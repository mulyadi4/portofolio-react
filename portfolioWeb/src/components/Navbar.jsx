import { useState, useEffect } from "react";
import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube, BsList, BsX } from "react-icons/bs";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center 
    justify-between border-b-gray-700 bg-black/70 px-6
     py-6 text-white backdrop-blur-md md:justify-evenly md:px-16">
      <a 
        href="#home" 
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
      >
        mul
      </a> 

      {/* Mobile Menu Button */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10">
        <a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Home</li>
        </a>
        <a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Tech</li>
        </a>
        <a href="#project" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Project</li>
        </a>
        <a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          <li>Contact</li>
        </a>
      </ul>

      {/* Desktop Social Icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-300">
          <BsYoutube/>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-300">
          <BsLinkedin/>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-300">
          <BsTwitterX/>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-300">
          <BsGithub/>
        </li>
      </ul>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col py-50  items-center justify-center bg-black/90 backdrop-blur-lg md:hidden">
          <button
            className="absolute top-4 right-4 p-2 text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <BsX size={24} />
          </button>
          
          <ul className="flex flex-col items-center gap-8 text-2xl">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Home</li>
            </a>
            <a href="#tech" onClick={() => setIsMenuOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Tech</li>
            </a>
            <a href="#project" onClick={() => setIsMenuOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Project</li>
            </a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
              <li>Contact</li>
            </a>
          </ul>

          <ul className="mt-12 flex gap-8">
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-red-500 hover:opacity-300">
              <BsYoutube/>
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-300">
              <BsLinkedin/>
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-300">
              <BsTwitterX/>
            </li>
            <li className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:opacity-300">
              <BsGithub/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar;