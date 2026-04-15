import React from 'react';
import { render, screen } from '@testing-library/react';
import Greetings from '../component/Greetings';

test('renders greeting', () => {
  render(<Greetings />);
  expect(screen.getByText(/Hello, World!/)).toBeInTheDocument();
});