export class ColorSequence {
  #colors = [];

  constructor(initialSequence) {
    if (initialSequence !== undefined) {
      this.#colors = [...initialSequence];
    }
    this.colors = new Proxy(this, this);
  }

  get(target, prop, receiver) {
    const index = Number(prop);
    if (Number.isInteger(index) && index >= 0) {
      return this.#colors[index % this.length];
    }
    return Reflect.get(this.#colors, prop);
  }

  get length() {
    return this.#colors.length;
  }

  push(...colors) {
    this.#colors.push(...colors);
  }

  *forDaysx() {
    while (true) {
      for (const color of this.colors) {
        yield color;
      }
    }
  }

  get forDays() {
    return this.forDaysx()
  }
}

export default class Draft {
  constructor({num_shafts,
	       num_treadles,
	       rising_shed,
	       tieup,
	       warp,
	       weft,
	       //liftplan,
    //date, title, author, address, email, telephone, fax, notes])
	      }) {
    this.numShafts = num_shafts
    this.numTreadles = num_treadles
    this.isRisingShed = rising_shed
    this.warp = warp //XXX just so we can .length it below
    this.weft = weft //XXX ditto
    this.warpRepeats = 1 //XXX detect and set
    this.weftRepeats = 1 //XXX ditto
  }
}
