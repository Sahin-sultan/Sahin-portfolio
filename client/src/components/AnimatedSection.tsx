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
  duration = 0.4,
  y = 30 
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
        once: true, 
        amount: 0.1 
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