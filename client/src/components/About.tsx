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
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>About</h2>
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
               I'm <span style={{ color: '#60a5fa' }}>Sahin Sultan</span>, a final-year BCA student at Seacom Skills University with a strong focus on web development and artificial intelligence.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-paragraph-2"
              delay={0.3}
              y={40}
            >
              <p>
               I've gained practical exposure through internships with <span style={{ color: '#60a5fa' }}>IBM SkillsBuild</span>, where I contributed to projects exploring emerging technologies. A key milestone was founding SemesterHub, a collaborative academic note-sharing platform that simplifies resource-sharing for students and sharpened my problem-solving skills.
              </p>
            </AnimatedSection>
            
            <AnimatedSection
              className="text-lg text-muted-foreground leading-relaxed"
              data-testid="about-paragraph-3"
              delay={0.4}
              y={40}
            >
              <p>
               Recently, I developed <span style={{ color: '#60a5fa' }}>Pay Predict</span>, a salary prediction website designed to help students and professionals estimate salary ranges based on skills, industry trends, and market data. This project strengthened my ability to merge AI with practical, real-world applications.

As I approach graduation, I'm excited to start my career as a fresher—contributing to impactful projects and creating intelligent, user-friendly applications that connect technology with meaningful solutions.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
