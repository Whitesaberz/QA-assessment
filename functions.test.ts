const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("shuffleArray should return the same length", () => {
    let shuffledArray = shuffleArray(shuffleArray.arrCopy);
    expect(shuffleArray.length).toEqual(shuffleArray.arrCopy.length);
  });
});
