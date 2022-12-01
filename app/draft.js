/* eslint-disable max-classes-per-file */

/**
 * The greatest common divisor (GCD) of two integers a and b is the
 * greatest positive integer d such that d is a divisor of both a and
 * b; that is, there are integers e and f such that a = de and b = df,
 * and d is the largest such integer. The GCD of a and b is generally
 * denoted gcd(a, b).
 *   -- https://en.wikipedia.org/wiki/Greatest_common_divisor
 */
export const gcd = function greatestCommonDivisor(x, y) {
  let a = Math.abs(x);
  let b = Math.abs(y);

  // Euclid's algorithm
  while (b) {
    [a, b] = [b, a % b];
  }

  return a;
};

/**
 * The least common multiple (LCM) of two integers a and b is the
 * smallest positive integer that is divisible by both a and b.  Since
 * division of integers by zero is undefined, this definition has
 * meaning only if a and b are both different from zero, however some
 * authors define lcm(a, 0) as 0 for all a, since 0 is the only common
 * multiple of a and 0.
 *   -- https://en.wikipedia.org/wiki/Least_common_multiple
 */
export const lcm = function leastCommonMultiple(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  return Math.abs((x * y) / gcd(x, y));
};

export class ThreadSequence {
  constructor({ numbers = [], colors = [], repeats = 1 }) {
    this.numbers = numbers;
    this.colors = colors;
    this.repeats = repeats;
  }
}

export default class Draft {
  constructor({
    num_shafts, // eslint-disable-line camelcase
    num_treadles, // eslint-disable-line camelcase
    rising_shed, // eslint-disable-line camelcase
    tieup, //  eslint-disable-line no-unused-vars
    warp,
    weft,
    // eslint-disable-next-line spaced-comment
    //liftplan,
    // eslint-disable-next-line spaced-comment
    //date, title, author, address, email, telephone, fax, notes]) */
  }) {
    this.numShafts = num_shafts; // eslint-disable-line camelcase
    this.numTreadles = num_treadles; // eslint-disable-line camelcase
    this.isRisingShed = rising_shed; // eslint-disable-line camelcase
    // eslint-disable-next-line spaced-comment
    this.warp = warp; //XXX just so we can .length it below
    // eslint-disable-next-line spaced-comment
    this.weft = weft; //XXX ditto
    // eslint-disable-next-line spaced-comment
    this.warpRepeats = 1; //XXX detect and set
    // eslint-disable-next-line spaced-comment
    this.weftRepeats = 1; //XXX ditto
  }
}
