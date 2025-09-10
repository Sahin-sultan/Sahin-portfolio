import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

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
          <h2>Let's Work Together</h2>
        </AnimatedSection>
        
        <AnimatedSection
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          data-testid="contact-description"
          delay={0.1}
          y={40}
        >
          <p>
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hello, I'd love to hear from you.
          </p>
        </AnimatedSection>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <AnimatedSection
            delay={0.2}
            y={30}
          >
            <a
              href="mailto:alex@example.com"
              className="inline-flex items-center space-x-2 text-xl font-medium text-foreground hover:text-muted-foreground transition-colors underline decoration-1 underline-offset-4"
              data-testid="contact-email"
            >
              <Mail className="w-5 h-5" />
              <span>alex@example.com</span>
            </a>
          </AnimatedSection>
          
          <AnimatedSection
            className="flex space-x-6"
            data-testid="social-links"
            delay={0.3}
            y={30}
          >
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="social-github"
            >
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="social-linkedin"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="social-twitter"
            >
              <span className="sr-only">Twitter</span>
              <Twitter className="w-6 h-6" />
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
