import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Calendar, ExternalLink, CheckCircle, Star } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  verified: boolean;
  skills: string[];
  description?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "E-sell Certificate",
    issuer: "SSU E-sell",
    date: "2025",
    credentialId: "E-SELL-2025-001",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757703431/E-cell_Sahin_eije7f.png",
    verified: true,
    skills: ["Communication", "Teamwork", "Strategic Thinking"],
    description: "Entrepreneurship and business development certification"
  },
  {
    id: 2,
    title: "Deloitte Business Certification",
    issuer: "Deloitte",
    date: "2025",
    credentialId: "DELOITTE-2025-045",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757743010/deloitte_certifications_page-0001_xl2jfg.jpg",
    verified: true,
    skills: ["Data Analysis", "Business Strategy", "Problem Solving"],
    description: "Professional business consulting and analysis certification"
  },
  {
    id: 3,
    title: "AWS Prompt Engineering",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-PE-2025-078",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757743378/AWS_Skill_Builder_Course_Completion_Certificate_page-0001_e94qmk.jpg",
    verified: true,
    skills: ["Cold Email Writing", "Multi-step Prompts", "AI Integration"],
    description: "Advanced AI prompt engineering and optimization techniques"
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    issuer: "IBM SkillsBuild",
    date: "2022",
    credentialId: "IBM-AI-2022-156",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757744515/Generatibe_AI_j6bhyn.png",
    verified: true,
    skills: ["AI Programming Basics", "Image Generation", "Machine Learning"],
    description: "Foundational knowledge in generative artificial intelligence"
  },
  {
    id: 5,
    title: "JavaScript Certification",
    issuer: "LetsUpgrade",
    date: "2023",
    credentialId: "LU-JS-2023-089",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757745822/javaScript_page-0001_djb3bx.jpg", // JavaScript-themed fallback image
    verified: true, 
    skills: ["JavaScript", "ES6+", "DOM Manipulation", "Async Programming"],
    description: "Comprehensive JavaScript programming certification covering modern ES6+ features, DOM manipulation, and asynchronous programming concepts"
  },
  {
    id: 6,
    title: "HTML & CSS Fundamentals",
    issuer: "LetsUpgrade",
    date: "2022",
    credentialId: "LU-WEB-2022-034",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1757745091/HTML_CSS_certificate_page-0001_gfxm9x.jpg",
    verified: true,
    skills: ["HTML5", "CSS3", "Responsive Design"],
    description: "Web development fundamentals and responsive design"
  }
];

export default function Certificates() {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300";
  };

  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-16 text-center"
          data-testid="certificates-title"
          delay={0}
          y={50}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Certifications</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <AnimatedSection
              key={certificate.id}
              className="glass-card rounded-xl overflow-hidden hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 group cursor-pointer hover:glass-card-light transform hover:-translate-y-2"
              data-testid={`certificate-${certificate.id}`}
              delay={index * 0.1}
              y={40}
            >
              {/* Certificate Image */}
              <div className="aspect-video bg-muted overflow-hidden relative">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  onError={handleImageError}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-testid={`certificate-image-${certificate.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {certificate.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                      Professional Certificate
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {certificate.verified && (
                      <span className="text-xs text-green-400 font-medium flex items-center space-x-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {certificate.title}
                </h3>
                
                <p className="text-sm text-blue-300 mb-3 font-medium">
                  {certificate.issuer}
                </p>
                
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-muted-foreground">Issued in {certificate.date}</span>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {certificate.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-xs bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20 group-hover:border-blue-400/40 group-hover:shadow-sm transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Credential ID */}
                {certificate.credentialId && (
                  <div className="text-xs text-muted-foreground mb-4">
                    <span className="font-medium">Credential ID:</span> {certificate.credentialId}
                  </div>
                )}
                
                {/* Certificate Description */}
                {certificate.description && (
                  <p className="text-xs text-muted-foreground mb-4 italic">
                    {certificate.description}
                  </p>
                )}
                
                {/* View Certificate Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open(certificate.image, '_blank')}
                  className="w-full bg-transparent border-2 border-blue-500 text-blue-400 py-2 px-4 rounded-md font-medium text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group-hover:shadow-lg"
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