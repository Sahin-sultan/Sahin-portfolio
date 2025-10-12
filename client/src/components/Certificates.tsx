import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Award, Calendar, ExternalLink } from "lucide-react";

// Custom hook for lazy loading with intersection observer
const useLazyLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return { isLoaded, imgRef };
};

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
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/v1758083319/E-cell_Sahin_vsc2ok.webp",
    verifyUrl: "#"
  },
  {
    id: 2,
    title: "Deloitte Technology Consulting",
    issuer: "Deloitte",
    date: "2024",
    description: "Technology consulting and digital transformation certification",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/v1757743010/deloitte_certifications_page-0001_xl2jfg.webp",
    verifyUrl: "#"
  },
  {
    id: 3,
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "Fundamental cloud computing concepts and AWS services",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/v1757743378/AWS_Skill_Builder_Course_Completion_Certificate_page-0001_e94qmk.webp",
    verifyUrl: "#"
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
    issuer: "Google Cloud & SimpliLearn",
    date: "2025",
    description: "Professional course on generative AI fundamentals and applications",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/v1760249010/generative_ai_tjdz7r.webp",
    verifyUrl: "#"
  },
  {
    id: 5,
    title: "JavaScript Programming",
    issuer: "Programming Institute",
    date: "2023",
    description: "Advanced JavaScript programming and modern ES6+ features",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/v1757745822/javaScript_page-0001_djb3bx.webp",
    verifyUrl: "#"
  },
  {
    id: 6,
    title: "HTML & CSS Mastery",
    issuer: "Web Development Institute",
    date: "2023",
    description: "Comprehensive web development fundamentals and responsive design",
    image: "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/v1757745091/HTML_CSS_certificate_page-0001_gfxm9x.webp",
    verifyUrl: "#"
  }
];

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.src = "https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_600,h_400,c_fill/placeholder-certificate.webp";
  e.currentTarget.alt = "Certificate placeholder";
};

// Optimized Certificate Card Component
const CertificateCard = ({ certificate, index }: { certificate: Certificate; index: number }) => {
  const { isLoaded, imgRef } = useLazyLoad();

  return (
    <AnimatedSection
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 group cursor-pointer hover:scale-105"
      data-testid={`certificate-${certificate.id}`}
      delay={index * 0.1}
      y={20}
    >
      {/* Certificate Image */}
      <div className="aspect-video bg-gray-900/20 overflow-hidden relative">
        <img
          ref={imgRef}
          src={isLoaded ? certificate.image : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzczNzM3Ii8+PC9zdmc+'}
          alt={`${certificate.title} certificate`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ease-out"
          data-testid={`certificate-image-${certificate.id}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ 
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Certificate Content */}
      <div className="p-4 md:p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors duration-200" />
            <span className="text-xs text-gray-400 uppercase tracking-wide font-medium">
              Certificate
            </span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
          {certificate.title}
        </h3>
        
        <p className="text-sm text-blue-300 mb-3 font-medium">
          {certificate.issuer}
        </p>
        
        <div className="flex items-center space-x-2 mb-3">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-400">Issued in {certificate.date}</span>
        </div>
        
        {/* Certificate Description */}
        {certificate.description && (
          <p className="text-xs text-gray-400 mb-4 line-clamp-2">
            {certificate.description}
          </p>
        )}
        
        {/* View Certificate Button */}
        <button
          onClick={() => window.open(certificate.image, '_blank')}
          className="w-full bg-transparent border-2 border-blue-500 text-blue-400 py-2 px-4 rounded-md font-medium text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 hover:shadow-lg active:scale-95"
          data-testid={`certificate-view-${certificate.id}`}
        >
          <span>View Certificate</span>
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </AnimatedSection>
  );
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection
          className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-12 md:mb-16 text-center"
          data-testid="certificates-title"
          delay={0}
          y={30}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Certifications</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
