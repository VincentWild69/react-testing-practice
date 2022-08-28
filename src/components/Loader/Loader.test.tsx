import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('renders page', () => {
  render(<Loader />);
  const element = screen.getByTestId('loader');
  expect(element).toBeInTheDocument();
});
