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
