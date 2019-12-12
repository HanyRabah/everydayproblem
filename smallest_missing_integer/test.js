const smallestMissingInteger = require("./index");

test("function findSmallestNumber exists", () => {
  expect(typeof smallestMissingInteger).toEqual("function");
});

test("returns smallest missing number with negative", () => {
  const arr = [3, 4, -1, 1];
  const want = 2;
  const got = smallestMissingInteger(arr);

  expect(got).toEqual(want);
});

test("returns smallest missing number with zero", () => {
  const arr = [1, 2, 0];
  const want = 3;
  const got = smallestMissingInteger(arr);

  expect(got).toEqual(want);
});

test("returns smallest missing number with negatives and zero", () => {
  const arr = [2, -1, -2, 10, 11, 13, 0];
  const want = 1;
  const got = smallestMissingInteger(arr);

  expect(got).toEqual(want);
});
