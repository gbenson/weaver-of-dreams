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
export default function lcm(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  return Math.abs((x * y) / gcd(x, y));
}
