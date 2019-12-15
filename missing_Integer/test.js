const MissingInteger = require('./index');

test('MissingInteger function is defined', () => {
  expect(MissingInteger).toBeDefined();
});

test('Calling MissingInteger with diff prints out the correct values', () => {
  expect(MissingInteger([1, 2, 4])).toEqual(3);
});

test('Calling MissingInteger with diff prints out the correct values', () => {
  expect(MissingInteger([-1, -3])).toEqual(1);
});

test('Calling MissingInteger with diff prints out the correct values', () => {
  expect(MissingInteger([-1, -3, 1])).toEqual(2);
});

test('returns smallest missing number with negative', () => {
  const arr = [3, 4, -1, 1];
  const want = 2;
  const got = MissingInteger(arr);

  expect(got).toEqual(want);
});

test('returns smallest missing number with zero', () => {
  const arr = [1, 2, 0];
  const want = 3;
  const got = MissingInteger(arr);

  expect(got).toEqual(want);
});

test('returns smallest missing number with negatives and zero', () => {
  const arr = [2, -1, -2, 10, 11, 13, 0];
  const want = 1;
  const got = MissingInteger(arr);

  expect(got).toEqual(want);
});
