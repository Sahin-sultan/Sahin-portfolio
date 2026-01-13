import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const names = ["Sahin", "শাহিন", "साहिन", "شاهين", "サヒン"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

      // Check if scrolled down
      setIsScrolled(window.scrollY > 50);

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Name cycling effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNameIndex((prev) => (prev + 1) % names.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [names.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  // Determine if navbar should show nav items
  // Show nav items if: on home section OR hovered
  // Hide nav items if: scrolled down and not on home and not hovered
  const showNavItems = activeSection === "home" || isHovered;
  const isCompact = isScrolled && !isHovered && activeSection !== "home";

  return (
    <nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`backdrop-blur-md bg-black/70 border border-white/20 shadow-2xl transition-all duration-500 ease-in-out ${
        isCompact ? 'rounded-full px-6 py-2' : 'rounded-full px-8 py-4'
      }`}>
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className={`font-bold text-white hover:text-gray-300 transform transition-all duration-500 ease-in-out hover:scale-105 ${
              isCompact ? 'text-lg' : 'text-2xl'
            }`}
            data-testid="nav-logo"
          >
            <span 
              className={`brand-name transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {names[currentNameIndex]}
            </span>
          </button>
          
          <div className={`hidden md:flex items-center transition-all duration-500 ease-in-out overflow-hidden ${
            showNavItems ? 'ml-12 space-x-8 opacity-100 max-w-[600px]' : 'ml-0 space-x-0 opacity-0 max-w-0'
          }`}>
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "work", label: "Work" },
              { id: "certificates", label: "Certificates" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-500 ease-in-out hover:scale-105 whitespace-nowrap ${
                  isCompact ? 'text-sm' : 'text-base'
                } ${
                  activeSection === item.id
                    ? "text-white border-b-2 border-white pb-1"
                    : "text-gray-300 hover:text-white"
                }`}
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className={`md:hidden p-2 rounded-full hover:bg-white/10 transition-all duration-500 ease-in-out ${
              isCompact ? 'ml-4' : 'ml-6'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 backdrop-blur-md bg-black/70 border border-white/20 rounded-3xl px-6 py-6 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "work", label: "Work" },
              { id: "certificates", label: "Certificates" },
              { id: "contact", label: "Contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
                data-testid={`mobile-nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
