import { memo } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const Hero = memo(function Hero() {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-tight"
          data-testid="hero-title"
          delay={0}
          y={30}
          duration={0.3}
        >
          <h1 className="relative inline-block" style={{ fontFamily: 'Playfair Display, serif' }}>
            Sahin Sultan
          </h1>
        </AnimatedSection>

        <AnimatedSection
          className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
          data-testid="hero-description"
          delay={0.1}
          y={20}
          duration={0.3}
        >
          <p style={{ fontFamily: 'Crete Round, serif' }}>
            Full Stack Developer | AI Enthusiast
          </p>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-base text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed italic mb-12"
          data-testid="hero-quote"
          delay={0.2}
          y={20}
          duration={0.3}
        >
          <p style={{ fontFamily: 'Merienda, cursive' }}>
            "The process is more important than the results. And if you take care of the process, you will get the results."  -<span style={{ color: '#60a5fa' }}>MS Dhoni</span>
          </p>
        </AnimatedSection>

        <AnimatedSection
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          data-testid="hero-buttons"
          delay={0.3}
          y={20}
          duration={0.3}
        >
          {/* Resume Button */}
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'https://res.cloudinary.com/ddzreu2to/image/upload/v1767856404/resume_2026__SAHIN__1_uvebvn.webp';
              link.download = 'Sahin_Sultan_Resume.webp';
              link.target = '_blank';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500 text-blue-400 hover:text-white rounded-full font-medium text-lg transition-all duration-200 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-blue-500/25 active:scale-95"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Resume
          </button>

          {/* Contact Button */}
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-transparent border-2 border-green-500 hover:bg-green-500 text-green-400 hover:text-white rounded-full font-medium text-lg transition-all duration-200 md:hover:scale-105 md:hover:shadow-lg md:hover:shadow-green-500/25 active:scale-95"
            style={{ fontFamily: 'Josefin Sans, sans-serif' }}
          >
            Contact
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
});

export default Hero;
