import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface GlowingSpot {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
}

export default function AnimatedBackground() {
  const [spots, setSpots] = useState<GlowingSpot[]>([]);

  useEffect(() => {
    // Generate random glowing spots
    const generateSpots = () => {
      const newSpots: GlowingSpot[] = [];
      const colors = [
        "rgba(147, 51, 234, 0.3)", // Purple
        "rgba(59, 130, 246, 0.3)", // Blue
        "rgba(168, 85, 247, 0.3)", // Violet
        "rgba(99, 102, 241, 0.3)", // Indigo
        "rgba(79, 70, 229, 0.3)", // Blue-indigo
      ];

      for (let i = 0; i < 6; i++) {
        newSpots.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 400 + 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 20 + 15, // 15-35 seconds
        });
      }
      setSpots(newSpots);
    };

    generateSpots();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated glowing spots */}
      {spots.map((spot) => (
        <motion.div
          key={spot.id}
          className="absolute rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${spot.color} 0%, transparent 70%)`,
            width: `${spot.size}px`,
            height: `${spot.size}px`,
          }}
          initial={{
            x: `${spot.x}vw`,
            y: `${spot.y}vh`,
            scale: 0.5,
          }}
          animate={{
            x: [
              `${spot.x}vw`,
              `${(spot.x + 20) % 100}vw`,
              `${(spot.x - 10 + 100) % 100}vw`,
              `${spot.x}vw`,
            ],
            y: [
              `${spot.y}vh`,
              `${(spot.y - 15 + 100) % 100}vh`,
              `${(spot.y + 25) % 100}vh`,
              `${spot.y}vh`,
            ],
            scale: [0.5, 1, 0.8, 0.5],
            opacity: [0.3, 0.6, 0.4, 0.3],
          }}
          transition={{
            duration: spot.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Additional subtle radial gradients for depth */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-purple-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-blue-500/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-violet-500/5 via-transparent to-transparent blur-3xl" />
    </div>
  );
}