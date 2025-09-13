import AnimatedSection from "@/components/AnimatedSection";
import { Github, Linkedin, Twitter, Mail, Instagram } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection
          className="text-4xl md:text-5xl font-light text-foreground mb-12"
          data-testid="contact-title"
          delay={0}
          y={50}
        >
          <h2 style={{ fontFamily: 'DM Serif Text, serif' }}>Let's Work Together</h2>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="contact-description"
          delay={0.1}
          y={40}
        >
          <p style={{ fontFamily: 'Crimson Text, serif', fontSize: '1.25rem', fontStyle: 'italic', fontWeight: '400' }}>
            "I'm open to new opportunities and creative projects. Feel free to reach out—whether it's a question, collaboration, or just to say hi, I'd be happy to connect."
          </p>
        </AnimatedSection>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <AnimatedSection
            delay={0.2}
            y={30}
          >
            <a
              href="mailto:sahinsultan095@gmail.com"
              className="inline-flex items-center space-x-2 text-xl font-medium text-foreground hover:text-muted-foreground transition-colors underline decoration-1 underline-offset-4"
              data-testid="contact-email"
            >
              <Mail className="w-5 h-5" />
              <span>sahinsultan095@gmail.com</span>
            </a>
          </AnimatedSection>
          
          <AnimatedSection
            className="flex space-x-6"
            data-testid="social-links"
            delay={0.3}
            y={30}
          >
            <a
              href="https://github.com/Sahin-sultan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110"
              data-testid="social-github"
              aria-label="Visit my GitHub profile"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sahin-sultan-917b50331"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 transition-colors transform hover:scale-110"
              data-testid="social-linkedin"
              aria-label="Visit my LinkedIn profile"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/sahin_sultan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-400 transition-colors transform hover:scale-110"
              data-testid="social-twitter"
              aria-label="Visit my Twitter profile"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/sahin_edition/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-pink-500 transition-colors transform hover:scale-110"
              data-testid="social-instagram"
              aria-label="Visit my Instagram profile"
            >
              <span className="sr-only">Instagram</span>
              <Instagram className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
