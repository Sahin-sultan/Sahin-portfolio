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
          {/* Profile Photo with Flip Effect */}
          <AnimatedSection
            className="flex justify-center lg:justify-start"
            data-testid="about-photo"
            delay={0.1}
            y={40}
          >
            <div className="relative">
              <div className="flip-card w-80 h-80 rounded-2xl overflow-hidden border-2 border-white/10 hover:border-white/20 transition-all duration-300 animate-boat-float">
                <div className="flip-card-inner w-full h-full relative">
                  {/* Front Side */}
                  <div className="flip-card-front absolute inset-0 w-full h-full">
                    <img 
                      src="https://res.cloudinary.com/ddzreu2to/image/upload/v1757956374/Generated_Image_September_15_2025_-_1_43PM_livwcd.webp" 
                      alt="Sahin Sultan Profile Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Back Side */}
                  <div className="flip-card-back absolute inset-0 w-full h-full">
                    <img 
                      src="https://res.cloudinary.com/ddzreu2to/image/upload/v1757762173/Generated_Image_September_13_2025_-_2_19PM_ugqqqq.png" 
                      alt="Sahin Sultan Alternative Photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
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
