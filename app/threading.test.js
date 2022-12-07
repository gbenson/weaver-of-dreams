import * as Threading from './threading';

describe('Threading.straightDraw', () => {
  it('defaults to 4-shafts', () => {
    expect(Threading.straightDraw()).toEqual([1, 2, 3, 4]);
  });

  it('can handle variable numbers of shafts', () => {
    expect(Threading.straightDraw(3)).toEqual([1, 2, 3]);
    expect(Threading.straightDraw(7)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe('Threading.pointDraw', () => {
  it('defaults to 4-ends, 4-shafts', () => {
    expect(Threading.pointDraw()).toEqual([1, 2, 3, 4, 3, 2]);
  });

  it('defaults to 4-shafts when less ends are specified', () => {
    expect(Threading.pointDraw(3)).toEqual([1, 2, 3, 2]);
  });

  it('defaults to 4-shafts when more ends are specified', () => {
    expect(Threading.pointDraw(5)).toEqual([1, 2, 3, 4, 1, 4, 3, 2]);
  });

  it('can handle other numbers of shafts', () => {
    expect(Threading.pointDraw(3, 3)).toEqual([1, 2, 3, 2]);
    expect(Threading.pointDraw(5, 3)).toEqual([1, 2, 3, 1, 2, 1, 3, 2]);
    expect(Threading.pointDraw(5, 5)).toEqual([1, 2, 3, 4, 5, 4, 3, 2]);
  });
});

describe('Threading.brokenPointDraw', () => {
  it('defaults to 4-ends, 4-shafts', () => {
    expect(Threading.brokenPointDraw()).toEqual([
      1, 2, 3, 4,
      2, 1, 4, 3,
    ]);
  });

  it('defaults to 4-shafts when more ends are specified', () => {
    expect(Threading.brokenPointDraw(6)).toEqual([
      1, 2, 3, 4, 1, 2,
      4, 3, 2, 1, 4, 3,
    ]);
  });

  it('can handle other numbers of shafts', () => {
    expect(Threading.brokenPointDraw(5, 5)).toEqual([
      1, 2, 3, 4, 5,
      3, 2, 1, 5, 4,
    ]);
  });
});
