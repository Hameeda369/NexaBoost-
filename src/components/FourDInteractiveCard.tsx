import React, { useRef, useState } from 'react';

interface FourDInteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  depthIntensity?: number;
  glowColor?: string;
  onClick?: () => void;
}

export const FourDInteractiveCard: React.FC<FourDInteractiveCardProps> = ({
  children,
  className = '',
  depthIntensity = 15,
  glowColor = 'rgba(168, 85, 247, 0.3)',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState<string>('');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -depthIntensity;
    const rotateY = ((x - centerX) / centerX) * depthIntensity;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(
        2
      )}deg) translateZ(12px)`
    );

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6
    });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transformStyle,
        transition: transformStyle ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
      }}
      className={`relative transform-gpu will-change-transform ${className}`}
    >
      {/* Dynamic Specular 4D Light Sheen Glare */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-30 transition-opacity duration-300 overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor} 0%, transparent 60%)`,
          opacity: glarePosition.opacity
        }}
      />
      {children}
    </div>
  );
};
