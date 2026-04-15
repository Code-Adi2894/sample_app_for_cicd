import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../src/component/TodoList';

test('renders TODO APP title and initial lists', () => {
  const { container } = render(<TodoList />);
  expect(container.querySelector('h1').textContent).toMatch(/TODO APP/);
  // initial todo list should render at least one .list element
  expect(container.querySelectorAll('.list').length).toBeGreaterThanOrEqual(1);
});
