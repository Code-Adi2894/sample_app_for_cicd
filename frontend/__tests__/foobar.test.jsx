import React from 'react';
import { render, screen } from '@testing-library/react';
import Foobar from '../src/component/Foobar';

test('renders Foobar with text and year', () => {
  render(<Foobar />);
  expect(screen.getByText(/Made with Vxrcel/i)).toBeInTheDocument();
  const yearRegex = new RegExp(String(new Date().getFullYear()));
  expect(screen.getByText(yearRegex)).toBeInTheDocument();
});
