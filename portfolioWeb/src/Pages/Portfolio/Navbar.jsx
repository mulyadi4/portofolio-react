import { useState, useEffect } from "react";
import { 
  BsGithub, 
  BsLinkedin, 
  BsTwitterX, 
  BsYoutube, 
  BsList, 
  BsX 
} from "react-icons/bs";

const socialLinks = [
  { icon: <BsYoutube />, href: "#", color: "hover:text-red-500" },
  { icon: <BsLinkedin />, href: "#", color: "hover:text-blue-500" },
  { icon: <BsTwitterX />, href: "#", color: "hover:text-white" },
  { icon: <BsGithub />, href: "#", color: "hover:text-white" },
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "Technologi", href: "#tech" },
  { label: "Project", href: "#projects" },
  { label: "Experience", href: "#experiences" },
  { label: "Course", href: "#courses" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const handleNavClick = () => {
    if (window.innerWidth < 768) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-gray-700 bg-black/70 backdrop-blur-lg px-6 py-4 lg:px-16">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <a 
          href="#" 
          className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-opacity hover:opacity-100"
        >
          Mulyadi
        </a> 

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">
          <ul className="flex gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-white opacity-70 transition-all hover:opacity-100 hover:-translate-y-0.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-5 ml-6">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white opacity-70 transition-all ${link.color} hover:opacity-100`}
                >
                  <span className="sr-only">{link.icon.type.name}</span>
                  <span className="text-xl">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-white lg:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <BsX size={24} /> : <BsList size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed right-0 top-[84px] flex h-screen 
          w-1/1 flex flex-col items-center justify-start gap-10 border-gray-800  
          bg-black/90 p-12  lg:hidden">
         
            
            <ul className="flex flex-col items-center gap-8 text-2xl mb-12">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="text-white opacity-70 transition-all hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <ul className="flex gap-8  ">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ ` text-white opacity-70 transition-all ${link.color} hover:opacity-100`}
                  >
                    <span className="sr-only">{link.icon.type.name}</span>
                    <span className="text-2xl">{link.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;