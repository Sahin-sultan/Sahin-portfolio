import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function AnimatedSection({ 
  children, 
  className = "", 
  delay = 0, 
  duration = 0.6,
  y = 50 
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: y 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      viewport={{ 
        once: false, 
        amount: 0.2 
      }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}