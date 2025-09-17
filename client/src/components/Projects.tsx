import { useState, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { ExternalLink, Github, Play } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  liveUrl: string;
  githubUrl: string;
  technologies?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Pay Predict",
    description: "Advanced machine learning salary predictor that analyzes skills, experience, and industry trends to provide accurate compensation estimates. Built with Python, Streamlit, and deployed for real-time predictions to help professionals make informed career decisions.",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,c_scale/v1757746493/Screenshot_2025-09-13_122417_oggb8x.webp",
    videoUrl: "https://res.cloudinary.com/ddzreu2to/video/upload/v1758084983/Screen_Recording_2025-09-13_122322_fiigwt.webm",
    liveUrl: "https://pay-predictor.streamlit.app/",
    githubUrl: "https://github.com/Sahin-sultan/pay-predictor",
    technologies: ["Python", "Streamlit", "Machine Learning", "Data Science"]
  },
  {
    id: 2,
    title: "Semester Hub",
    description: "Semester Hub A secure academic note-sharing platform built with React, Supabase, and Tailwind CSS. Features authentication-protected downloads, responsive design with glass morphism UI, comprehensive admin moderation system, and real-time search functionality for collaborative student learning",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,c_scale/v1757761548/Screenshot_2025-09-13_163251_xmdb99.webp",
    videoUrl: "https://res.cloudinary.com/ddzreu2to/video/upload/v1758086068/Screen_Recording_2025-09-13_163816_w0c2mm.webm",
    liveUrl: "https://semesterhub.vercel.app/",
    githubUrl: "#",
    technologies: ["React", "Firebase", "TypeScript"]
  },
  // {
  //   id: 3,
  //   title: "Creative Portfolio",
  //   description: "Personal portfolio website for a creative director featuring smooth animations, dynamic image galleries, and responsive typography. Optimized for performance and accessibility.",
  //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   technologies: ["Next.js", "Framer Motion", "GSAP"]
  // },
  // {
  //   id: 4,
  //   title: "Analytics Dashboard",
  //   description: "Comprehensive analytics dashboard with interactive charts, real-time data visualization, and custom reporting features. Built with D3.js and React for seamless data exploration.",
  //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  //   videoUrl: "https://sample-videos.com/zip/10/mp4/720/SampleVideo_720x480_2mb.mp4",
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   technologies: ["React", "D3.js", "Node.js", "MongoDB"]
  // }
];

// Project Card Component with Video Hover
interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && project.videoUrl) {
      videoRef.current.currentTime = 0; // Reset video to start
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions gracefully
        console.log("Video autoplay was prevented");
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <AnimatedSection
      key={project.id}
      className="group"
      data-testid={`project-${project.id}`}
      delay={index * 0.1}
      y={40}
    >
      <div 
        className="aspect-video glass-card-subtle rounded-xl mb-6 overflow-hidden relative cursor-pointer transform hover:scale-[1.02] transition-all duration-500"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovering && project.videoUrl ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
          }`}
          data-testid={`project-image-${project.id}`}
          loading="lazy"
          decoding="async"
          style={{ willChange: 'transform, opacity' }}
        />

        {/* Video Preview */}
        {project.videoUrl && (
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
              isHovering ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Title Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {project.title}
            </h3>
            {project.technologies && (
              <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Play Icon for Video Preview */}
        {project.videoUrl && !isHovering && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
        )}
      </div>
      
      <h3 
        className="text-2xl font-medium text-foreground mb-3 group-hover:text-blue-400 transition-colors duration-300"
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
          className="inline-flex items-center space-x-2 text-sm font-medium bg-transparent border-2 border-blue-500 text-blue-400 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300"
          data-testid={`project-live-${project.id}`}
        >
          <ExternalLink className="w-4 h-4" />
          <span>View Live</span>
        </a>
        <a
          href={project.githubUrl}
          className="inline-flex items-center space-x-2 text-sm font-medium bg-transparent border-2 border-gray-500 text-gray-400 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-all duration-300"
          data-testid={`project-github-${project.id}`}
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </a>
      </div>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="projects-title"
          delay={0}
          y={50}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Projects</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
