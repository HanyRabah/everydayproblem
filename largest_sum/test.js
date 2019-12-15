const solution = require('./index');

test('solution function is defined', () => {
  expect(solution).toBeDefined();
});

test('Calling solution for [2, 4, 6, 2, 5]', () => {
  expect(solution([2, 4, 6, 2, 5])).toEqual(13);
});

test('Calling solution for [5, 1, 1, 5]', () => {
  expect(solution([5, 1, 1, 5])).toEqual(10);
});

test('Calling solution for [1, 2, 3, 1]', () => {
  expect(solution([1, 2, 3, 1])).toEqual(4);
});

test('Calling solution for [2, 7, 9, 3, 1])', () => {
  expect(solution([2, 7, 9, 3, 1])).toEqual(12);
});
