const jump = require("./index");

test("function jump exists", () => {
  expect(typeof jump).toEqual("function");
});

test("returns valid result for", () => {
  const x = 10;
  const y = 85;
  const d = 30;
  const want = 3;

  expect(jump(x, y, d)).toEqual(want);
});

test("returns result for invalid input", () => {
  const x = 0;
  const y = 0;
  const d = 3;
  const want = 0;

  expect(jump(x, y, d)).toEqual(want);
});
