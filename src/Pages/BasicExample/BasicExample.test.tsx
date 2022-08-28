import React from 'react';
import { render, screen } from '@testing-library/react';
import BasicExample from './BasicExample';

describe('render basic example', () => {
  test('renders page', () => {
    render(<BasicExample />);
    const title = screen.getByRole('button', {name: 'click'});
    const btn = screen.getByText(/click/i);
    const input = screen.getByPlaceholderText(/type/i);
    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('renders async text', async () => {
    render(<BasicExample />);
    // screen.debug();
    const datas = await screen.findByText(/data/i);
    expect(datas).toBeInTheDocument();
  });
});
