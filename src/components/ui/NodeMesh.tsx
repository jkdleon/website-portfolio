'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

import { computeLinks, createPoints, stepPoints } from '@/lib/mesh/nodeMeshGeometry';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

const POINT_COUNT = 60;
const LINK_THRESHOLD = 0.22;
const POINTER_RADIUS = 0.35;
const MAX_LINKS = (POINT_COUNT * (POINT_COUNT - 1)) / 2;
const ACCENT = new THREE.Color('#38bdf8');

export function NodeMesh({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') ?? probe.getContext('webgl'))) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -1, 1);

    const points = createPoints(POINT_COUNT);
    const pointPositions = new Float32Array(POINT_COUNT * 3);
    const pointColors = new Float32Array(POINT_COUNT * 3);
    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute('position', new THREE.BufferAttribute(pointPositions, 3));
    pointGeometry.setAttribute('color', new THREE.BufferAttribute(pointColors, 3));
    const pointMaterial = new THREE.PointsMaterial({ size: 2.5, sizeAttenuation: false, vertexColors: true, transparent: true });
    scene.add(new THREE.Points(pointGeometry, pointMaterial));

    const linkPositions = new Float32Array(MAX_LINKS * 2 * 3);
    const linkGeometry = new THREE.BufferGeometry();
    linkGeometry.setAttribute('position', new THREE.BufferAttribute(linkPositions, 3));
    linkGeometry.setDrawRange(0, 0);
    const linkMaterial = new THREE.LineBasicMaterial({ color: ACCENT, transparent: true, opacity: 0.12 });
    scene.add(new THREE.LineSegments(linkGeometry, linkMaterial));

    const pointer = { x: 10, y: 10 };
    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    const onPointerLeave = () => { pointer.x = 10; pointer.y = 10; };
    window.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerleave', onPointerLeave);

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight, false);
    };
    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    const draw = (dt: number) => {
      stepPoints(points, dt);
      for (let i = 0; i < POINT_COUNT; i++) {
        const p = points[i];
        pointPositions[i * 3] = p.x;
        pointPositions[i * 3 + 1] = p.y;
        const d = Math.hypot(p.x - pointer.x, p.y - pointer.y);
        const glow = d < POINTER_RADIUS ? 1 - d / POINTER_RADIUS : 0;
        const b = 0.25 + 0.75 * glow;
        pointColors[i * 3] = ACCENT.r * b;
        pointColors[i * 3 + 1] = ACCENT.g * b;
        pointColors[i * 3 + 2] = ACCENT.b * b;
      }
      const links = computeLinks(points, LINK_THRESHOLD);
      links.forEach(([a, b], k) => {
        linkPositions[k * 6] = points[a].x;
        linkPositions[k * 6 + 1] = points[a].y;
        linkPositions[k * 6 + 3] = points[b].x;
        linkPositions[k * 6 + 4] = points[b].y;
      });
      linkGeometry.setDrawRange(0, links.length * 2);
      pointGeometry.attributes.position.needsUpdate = true;
      pointGeometry.attributes.color.needsUpdate = true;
      linkGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    let frame = 0;
    let last = performance.now();
    const loop = (now: number) => {
      draw((now - last) / 16.67);
      last = now;
      frame = requestAnimationFrame(loop);
    };

    // Reduced motion: one static frame, no loop.
    if (reduced) draw(0);
    else frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerleave', onPointerLeave);
      pointGeometry.dispose();
      linkGeometry.dispose();
      pointMaterial.dispose();
      linkMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [reduced]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] ${className}`}
    />
  );
}
