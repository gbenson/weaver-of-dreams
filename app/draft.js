/* eslint-disable max-classes-per-file */

import lcm from './lcm';

export class ThreadSequence {
  constructor({ numbers = [], colors = [], repeats = 1 } = {}) {
    this.numbers = numbers;
    this.colors = colors;
    this.repeats = repeats;
  }

  get unitLength() {
    return lcm(this.numbers.length, this.colors.length);
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
