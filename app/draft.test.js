import { ThreadSequence, gcd, lcm } from './draft';

const color1 = { color: 'black' };
const color2 = { color: 'white' };

describe('Draft', () => {
  it.todo('has a warp');
  it.todo('has a weft');
  it.todo('has a tie-up');
  it.todo('can compute a drawdown');
});

describe('ThreadSequence', () => {
  it('is created empty by default', () => {
    const ts = new ThreadSequence({});

    expect(ts.numbers).toHaveLength(0);
    expect(ts.colors).toHaveLength(0);
    expect(ts.repeats).toEqual(1);
  });

  it('may be created with initial sequences', () => {
    const ts = new ThreadSequence({
      numbers: [1, 2, 3, 4],
      colors: [
        color1, color1, color1, color1,
        color2, color2, color2, color2,
      ],
    });

    expect(ts.numbers).toHaveLength(4);
    expect(ts.colors).toHaveLength(8);
    expect(ts.colors).toHaveLength(8);
  });

  it.todo('has a unit length which is LCM(num colors, num shafts)');
  it.todo('has an overall length which is base length x number of repeats');
  it.todo('can iterate over the combined sequences (or create arrays)');
  it.todo('can be in multiple positions in multiple drafts');
  it.todo('can be iterated in reverse');
});

describe('TieUp', () => {
  it.todo('is created empty by default');
  it.todo('describes which treadles move which shafts');
  it.todo('may be rising- or sinking-shed');
});

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
