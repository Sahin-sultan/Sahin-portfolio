import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="about-title"
          delay={0}
          y={50}
        >
          <h2>About</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <AnimatedSection
            className="flex justify-center lg:justify-start"
            data-testid="about-photo"
            delay={0.1}
            y={40}
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden glass-card border-2 border-white/10 hover:border-white/20 transition-all duration-300 animate-float">
                <img 
                  src="/sahin-profile.jpg" 
                  alt="Sahin Sultan Profile Photo"
                  className="w-full h-full object-cover relative"
                />
                {/* Shining overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine -skew-x-12 transform translate-x-[-100%]"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </AnimatedSection>

          {/* About Text */}
          <div className="space-y-6">
            <AnimatedSection
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-paragraph-1"
              delay={0.2}
              y={40}
            >
              <p>
                Hi, I'm Sahin — a Full Stack Developer and AI Enthusiast who is passionate about building modern, user-friendly, and scalable web applications.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-paragraph-2"
              delay={0.3}
              y={40}
            >
              <p>
                I enjoy turning ideas into reality with clean code, thoughtful design, and the right mix of creativity and logic. Whether it's designing smooth front-end interfaces, developing robust back-end systems, or experimenting with AI tools, I'm always eager to learn and push my limits.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-paragraph-3"
              delay={0.4}
              y={40}
            >
              <p>
                When I'm not coding, I spend my time exploring new technologies, working on personal projects, and sharpening my skills to stay ahead in this fast-changing tech world.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
