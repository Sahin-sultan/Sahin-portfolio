import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-light text-foreground mb-12"
          data-testid="about-title"
        >
          About
        </motion.h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="about-paragraph-1"
          >
            I'm a passionate designer and developer with over 5 years of experience creating digital products 
            that balance beautiful aesthetics with functional usability. My approach combines user-centered 
            design principles with modern development practices to deliver exceptional experiences.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
            data-testid="about-paragraph-2"
          >
            When I'm not designing or coding, you can find me exploring new technologies, contributing to 
            open source projects, or seeking inspiration from art, architecture, and nature. I believe 
            that great design comes from understanding people and solving real problems.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
