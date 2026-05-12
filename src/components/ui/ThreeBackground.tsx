'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const COLS = 40;
const ROWS = 30;
const COUNT = COLS * ROWS;
const ANIM_SPEED = 0.006;

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const testCanvas = document.createElement('canvas');
    const hasWebGL = Boolean(
      testCanvas.getContext('webgl2') ?? testCanvas.getContext('webgl')
    );
    if (!hasWebGL) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

    const positions = new Float32Array(COUNT * 3);
    const phases = new Float32Array(COUNT);
    const colorBuf = new Float32Array(COUNT * 3);

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const i = row * COLS + col;
        positions[i * 3]     = (col / (COLS - 1)) * 2 - 1;
        positions[i * 3 + 1] = (row / (ROWS - 1)) * 2 - 1;
        positions[i * 3 + 2] = 0;
        phases[i] = Math.random() * Math.PI * 2;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const colorAttr = new THREE.BufferAttribute(colorBuf, 3);
    colorAttr.usage = THREE.DynamicDrawUsage;
    geometry.setAttribute('color', colorAttr);

    const material = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 1,
    });

    scene.add(new THREE.Points(geometry, material));

    let animId: number | undefined;
    let t = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      t += ANIM_SPEED;
      for (let i = 0; i < COUNT; i++) {
        const b = 0.08 + 0.42 * (0.5 + 0.5 * Math.sin(t + phases[i]));
        colorBuf[i * 3]     = 0.22 * b;
        colorBuf[i * 3 + 1] = 0.74 * b;
        colorBuf[i * 3 + 2] = 0.97 * b;
      }
      geometry.attributes.color.needsUpdate = true;
      renderer.render(scene, camera);
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      for (let i = 0; i < COUNT; i++) {
        const b = 0.08 + 0.42 * (0.5 + 0.5 * Math.sin(phases[i]));
        colorBuf[i * 3]     = 0.22 * b;
        colorBuf[i * 3 + 1] = 0.74 * b;
        colorBuf[i * 3 + 2] = 0.97 * b;
      }
      geometry.attributes.color.needsUpdate = true;
      renderer.render(scene, camera);
    } else {
      animate();
    }

    function onResize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    return () => {
      if (animId !== undefined) cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
