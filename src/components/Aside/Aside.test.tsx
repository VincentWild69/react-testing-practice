import React from 'react';
import { screen } from '@testing-library/react';
import Aside from './Aside';
import { renderWithRouter } from '../../utils/testUtils/renderWithRouter';

describe('render aside success', () => {
  test('renders page', () => {
    renderWithRouter(<Aside />);
    expect(screen.getByTestId('/')).toBeInTheDocument();
    expect(screen.getByTestId('/basicexample')).toBeInTheDocument();
    expect(screen.getByTestId('/fakelink')).toBeInTheDocument();
  });
});
