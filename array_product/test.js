const solution = require('./index');

test('solution is a function', () => {
  expect(typeof solution).toEqual('function');
});
// Adding more tests will be great.

test('Array products is working returning the right values', () => {
  expect(solution([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  expect(solution([3, 2, 1])).toEqual([2, 3, 6]);
});
