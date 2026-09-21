'use client';

import { useState } from 'react';

import { TOPOLOGY_VIEWBOX, topologyLinks, topologyNodes } from '@/lib/constants/topology';
import { TopologyLink, TopologyNode } from '@/lib/constants/types';

const NODE_RADIUS = 7;
const HIT_RADIUS = 40;

function nodeById(id: string): TopologyNode {
  const node = topologyNodes.find((n) => n.id === id);
  if (!node) throw new Error(`Unknown topology node: ${id}`);
  return node;
}

function linkPath(link: TopologyLink): string {
  const a = nodeById(link.from);
  const b = nodeById(link.to);
  if (!link.arc) return `M ${a.x} ${a.y} L ${b.x} ${b.y}`;
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 - link.arc;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

function labelPosition(node: TopologyNode): { x: number; y: number; anchor: 'middle' | 'start' } {
  const placement = node.labelPlacement ?? (node.kind === 'cloud' ? 'right' : 'below');
  if (placement === 'right') return { x: node.x + 16, y: node.y + 4, anchor: 'start' };
  if (placement === 'above') return { x: node.x, y: node.y - 16, anchor: 'middle' };
  return { x: node.x, y: node.y + 24, anchor: 'middle' };
}

export function CareerTopology() {
  const [active, setActive] = useState<TopologyNode | null>(null);
  const { width, height } = TOPOLOGY_VIEWBOX;

  return (
    <figure className="relative">
      <figcaption className="mono-label mb-3 text-subtle">career topology</figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="block w-full"
        role="group"
        aria-label="Career topology: Manila to Parañaque NOC, offshore link to Hong Kong, then Doha and Azure, AWS and GCP"
      >
        {topologyLinks.map((link) => (
          <path
            key={`${link.from}-${link.to}`}
            d={linkPath(link)}
            fill="none"
            className={
              link.style === 'live'
                ? 'stroke-accent [stroke-dasharray:3_5] motion-safe:animate-dash'
                : 'stroke-line-strong'
            }
            strokeWidth={1.2}
          />
        ))}

        {topologyNodes.map((node) => {
          const label = labelPosition(node);
          const name = [node.label, node.years, node.note].filter(Boolean).join(' — ');
          return (
            <g
              key={node.id}
              role="button"
              tabIndex={0}
              aria-label={name}
              aria-describedby={active?.id === node.id ? 'topology-tip' : undefined}
              onMouseEnter={() => setActive(node)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(node)}
              onBlur={() => setActive(null)}
              className="focus-ring cursor-default outline-none [&:focus-visible>circle:first-child]:stroke-accent"
            >
              <circle cx={node.x} cy={node.y} r={HIT_RADIUS} fill="transparent" stroke="none" />
              {node.kind === 'cloud' ? (
                <rect
                  x={node.x - NODE_RADIUS}
                  y={node.y - NODE_RADIUS}
                  width={NODE_RADIUS * 2}
                  height={NODE_RADIUS * 2}
                  rx={2}
                  className="fill-panel stroke-accent"
                  strokeWidth={1.2}
                />
              ) : (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={NODE_RADIUS}
                  className={`fill-panel stroke-accent ${active?.id === node.id ? 'fill-accent-soft' : ''}`}
                  strokeWidth={1.2}
                />
              )}
              <text
                x={label.x}
                y={label.y}
                textAnchor={label.anchor}
                className="hidden fill-muted font-mono text-[11px] tracking-[0.08em] sm:block"
              >
                {node.label}
              </text>
              <text
                x={label.x}
                y={label.y}
                textAnchor={label.anchor}
                className="fill-muted font-mono text-[11px] tracking-[0.08em] sm:hidden"
              >
                {node.shortLabel}
              </text>
            </g>
          );
        })}
      </svg>

      <div
        id="topology-tip"
        role="tooltip"
        hidden={!active}
        style={
          active
            ? { left: `${(active.x / width) * 100}%`, top: `${(active.y / height) * 100}%` }
            : undefined
        }
        className="pointer-events-none absolute z-10 max-w-64 -translate-x-1/2 translate-y-4 rounded-[6px] border border-line-strong bg-panel px-3 py-2 text-xs leading-snug text-fg shadow-lg"
      >
        {active && (
          <>
            <span className="mono-label block text-accent">
              {active.label}
              {active.years ? ` · ${active.years}` : ''}
            </span>
            <span className="mt-1 block text-muted">{active.note}</span>
          </>
        )}
      </div>
    </figure>
  );
}
