import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-tight"
          data-testid="hero-title"
          delay={0}
          y={60}
        >
          <h1>Sahin<br /></h1>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
          data-testid="hero-description"
          delay={0.2}
          y={40}
        >
          <p>
            With years of experience in web design, I live and breathe good design and value the details that matter. Say goodbye to the stressful back and forth with developers who don't have an eye for design and find someone who has the skills, experience, and enthusiasm to bring your vision to life.
          </p>
        </AnimatedSection>
        
        {/* Statistics Section */}
        <AnimatedSection
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          data-testid="hero-stats"
          delay={0.4}
          y={30}
        >
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">0</div>
            <div className="text-sm text-muted-foreground">happy clients</div>
          </div>
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">6</div>
            <div className="text-sm text-muted-foreground">years experience</div>
          </div>
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">client satisfaction</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
