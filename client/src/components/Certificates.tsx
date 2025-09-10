import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Calendar, ExternalLink, CheckCircle } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SA-2023-001",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["Cloud Architecture", "AWS Services", "Scalability"]
  },
  {
    id: 2,
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2022",
    credentialId: "GOOG-UX-2022-045",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["User Research", "Prototyping", "Design Thinking"]
  },
  {
    id: 3,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    date: "2023",
    credentialId: "META-FE-2023-078",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["React", "JavaScript", "Responsive Design"]
  },
  {
    id: 4,
    title: "Adobe Certified Expert (ACE)",
    issuer: "Adobe",
    date: "2022",
    credentialId: "ADOBE-ACE-2022-156",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["Creative Suite", "Digital Design", "Brand Identity"]
  },
  {
    id: 5,
    title: "Figma Professional Certification",
    issuer: "Figma",
    date: "2023",
    credentialId: "FIGMA-PRO-2023-089",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["Interface Design", "Prototyping", "Design Systems"]
  },
  {
    id: 6,
    title: "Certified Scrum Master (CSM)",
    issuer: "Scrum Alliance",
    date: "2022",
    credentialId: "CSM-2022-034",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    verified: true,
    skills: ["Agile Methodology", "Team Leadership", "Project Management"]
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="certificates-title"
          delay={0}
          y={50}
        >
          <h2>Certifications & Awards</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <AnimatedSection
              key={certificate.id}
              className="glass-card rounded-lg overflow-hidden hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer hover:glass-card-light"
              data-testid={`certificate-${certificate.id}`}
              delay={index * 0.1}
              y={40}
            >
              {/* Certificate Image */}
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid={`certificate-image-${certificate.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {certificate.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-foreground group-hover:text-primary transition-colors duration-300" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide">
                      Certificate
                    </span>
                  </div>
                  {certificate.verified && (
                    <span className="text-xs text-green-400 font-medium">Verified</span>
                  )}
                </div>
                
                <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {certificate.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {certificate.issuer}
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{certificate.date}</span>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full group-hover:bg-foreground/10 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Credential ID */}
                <div className="text-xs text-muted-foreground mb-4">
                  ID: {certificate.credentialId}
                </div>
                
                {/* View Certificate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-foreground text-background py-2 px-4 rounded-md font-medium text-sm hover:bg-foreground/90 transition-colors duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
                  data-testid={`certificate-view-${certificate.id}`}
                >
                  <span>View Certificate</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}