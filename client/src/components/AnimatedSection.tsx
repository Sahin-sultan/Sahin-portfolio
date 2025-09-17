import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const isMobileDevice = window.innerWidth <= 768 || 
                             /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simplified animation settings for mobile
  const mobileSettings = {
    duration: 0.2,
    delay: Math.min(delay, 0.1), // Cap delay at 0.1s on mobile
    y: Math.min(y, 15), // Reduce movement on mobile
    ease: "easeOut" as const
  };

  const desktopSettings = {
    duration,
    delay,
    y,
    ease: "easeOut" as const
  };

  const settings = isMobile ? mobileSettings : desktopSettings;

  return (
    <motion.div
      className={className}
      initial={{ 
        opacity: 0, 
        y: settings.y 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0 
      }}
      viewport={{ 
        once: true, 
        amount: isMobile ? 0.05 : 0.1 // Trigger earlier on mobile
      }}
      transition={{ 
        duration: settings.duration,
        delay: settings.delay,
        ease: settings.ease
      }}
    >
      {children}
    </motion.div>
  );
}