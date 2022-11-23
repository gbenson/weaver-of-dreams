class Draft {
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
  }
}

const shaftsEl = document.querySelector("input[name=shafts]")
const treadlesEl = document.querySelector("input[name=treadles]")
const threadsPUEl = document.querySelector("input[name=threadspu]")
const threadPUsEl = document.querySelector("input[name=threadpus]")
const treadsPUEl = document.querySelector("input[name=treadspu]")
const treadPUsEl = document.querySelector("input[name=treadpus]")

async function populate() {

  const requestURL = "../test/79703.json"
  const request = new Request(requestURL)
  const response = await fetch(request)

  const draft = new Draft(await response.json())

  shaftsEl.value = draft.numShafts
  treadlesEl.value = draft.numTreadles
  threadsPUEl.value = draft.warp.length //XXX spot repeats
  treadsPUEl.value = draft.weft.length //XXX ditto
  threadPUsEl.value = Number(draft.isRisingShed) //XXX make a checkbox
  treadPUsEl.value = 2301023 //XXX i.e. success!
}

populate()
