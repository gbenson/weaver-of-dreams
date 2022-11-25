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
    this.warpRepeats = 1 //XXX detect and set
    this.weftRepeats = 1 //XXX ditto
  }
}

const container = document.querySelector(".container")
let draw = false

function populate_container(draft) {

  const numWarpThreads = draft.warp.length * draft.warpRepeats
  const numWeftThreads = draft.weft.length * draft.weftRepeats

  const numRows = 1 + 1 + draft.numShafts + 1 + numWeftThreads
  const numCols = numWarpThreads + 1 + draft.numTreadles + 1 + 1

  container.style.setProperty("--rows", numRows)
  container.style.setProperty("--cols", numCols)

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const div = document.createElement("div")

      if (row == 0 && col < numWarpThreads) {
	// Warp thread color picker
	div.classList.add("warpthreadcolor")
      }
      else {
	div.classList.add("pixel")

	div.addEventListener("mouseover", function() {
          if(!draw) return
          div.style.backgroundColor = "red"
	})
	div.addEventListener("mousedown", function() {
          div.style.backgroundColor = "red"
	})
      }

      container.appendChild(div)
    }
  }
}

window.addEventListener("mousedown", function() {
    draw = true
})
window.addEventListener("mouseup", function() {
    draw = false
})

const shaftsEl = document.querySelector("input[name=shafts]")
const treadlesEl = document.querySelector("input[name=treadles]")
const threadsPUEl = document.querySelector("input[name=threadspu]")
const threadPUsEl = document.querySelector("input[name=threadpus]")
const treadsPUEl = document.querySelector("input[name=treadspu]")
const treadPUsEl = document.querySelector("input[name=treadpus]")

async function populate() {

  // XXX There's a HACK in ../test/.htaccess to support loading
  // XXX this test draft when I'm accessing everything else via
  // XXX "file://" URLs locally.  Don't forget to remove the hack
  // XXX whenever this test draft loading code gets removed.
  const requestURL = "https://gbenson.net/wod/test/79703.json"
  const request = new Request(requestURL)
  const response = await fetch(request)
  if (!response.ok) {
    throw new Error("HTTP status " + response.status)
  }

  const draft = new Draft(await response.json())

  shaftsEl.value = draft.numShafts
  treadlesEl.value = draft.numTreadles
  threadsPUEl.value = draft.warp.length //XXX spot repeats
  treadsPUEl.value = draft.weft.length //XXX ditto
  threadPUsEl.value = draft.warpRepeats
  treadPUsEl.value = draft.weftRepeats

  populate_container(draft)
}

populate()
