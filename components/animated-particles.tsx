"use client"

import { useState, useEffect } from "react"

export default function AnimatedParticles() {
  const [particles, setParticles] = useState<Array<{
    width: string;
    height: string;
    top: string;
    left: string;
    animation: string;
    animationDelay: string;
  }>>([])

  // Generate particles only on client-side to avoid hydration mismatch
  useEffect(() => {
    const particlesArray = Array.from({ length: 20 }, () => ({
      width: `${Math.random() * 10 + 5}px`,
      height: `${Math.random() * 10 + 5}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animation: `float ${Math.random() * 10 + 10}s linear infinite`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setParticles(particlesArray)
  }, [])

  return (
    <>
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white opacity-10"
          style={{
            width: particle.width,
            height: particle.height,
            top: particle.top,
            left: particle.left,
            animation: particle.animation,
            animationDelay: particle.animationDelay,
          }}
        ></div>
      ))}
      
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
      `}</style>
    </>
  )
} 