const { 
  booleanToWord 
} = require("../src");

describe("booleanToWord", () => {
  it("return yes if the passed boolean is true and return no if boolean is false", () => {
    expect(booleanToWord(true)).toBe('Yes');
    expect(booleanToWord(false)).toBe('No');
    expect(booleanToWord('')).toBe('Error');
  });
});
