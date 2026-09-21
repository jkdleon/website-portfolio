export interface MeshPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const MAX_SPEED = 0.0015;

export function createPoints(count: number, random: () => number = Math.random): MeshPoint[] {
  const points: MeshPoint[] = [];
  for (let i = 0; i < count; i++) {
    points.push({
      x: random() * 2 - 1,
      y: random() * 2 - 1,
      vx: (random() * 2 - 1) * MAX_SPEED,
      vy: (random() * 2 - 1) * MAX_SPEED,
    });
  }
  return points;
}

export function stepPoints(points: MeshPoint[], dt: number): void {
  for (const p of points) {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    if (p.x > 1) { p.x = 1; p.vx = -p.vx; }
    if (p.x < -1) { p.x = -1; p.vx = -p.vx; }
    if (p.y > 1) { p.y = 1; p.vy = -p.vy; }
    if (p.y < -1) { p.y = -1; p.vy = -p.vy; }
  }
}

export function computeLinks(points: MeshPoint[], threshold: number): Array<[number, number]> {
  const links: Array<[number, number]> = [];
  const limit = threshold * threshold;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dx = points[i].x - points[j].x;
      const dy = points[i].y - points[j].y;
      if (dx * dx + dy * dy < limit) links.push([i, j]);
    }
  }
  return links;
}
