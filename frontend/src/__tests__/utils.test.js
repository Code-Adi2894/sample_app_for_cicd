const { generateID, sortList } = require("../utils/utils");

test('generateID returns 5-char string', () => {
  const id = generateID();
  expect(typeof id).toBe('string');
  expect(id.length).toBe(5);
});

test('sortList orders incomplete before complete', () => {
  const a = { isCompleted: false };
  const b = { isCompleted: true };
  expect(sortList(a,b)).toBe(-1);
  expect(sortList(b,a)).toBe(1);
  expect(sortList(a,a)).toBe(0);
});