import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('render basic example', () => {
  test('renders page', () => {
    render(<Header />);
    const title = screen.getByText('header');
    expect(title).toBeInTheDocument();
  });
});
