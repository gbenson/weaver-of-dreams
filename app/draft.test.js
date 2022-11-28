import { ColorSequence } from './draft';
import Color from './color';

describe('Draft', () => {
  it.todo('has a warp');
  it.todo('has a weft');
  it.todo('has a tie-up');
  it.todo('can compute a drawdown');
});

describe('Warp', () => {
  it.todo('describes a sequence of (shaft number, thread color) pairs');
  it.todo('has a length (number of threads)');
  it.todo('might repeat a specified number of times');
});

describe('Weft', () => {
  it.todo('describes a sequence of (treadle set, thread color) pairs');
  it.todo('has a length (number of threads)');
  it.todo('might repeat a specified number of times');
  it.todo('might be tromp as writ');
  it.todo('might have the same color sequence as the warp');
});

describe('TieUp', () => {
  it.todo('is created empty by default');
  it.todo('describes which treadles move which shafts');
  it.todo('may be rising- or sinking-shed');
});

describe('ColorSequence', () => {
  const color1 = new Color('#04b008');
  const color2 = new Color('#0faf0e');

  it('is created empty by default', () => {
    const cs = new ColorSequence();

    expect(cs.colors).toHaveLength(0);
    expect(cs).toHaveLength(0);
  });

  it('may be created with an initial sequence', () => {
    const cs = new ColorSequence([color1, color2]);

    expect(cs).toHaveLength(2);
    expect(cs.colors).toEqual([color1, color2]);
  });

  it.todo('describes a sequence of thread colors');
  it.todo('can be pushed onto');
  it.todo('should repeat indefinitely');
  it.todo('might be the same in warp and weft, e.g. tartan');
  it.todo('might be monochrome');
  it.todo('might be longer than the threading/treadling sequence');
});

describe('ThreadingSequence', () => {
  it.todo('is created empty by default');
  it.todo('may be created with an initial sequence');
  it.todo('describes a sequence of shaft numbers');
  it.todo('can be pushed onto');
  it.todo('might have to repeat for a long color sequence e.g. tartan');
  it.todo('might be any old sequence');
  it.todo('might be a particular structure e.g. crackle');
});

describe('TreadlingSequence', () => {
  it.todo('is created empty by default');
  it.todo('may be created with an initial sequence');
  it.todo('describes a sequence of treadle sets');
  it.todo('can be pushed onto');
  it.todo('might have to repeat for a long color sequence e.g. tartan');
  it.todo('might be any old sequence');
  it.todo('might be tromp as writ');
  it.todo('might be specific to the warp structure e.g. in summer and winter');
  it.todo('might be from a different draft');
});
