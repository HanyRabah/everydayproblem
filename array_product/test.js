const arrayProduct = require('./index');

describe('arrayProduct', () => {
  test('handles invalid input', () => {
    expect(arrayProduct(0)).toEqual([]);
    expect(arrayProduct([null, null])).toEqual([0, 0]);
  });

  test('returns product of elements except current index', () => {
    expect(arrayProduct([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });
});
