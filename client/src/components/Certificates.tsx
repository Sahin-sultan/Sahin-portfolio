import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Calendar, ExternalLink, CheckCircle, Star } from "lucide-react";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  verifyUrl: string;
}

const certificates = [
  {
    id: 1,
    title: "E-Cell Leadership Certificate",
    issuer: "Entrepreneurship Cell",
    date: "2024",
    description: "Leadership and entrepreneurship development program",
    image: "https://r    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757703431/E-cell_Sahin_eije7f.png",
    verifyUrl: "#"
  },
  {
    id: 2,
    title: "Deloitte Technology Consulting",
    issuer: "Deloitte",
    date: "2024",
    description: "Technology consulting and digital transformation certification",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757743010/deloitte_certifications_page-0001_xl2jfg.jpg",
    verifyUrl: "#"
  },
  {
    id: 3,
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Fundamental cloud computing concepts and AWS services",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757743378/AWS_Skill_Builder_Course_Completion_Certificate_page-0001_e94qmk.jpg",
    verifyUrl: "#"
  },
  {
    id: 4,
    title: "Generative AI Fundamentals",
    issuer: "Industry Certification",
    date: "2024",
    description: "Advanced concepts in artificial intelligence and machine learning",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757744515/Generatibe_AI_j6bhyn.png",
    verifyUrl: "#"
  },
  {
    id: 5,
    title: "JavaScript Programming",
    issuer: "Programming Institute",
    date: "2023",
    description: "Advanced JavaScript programming and modern ES6+ features",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757745822/javaScript_page-0001_djb3bx.jpg", // JavaScript-themed fallback image
    verifyUrl: "#"
  },
  {
    id: 6,
    title: "HTML & CSS Mastery",
    issuer: "Web Development Institute",
    date: "2023",
    description: "Comprehensive web development fundamentals and responsive design",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_scale/v1757745091/HTML_CSS_certificate_page-0001_gfxm9x.jpg",
cEvent<HTMLImageElement>) => {
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
                  loading="lazy"
                  decoding="async"
                  style={{ willChange: 'transform, opacity' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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