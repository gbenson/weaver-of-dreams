import {Draft} from "./draft.js"

const container = document.querySelector(".container")
let draw = false

function clip(val, max, min = 0) {
  return (val >= min && val < max) ? val : min - 1
}

function populate_container(draft) {

  const numWarpThreads = draft.warp.length * draft.warpRepeats
  const numWeftThreads = draft.weft.length * draft.weftRepeats

  const numRows = 1 + 1 + draft.numShafts + 1 + numWeftThreads
  const numCols = numWarpThreads + 1 + draft.numTreadles + 1 + 1

  container.style.setProperty("--rows", numRows)
  container.style.setProperty("--cols", numCols)

  // Add the "pixels"
  for (let row = 0; row < numRows; row++) {
    const shaft = clip(draft.numShafts - row + 1, draft.numShafts)
    const weft = row - (numRows - numWeftThreads)

    for (let col = 0; col < numCols; col++) {
      const treadle = clip(col - numWarpThreads - 1, draft.numTreadles)
      const warp = clip(col, numWarpThreads)

      const div = document.createElement("div")

      if (row == 0 && warp >= 0) {
	// Warp thread color picker
	div.classList.add("warpthreadcolor")
      }
      else if (weft >= 0 && col == numCols - 1) {
	// Weft thread color picker
	div.classList.add("weftthreadcolor")
      }
      else if (warp >= 0 && shaft >= 0) {
	// Threading
	div.classList.add("threading")
	if ((shaft + warp + 1) % draft.numShafts == 0)
	  div.classList.add("threaded")
      }
      else if (shaft >= 0 && treadle >= 0) {
	// Tie-up
	div.classList.add("tie-up")
	if (treadle == shaft || (treadle + 1) % draft.numShafts == shaft)
	  div.classList.add("tied")
      }
      else if (weft >= 0 && treadle >= 0) {
	// Treadling
	div.classList.add("treadling")
	if (weft % draft.numTreadles == treadle)
	  div.classList.add("treadled")
      }
      else if (warp >= 0 && weft >= 0) {
	// Drawdown
	div.classList.add("drawdown-warp")
	if ((warp + weft) % draft.numShafts < (draft.numShafts)/2)
	  div.classList.add("drawdown-weft")
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

  // Make the "pixels" square
  const pixel = document.querySelector(".warpthreadcolor")
  if (pixel.offsetWidth > pixel.offsetHeight) {
    container.style.width = (container.offsetWidth
			     - (pixel.offsetWidth
				- pixel.offsetHeight) * numCols) + "px"
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
