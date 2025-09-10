import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Database, Globe, Smartphone, Figma } from "lucide-react";

const skillCategories = [
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
      { name: "Illustrator", level: 80 },
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
      { name: "Vite", level: 85 },
    ]
  },
  {
    title: "Mobile & Tools",
    icon: <Smartphone className="w-6 h-6" />,
    skills: [
      { name: "React Native", level: 80 },
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 88 },
    ]
  },
  {
    title: "Design Tools",
    icon: <Figma className="w-6 h-6" />,
    skills: [
      { name: "Figma", level: 95 },
      { name: "Sketch", level: 85 },
      { name: "InVision", level: 80 },
      { name: "Principle", level: 75 },
      { name: "Framer", level: 82 },
    ]
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="skills-title"
        >
          Skills & Expertise
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-all duration-300 group"
              data-testid={`skill-category-${categoryIndex}`}
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
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.2, 
                          ease: "easeOut", 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 
                        }}
                        className="h-full bg-foreground rounded-full"
                        data-testid={`skill-bar-${categoryIndex}-${skillIndex}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}