const shaftsEl = document.querySelector("input[name=shafts]")
const treadlesEl = document.querySelector("input[name=treadles]")
const threadsPUEl = document.querySelector("input[name=threadspu]")
const threadPUsEl = document.querySelector("input[name=threadpus]")
const treadsPUEl = document.querySelector("input[name=treadspu]")
const treadPUsEl = document.querySelector("input[name=treadpus]")

function setDefaults() {
  if (shaftsEl.value != "")
    return;
  if (treadlesEl.value != "")
    return;
  if (threadsPUEl.value != "")
    return;
  if (threadPUsEl.value != "")
    return;
  if (treadsPUEl.value != "")
    return;
  if (treadPUsEl.value != "")
    return;

  shaftsEl.value = 4
  treadlesEl.value = shaftsEl.value
  threadsPUEl.value = 18
  threadPUsEl.value = 2
  treadsPUEl.value = threadsPUEl.value
  treadPUsEl.value = threadPUsEl.value
}

setDefaults()
