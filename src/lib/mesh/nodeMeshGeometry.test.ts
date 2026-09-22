import { describe, expect, it } from 'vitest';

import { computeLinks, createPoints, stepPoints } from '@/lib/mesh/nodeMeshGeometry';

describe('nodeMeshGeometry', () => {
  it('creates the requested number of points inside the unit square', () => {
    const points = createPoints(60);
    expect(points).toHaveLength(60);
    for (const p of points) {
      expect(Math.abs(p.x)).toBeLessThanOrEqual(1);
      expect(Math.abs(p.y)).toBeLessThanOrEqual(1);
    }
  });

  it('keeps points inside the unit square after many steps', () => {
    const points = createPoints(20, () => 0.999);
    for (let i = 0; i < 5000; i++) stepPoints(points, 1);
    for (const p of points) {
      expect(Math.abs(p.x)).toBeLessThanOrEqual(1);
      expect(Math.abs(p.y)).toBeLessThanOrEqual(1);
    }
  });

  it('links only points closer than the threshold', () => {
    const points = [
      { x: 0, y: 0, vx: 0, vy: 0 },
      { x: 0.1, y: 0, vx: 0, vy: 0 },
      { x: 0.9, y: 0.9, vx: 0, vy: 0 },
    ];
    expect(computeLinks(points, 0.2)).toEqual([[0, 1]]);
  });
});
