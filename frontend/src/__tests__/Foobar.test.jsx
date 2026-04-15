import React from 'react';
import { render, screen } from '@testing-library/react';
import Foobar from '../component/Foobar';

test('renders foobar text with year', () => {
  render(<Foobar />);
  expect(screen.getByText(/Made with Vxrcel/)).toBeInTheDocument();
  const year = new Date().getFullYear().toString();
  expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
});