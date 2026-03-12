'use client';

import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container, Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export function SparklesCore({
  id,
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  id: string;
  background: string;
  minSize: number;
  maxSize: number;
  particleDensity: number;
  className?: string;
  particleColor?: string;
}) {
  const [init, setInit] = useState(false);

  // This is the "Engine Initialization" required in v3
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log('Particles container loaded', container);
  };

  if (!init) return <div className={className} style={{ background }} />;

  return (
    <Particles
      id={id}
      className={className}
      particlesLoaded={particlesLoaded}
      options={{
        background: { color: { value: background || 'transparent' } },
        fpsLimit: 120,
        particles: {
          color: { value: particleColor || '#FFFFFF' },
          move: {
            enable: true,
            speed: { min: 0.1, max: 1 },
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          number: {
            density: { enable: true, width: 800, height: 800 },
            value: particleDensity || 100,
          },
          opacity: {
            value: { min: 0.1, max: 1 },
            animation: { enable: true, speed: 1, sync: false },
          },
          shape: { type: 'circle' },
          size: { value: { min: minSize || 1, max: maxSize || 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}


