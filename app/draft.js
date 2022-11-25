export class Draft {
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
