import { describe, it, expect } from 'vitest';
import { sum, isEmail } from '../../src/app.js';

describe('Integration test', () => {
  it('uses both functions', () => {
    const value = sum(5,5);
    expect(value).toBe(10);
    expect(isEmail('hello@mail.com')).toBe(true);
  });
});
