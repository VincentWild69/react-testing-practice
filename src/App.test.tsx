import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const element = screen.getByText(/main page/i);
  expect(element).toBeInTheDocument();
});
