import { memo } from "react";

const SplineBackground = memo(function SplineBackground() {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
      {/* Spline 3D Background */}
      <iframe 
        src='https://my.spline.design/thebluemarble-RG0dJHZE7TfNVv7KZxRg3zjq/' 
        frameBorder='0' 
        width='100%' 
        height='100%'
        className="absolute inset-0 w-full h-full"
        title="3D Background"
        loading="lazy"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
});

export default SplineBackground;
