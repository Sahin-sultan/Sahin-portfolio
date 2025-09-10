import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-12"
          data-testid="about-title"
          delay={0}
          y={50}
        >
          <h2>About</h2>
        </AnimatedSection>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatedSection
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="about-paragraph-1"
            delay={0.1}
            y={40}
          >
            <p>
              I'm a passionate designer and developer with over 5 years of experience creating digital products 
              that balance beautiful aesthetics with functional usability. My approach combines user-centered 
              design principles with modern development practices to deliver exceptional experiences.
            </p>
          </AnimatedSection>
          
          <AnimatedSection
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="about-paragraph-2"
            delay={0.2}
            y={40}
          >
            <p>
              When I'm not designing or coding, you can find me exploring new technologies, contributing to 
              open source projects, or seeking inspiration from art, architecture, and nature. I believe 
              that great design comes from understanding people and solving real problems.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
