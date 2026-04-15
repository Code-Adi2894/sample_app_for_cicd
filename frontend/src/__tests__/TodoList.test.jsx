import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../component/TodoList';

test('renders todo app title and add button', () => {
  render(<TodoList />);
  expect(screen.getByText(/TODO APP/)).toBeInTheDocument();
  expect(screen.getByText(/Add Task/)).toBeInTheDocument();
});