import React from 'react';
import { screen } from '@testing-library/react';
import Layout from './Layout';
import { renderWithRouter } from '../../utils/testUtils/renderWithRouter';

describe('render Layout', () => {
  test('renders page', () => {
    renderWithRouter(<Layout />);
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
