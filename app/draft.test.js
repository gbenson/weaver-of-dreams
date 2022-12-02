import { ThreadSequence } from './draft';

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
