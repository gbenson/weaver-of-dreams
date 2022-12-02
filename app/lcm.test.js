import lcm, { gcd } from './lcm';

describe('leastCommonMultiple', () => {
  it('correctly handles lcm(0, 0)', () => {
    expect(lcm(0, 0)).toEqual(0);
  });

  it('correctly handles lcm(a, 0) and lcm(0, a)', () => {
    expect(lcm(7, 0)).toEqual(0);
    expect(lcm(-2, 0)).toEqual(0);
    expect(lcm(0, 4)).toEqual(0);
    expect(lcm(0, -3)).toEqual(0);
  });

  it('correctly handles lcm(a, b) for positive a, b', () => {
    expect(lcm(5, 2)).toEqual(10);
    expect(lcm(4, 6)).toEqual(12);
    expect(lcm(21, 6)).toEqual(42);
  });

  it('correctly handles lcm(a, b) for negative a, b', () => {
    expect(lcm(-5, 2)).toEqual(10);
    expect(lcm(4, -6)).toEqual(12);
    expect(lcm(-21, -6)).toEqual(42);
  });
});

describe('greatestCommonDivisor', () => {
  it('correctly handles gcd(0, 0)', () => {
    expect(gcd(0, 0)).toEqual(0);
  });

  it('correctly handles gcd(a, 0) and gcd(0, a)', () => {
    expect(gcd(7, 0)).toEqual(7);
    expect(gcd(-2, 0)).toEqual(2);
    expect(gcd(0, 4)).toEqual(4);
    expect(gcd(0, -3)).toEqual(3);
  });

  it('correctly handles gcd(a, b) for positive a, b', () => {
    expect(gcd(8, 12)).toEqual(4);
    expect(gcd(54, 24)).toEqual(6);
    expect(gcd(42, 56)).toEqual(14);
    expect(gcd(24, 60)).toEqual(12);
    expect(gcd(48, 180)).toEqual(12);
    expect(gcd(48, 18)).toEqual(6);
  });
});
