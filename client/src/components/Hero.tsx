import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 leading-tight"
          data-testid="hero-title"
        >
          Your ultimate<br />design partner.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-16"
          data-testid="hero-description"
        >
          With years of experience in web design, I live and breathe good design and value the details that matter. Say goodbye to the stressful back and forth with developers who don't have an eye for design and find someone who has the skills, experience, and enthusiasm to bring your vision to life.
        </motion.p>
        
        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          data-testid="hero-stats"
        >
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">50+</div>
            <div className="text-sm text-muted-foreground">happy clients</div>
          </div>
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">6</div>
            <div className="text-sm text-muted-foreground">years experience</div>
          </div>
          <div className="glass-card rounded-lg p-8 text-center hover:glass-card-light transition-all duration-300">
            <div className="text-4xl md:text-5xl font-light text-foreground mb-2">100%</div>
            <div className="text-sm text-muted-foreground">client satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
