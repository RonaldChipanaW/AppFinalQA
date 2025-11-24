import { describe, it, expect } from 'vitest';
import { isEmail } from '../../src/app.js';

describe('isEmail()', () => {
  it('valid email passes', () => {
    expect(isEmail('user@test.com')).toBe(true);
  });

  it('invalid email fails', () => {
    expect(isEmail('invalid-email')).toBe(false);
  });
});
