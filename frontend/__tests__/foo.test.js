const { sum } = require('../src/component/foo');

test('sum adds two numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
