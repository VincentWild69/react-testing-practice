import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: JSX.Element, initialRoute: string = '/') => (
  render((
    <MemoryRouter initialEntries={[initialRoute]}>
      {component}
    </MemoryRouter>))
);
