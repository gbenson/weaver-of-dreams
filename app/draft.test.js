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
  const color3 = new Color('#9acd03');

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

  it('describes an infinite sequence of thread colors', () => {
    const cs = new ColorSequence([color3, color1]);

    expect(cs.colors[0]).toBe(color3);
    expect(cs.colors[1]).toBe(color1);
    expect(cs.colors[2]).toBe(color3);
    expect(cs.colors[3]).toBe(color1);
    expect(cs.colors[4]).toBe(color3);
    expect(cs.colors[5]).toBe(color1);
  });

  /*it('describes an infinite sequence of thread colors', () => {
    const cs = new ColorSequence([color3, color1]);

    let count = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const color of cs.forDays) {
      // eslint-disable-next-line no-plusplus
      switch (count++) {
      case 0:
      case 2:
      case 4:
        expect(color).toBe(color3);
        // eslint-disable-next-line no-continue
        continue;
      case 1:
      case 3:
      case 5:
        expect(color).toBe(color1);
        // eslint-disable-next-line no-continue
        continue;
      case 6:
        break;
      default:
        throw new Error('Should not reach here');
      }

      break;
    }
  });*/

  it('can be pushed onto', () => {
    const cs = new ColorSequence();

    expect(cs).toHaveLength(0);
    expect(cs.colors).toHaveLength(0);
    cs.push(color2);
    expect(cs.colors).toEqual([color2]);
    expect(cs).toHaveLength(1);

    cs.push(color1, color3);
    expect(cs).toHaveLength(3);
    expect(cs.colors).toEqual([color2, color1, color3]);
  });

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
