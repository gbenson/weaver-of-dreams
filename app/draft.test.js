import {Draft} from './draft.js'

// Some properties may be initialized with an alternate name, to allow
// loading of PyWeaving JSON files.  Checking property values using this
// function ensures that properties with alternate names are never set
// in Draft objects.
function expectProp(draft, propName, altName) {
  if (altName !== undefined)
    expect(draft[altName]).toBeUndefined();

  return expect(draft[propName]);
}

describe("Draft", () => {

  // Common tests for properties which are small positive integers.
  describe.each([
    {propName: "numShafts", altName: "num_shafts"},
    {propName: "numTreadles", altName: "num_treadles"},
    {propName: "warpRepeats", defaultValue: 1},
    {propName: "weftRepeats", defaultValue: 1},
  ]) ("$propName", ({propName, altName, defaultValue}) => {

    let variants = [
      {testName: "uninitialized"},
      {testName: `initialized via ${propName}`,
       initProp: propName},
    ];
    if (altName !== undefined)
      variants.push({testName: `initialized via ${altName}`,
		     initProp: altName});

    describe.each(variants) ("$testName", ({initProp}) => {
      let draft;
      let initValue = 5;

      beforeEach(() => {
	if (initProp === undefined)
	  draft = new Draft();
	else {
	  let props = {};
	  props[initProp] = initValue;
	  draft = new Draft(props);
	}
      });

      // Check the initial value
      if (initProp === undefined) {
	if (defaultValue === undefined) {
	  test("defaults to undefined", () => {
	    expectProp(draft, propName, altName).toBeUndefined();
	  });
	}
	else {
	  test(`defaults to ${defaultValue}`, () => {
	    expectProp(draft, propName, altName).toBe(defaultValue);
	  });
	}
      }
      else {
	test("was correctly initialized", () => {
	  expectProp(draft, propName, altName).toBe(initValue);
	});
      }

      // XXX Try incrementing or whatever
      // XXX Try setting to illegal stuff

    });
  });
});
