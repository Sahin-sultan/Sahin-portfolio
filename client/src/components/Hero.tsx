import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-foreground mb-6"
          data-testid="hero-name"
        >
          Alex Johnson
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground font-light mb-12"
          data-testid="hero-subtitle"
        >
          Designer & Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          data-testid="hero-description"
        >
          Creating exceptional digital experiences through thoughtful design and clean code. 
          Specializing in modern web applications and user-centered design.
        </motion.p>
      </div>
    </section>
  );
}
