import { memo, useMemo } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface Stat {
  value: string;
  label: string;
}

const StatCard = memo(({ value, label }: Stat) => (
  <div 
    className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300"
    role="group"
    aria-label={`${value} ${label}`}
  >
    <div className="text-4xl md:text-5xl font-light text-foreground mb-2" aria-label="Statistic value">
      {value}
    </div>
    <div className="text-sm text-muted-foreground" aria-label="Statistic description">
      {label}
    </div>
  </div>
));

StatCard.displayName = "StatCard";

export default function Hero() {
  const stats: Stat[] = useMemo(() => [
    { value: "50+", label: "happy clients" },
    { value: "6", label: "years experience" },
    { value: "100%", label: "client satisfaction" }
  ], []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-tight"
          data-testid="hero-title"
          delay={0}
          y={60}
        >
          <h1>Sahin</h1>
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
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
