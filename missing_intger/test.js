const MissingInteger = require('./index');

test('MissingInteger function is defined', () => {
  expect(MissingInteger).toBeDefined();
});

test('Calling MissingInteger with diff prints out the correct values', () => {
  expect([1, 2, 4]).toEqual(3);
});
