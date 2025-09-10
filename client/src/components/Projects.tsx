import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce platform built with Next.js and Stripe integration. Features include product management, secure payments, and responsive design for optimal mobile experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface. Built with React and Firebase.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Creative Portfolio",
    description: "Personal portfolio website for a creative director featuring smooth animations, dynamic image galleries, and responsive typography. Optimized for performance and accessibility.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Comprehensive analytics dashboard with interactive charts, real-time data visualization, and custom reporting features. Built with D3.js and React for seamless data exploration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="projects-title"
        >
          Selected Work
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              className="group"
              data-testid={`project-${project.id}`}
            >
              <div className="aspect-video glass-card-subtle rounded-lg mb-6 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid={`project-image-${project.id}`}
                />
              </div>
              
              <h3 
                className="text-2xl font-medium text-foreground mb-3"
                data-testid={`project-title-${project.id}`}
              >
                {project.title}
              </h3>
              
              <p 
                className="text-muted-foreground mb-4 leading-relaxed"
                data-testid={`project-description-${project.id}`}
              >
                {project.description}
              </p>
              
              <div className="flex space-x-4">
                <a
                  href={project.liveUrl}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline decoration-1 underline-offset-4"
                  data-testid={`project-live-${project.id}`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live</span>
                </a>
                <a
                  href={project.githubUrl}
                  className="inline-flex items-center space-x-2 text-sm font-medium text-foreground hover:text-muted-foreground transition-colors underline decoration-1 underline-offset-4"
                  data-testid={`project-github-${project.id}`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
