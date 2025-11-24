import { describe, it, expect } from 'vitest';
import { sum } from '../../src/app.js';

describe('sum()', () => {
  it('adds two numbers', () => {
    expect(sum(2, 5)).toBe(7);
  });

  it('handles negative numbers', () => {
    expect(sum(-2, 3)).toBe(1);
  });
});
