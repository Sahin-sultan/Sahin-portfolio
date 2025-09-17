import { memo, useMemo } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Code, Palette, Database, Globe } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const SkillBar = memo(({ skill }: { skill: Skill }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground font-semibold">{skill.level}%</span>
    </div>
    <div className="w-full bg-white/10 rounded-full h-2">
      <div
        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      />
    </div>
  </div>
));

SkillBar.displayName = "SkillBar";

export default function Skills() {
  const skillCategories: SkillCategory[] = useMemo(() => [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 }
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 82 },
        { name: "SQL", level: 80 },
        { name: "REST APIs", level: 90 },
        { name: "Firebase", level: 78 }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Streamlit", level: 88 },
        { name: "Python Libraries", level: 82 },
        { name: "AI Integration", level: 75 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 92 },
        { name: "Figma", level: 95 },
        { name: "Git & GitHub", level: 88 },
        { name: "Vercel", level: 85 },
        { name: "Responsive Design", level: 93 }
      ]
    }
  ], []);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="skills-title"
          delay={0}
          y={50}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Skills</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm hover:border-white/20 transition-colors duration-300"
              data-testid={`skill-category-${categoryIndex}`}
              delay={categoryIndex * 0.1}
              y={30}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-400">
                  {category.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                  />
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}