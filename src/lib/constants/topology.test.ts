import { describe, expect, it } from 'vitest';

import { TOPOLOGY_VIEWBOX, topologyLinks, topologyNodes } from '@/lib/constants/topology';

describe('topology', () => {
  it('has unique node ids', () => {
    const ids = topologyNodes.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('only links nodes that exist', () => {
    const ids = new Set(topologyNodes.map((n) => n.id));
    for (const link of topologyLinks) {
      expect(ids.has(link.from)).toBe(true);
      expect(ids.has(link.to)).toBe(true);
    }
  });

  it('keeps every node inside the viewBox', () => {
    for (const node of topologyNodes) {
      expect(node.x).toBeGreaterThanOrEqual(0);
      expect(node.x).toBeLessThanOrEqual(TOPOLOGY_VIEWBOX.width);
      expect(node.y).toBeGreaterThanOrEqual(0);
      expect(node.y).toBeLessThanOrEqual(TOPOLOGY_VIEWBOX.height);
    }
  });
});
