export class Draft {
  #numShafts;
  #numTreadles;
  isRisingShed = true;
  tieUp;
  warp;
  weft;
  #warpRepeats = 1;
  #weftRepeats = 1;

  constructor(obj) {
    if (obj === undefined)
      obj = {}

    this.numShafts = this.firstOf(obj.numShafts, obj.num_shafts);
    this.numTreadles = this.firstOf(obj.numTreadles, obj.num_treadles);
    //XXX todo tieUp <= "tieup": [[0, 1], [2, 1], [2, 3], [0, 3]]
    //XXX todo isRisingShed
    this.warp = obj.warp; //XXX needs parsing, (kept b/c we .length it)
    this.weft = obj.weft; //XXX ditto
    this.warpRepeats = this.firstOf(obj.warpRepeats, this.#warpRepeats);
    this.weftRepeats = this.firstOf(obj.weftRepeats, this.#weftRepeats);
    // XXX todo, detect warp and weft repeats, and adjust accordingly
  }

  // Integer properties
  get numShafts() {
    return this.#numShafts;
  }
  set numShafts(value) {
    this.#numShafts = this.sanitizeInteger(value, 2);
  }
  get numTreadles() {
    return this.#numTreadles;
  }
  set numTreadles(value) {
    this.#numTreadles = this.sanitizeInteger(value, 0);
  }
  get warpRepeats() {
    return this.#warpRepeats;
  }
  set warpRepeats(value) {
    this.#warpRepeats = this.sanitizeInteger(value, 1);
  }
  get weftRepeats() {
    return this.#weftRepeats;
  }
  set weftRepeats(value) {
    this.#weftRepeats = this.sanitizeInteger(value, 1);
  }

  // Return the first defined value out of several
  firstOf(...args) {
    for (let i = 0; i < args.length; i++) {
      if (args[i] !== undefined)
	return args[i];
    }
    return undefined;
  }

  // Ensure a value is an integer with a lower bound, or undefined
  sanitizeInteger(value, minimum) {
    if (value !== undefined) {
      value = Number(value);

      if (!Number.isInteger(value))
	throw new TypeError(`${value} not an integer`);

      if (value < minimum)
	throw new TypeError(`${value} < ${minimum}`);
    }
    return value;
  }
}
