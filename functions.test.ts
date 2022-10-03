const { shuffleArray } = require("./utils");

describe("shuffleArray should", () => {
  test("shuffleArray should return the same length after the function", () => {
    let arr = [1, 2, 3, 4, 5];
    let result = shuffleArray(arr);
    expect(arr.length).toBe(result.length);
  });
  test("shuffleArray should return array with same items", () => {
    //create array
    //run through shuffle array function
    //check to make sure all original values are included in new array
    let arr = [1, 2, 3, 4, 5];
    let result = shuffleArray(arr);

    expect(result).toEqual(expect.arrayContaining(arr));
  });
});
