import { useEffect, useState } from 'react';

interface UseOptimizedImagesReturn {
  isLowEndDevice: boolean;
  imageQuality: 'low' | 'medium' | 'high';
  preloadCriticalImages: () => void;
}

export function useOptimizedImages(): UseOptimizedImagesReturn {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [imageQuality, setImageQuality] = useState<'low' | 'medium' | 'high'>('high');

  useEffect(() => {
    // Detect device capabilities
    const detectDeviceCapabilities = () => {
      const isMobile = window.innerWidth <= 768;
      const isSlowConnection = (navigator as any).connection?.effectiveType === 'slow-2g' || 
                              (navigator as any).connection?.effectiveType === '2g';
      const hasLimitedMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      
      const isLowEnd = isMobile || isSlowConnection || hasLimitedMemory;
      setIsLowEndDevice(isLowEnd);
      
      if (isLowEnd) {
        setImageQuality('low');
      } else if (isMobile) {
        setImageQuality('medium');
      } else {
        setImageQuality('high');
      }
    };

    detectDeviceCapabilities();
    window.addEventListener('resize', detectDeviceCapabilities);
    
    return () => window.removeEventListener('resize', detectDeviceCapabilities);
  }, []);

  const preloadCriticalImages = () => {
    // Preload critical images with appropriate quality
    const criticalImages = [
      'https://res.cloudinary.com/ddzreu2to/image/upload/f_auto,q_auto,w_400,c_fill,g_face/v1757956374/Generated_Image_September_15_2025_-_1_43PM_livwcd.webp'
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  };

  return {
    isLowEndDevice,
    imageQuality,
    preloadCriticalImages
  };
}