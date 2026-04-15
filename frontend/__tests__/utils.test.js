const { generateID, sortList } = require('../src/utils/utils');

test('generateID returns a 5-character string', () => {
  const id = generateID();
  expect(typeof id).toBe('string');
  expect(id.length).toBe(5);
});

test('sortList sorts incomplete tasks before completed ones', () => {
  const arr = [
    { id: 1, isCompleted: true },
    { id: 2, isCompleted: false },
  ];
  const sorted = arr.sort(sortList);
  expect(sorted[0].isCompleted).toBe(false);
});
