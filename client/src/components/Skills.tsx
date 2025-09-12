import { motion } from "framer-motion";
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

const SkillBar = memo(({ skill, categoryIndex, skillIndex }: {
  skill: Skill;
  categoryIndex: number;
  skillIndex: number;
}) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <span className="text-sm text-foreground">{skill.name}</span>
      <span className="text-xs text-muted-foreground">{skill.level}%</span>
    </div>
    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ 
          duration: 1.2, 
          ease: "easeOut", 
          delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.5
        }}
        className="h-full bg-foreground rounded-full"
        data-testid={`skill-bar-${categoryIndex}-${skillIndex}`}
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
      ]
    },
    {
      title: "Design & UX",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "UI/UX Design", level: 92 },
        { name: "Figma", level: 95 },
        { name: "Adobe XD", level: 88 },
        { name: "Photoshop", level: 85 },
        // { name: "Illustrator", level: 80 },
      ]
    },
    {
      title: "Backend & Database",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        { name: "HTML5", level: 98 },
        { name: "CSS3", level: 95 },
        { name: "SASS/SCSS", level: 85 },
        { name: "Webpack", level: 78 },
        // { name: "Vite", level: 85 },
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
          <h2>Skills</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection
              key={category.title}
              className="glass-card rounded-lg p-6 hover:border-white/30 transition-all duration-300 group hover:glass-card-light"
              data-testid={`skill-category-${categoryIndex}`}
              delay={categoryIndex * 0.1}
              y={40}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-foreground group-hover:text-primary transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    categoryIndex={categoryIndex}
                    skillIndex={skillIndex}
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