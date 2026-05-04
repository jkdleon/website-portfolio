'use client';

import Image from 'next/image';
import { useState } from 'react';

interface AvatarProps {
  src?: string;
  initials: string;
  size?: number;
}

export function Avatar({ src = '/profile.jpg', initials, size = 200 }: AvatarProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className="rounded-full border-2 border-border bg-surface flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <span
          className="font-mono font-semibold text-accent"
          style={{ fontSize: size * 0.28 }}
        >
          {initials}
        </span>
      </div>
    );
  }

  return (
    <div
      className="rounded-full border-2 border-border overflow-hidden shrink-0"
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt="Profile photo"
        width={size}
        height={size}
        priority
        className="object-cover w-full h-full"
        onError={() => setError(true)}
      />
    </div>
  );
}
