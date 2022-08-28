import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

describe('render NotFoundPage', () => {
  test('renders page', () => {
    render(<NotFoundPage />);
    const element = screen.getByText(/page not/i);
    expect(element).toBeInTheDocument();
  });
});
