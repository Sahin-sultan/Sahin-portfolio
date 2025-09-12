import { memo } from "react";
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
          <h1 className="relative inline-block">
            <span className="shine-text">
              Sahin
            </span>
          </h1>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
          data-testid="hero-description"
          delay={0.2}
          y={40}
        >
          <p>
            Full Stack Developer | AI Enthusiast {/*{new Date().getTime()}*/}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
