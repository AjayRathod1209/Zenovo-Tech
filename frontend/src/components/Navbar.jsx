import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Why Us", link: "#why-us" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Process", link: "#process" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src="/zenova-logo.png"
              alt="Zenova Tech"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="text-gray-300 hover:text-cyan-400 transition duration-300 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:flex items-center bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 hover:scale-105 transition duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cyan-400 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black/95 backdrop-blur-xl overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-8 gap-6">
          {navLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 text-lg transition"
              >
                {item.name}
              </a>
            </li>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-cyan-500 text-black font-semibold px-6 py-3 rounded-full"
          >
            Let's Talk
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;