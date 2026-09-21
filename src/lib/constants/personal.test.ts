import { describe, expect, it } from 'vitest';

import { personal } from '@/lib/constants/personal';

describe('personal', () => {
  it('has the public email and no phone number', () => {
    expect(personal.email).toBe('jameskyle.dleon@gmail.com');
    expect(JSON.stringify(personal)).not.toMatch(/\+974/);
  });
});
