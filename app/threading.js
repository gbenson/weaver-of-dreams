export function straightDraw(shafts = 4) {
  return Array.from(Array(shafts).keys(), (n) => n + 1);
}

export function pointDraw(ends = 4, shafts = 4) {
  const fwd = Array.from(Array(ends).keys());
  const bak = fwd.slice(1, fwd.length - 1);
  return [...fwd, ...bak.reverse()].map((n) => (n % shafts) + 1);
}

export function brokenPointDraw(ends = 4, shafts = 4) {
  const fwd = Array.from(Array(ends).keys());
  const bak = fwd.map((n) => n + shafts - 2);
  return [...fwd, ...bak.reverse()].map((n) => (n % shafts) + 1);
}
