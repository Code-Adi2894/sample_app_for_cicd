import React from 'react';
import { render, screen } from '@testing-library/react';
import Greetings from '../src/component/Greetings';

test('renders greeting text', () => {
  render(<Greetings />);
  expect(screen.getByText(/Hello, World!/i)).toBeInTheDocument();
});
