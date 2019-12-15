const jump = require('./index');

test('function jump exists', () => {
  expect(typeof jump).toEqual('function');
});

test('Calling Jump with X=10 Y=85 D=30 should return 3', () => {
  expect(jump(10, 85, 30)).toEqual(3);
});
