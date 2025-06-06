"use client";

import { useState, useEffect } from "react";

export default function ClientParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array(20).fill().map(() => ({
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`, 
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      delay: `${Math.random() * 5}s`
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
            animation: p.animation,
            animationDelay: p.delay
          }}
        />
      ))}
    </div>
  );
} 