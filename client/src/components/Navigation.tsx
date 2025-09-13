import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const names = ["Sahin", "শাহিন", "साहिन", "شاهين", "サヒン"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "certificates", "contact"];
      const scrollPosition = window.scrollY + 200;

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-white hover:text-gray-300 transform transition-all duration-300 ease-in-out hover:scale-105"
            data-testid="nav-logo"
          >
            <span 
              className={`brand-name transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {names[currentNameIndex]}
            </span>
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
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
                className={`text-base font-medium transition-all duration-300 hover:scale-105 ${
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
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-white/20">
            <div className="flex flex-col space-y-6">
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
      </div>
    </nav>
  );
}
