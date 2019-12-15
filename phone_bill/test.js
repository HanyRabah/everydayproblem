const phoneBill = require('./index');

test('function phoneBill exists', () => {
  expect(typeof phoneBill).toEqual('function');
});

test('function phoneBill exists', () => {
  expect(
    phoneBill(
      '00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090'
    )
  ).toEqual(900);
});
