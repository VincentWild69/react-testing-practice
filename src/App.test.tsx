import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouter } from './utils/testUtils/renderWithRouter';

describe('app tests', () => {
  test('renders page', () => {
    renderWithRouter(<App />);
    const element = screen.getByText(/main page/i);
    expect(element).toBeInTheDocument();
  });

  test('nav links works', () => {
    renderWithRouter(<App />);
    const basicLink = screen.getByTestId('/basicexample');
    userEvent.click(basicLink);
    expect(screen.queryByText(/basic test/i)).toBeInTheDocument();
    const homeLink = screen.getByTestId('/');
    userEvent.click(homeLink);
    expect(screen.queryByText(/main/i)).toBeInTheDocument();
    const fakeLink = screen.getByTestId('/fakelink');
    expect(fakeLink).toBeInTheDocument();
    userEvent.click(fakeLink);
    expect(screen.getByTestId('notfoundpage')).toBeInTheDocument();
  });
});
