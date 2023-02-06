import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
    const notRenderEl = screen.queryByText(/data/i);
    expect(notRenderEl).not.toBeInTheDocument();
    // screen.debug();
    // WTF! this test success if here is debug, and fail without
    const data = await screen.findByText(/data/i);
    expect(data).toBeInTheDocument();
  });
});

describe('button work', () => {
  test('button open and close active element', () => {
    render(<BasicExample />);
    const btn = screen.getByText(/click/i);
    userEvent.click(btn);
    expect(screen.queryByText(/active/i)).toBeInTheDocument();
    userEvent.click(btn);
    expect(screen.queryByText(/active/i)).not.toBeInTheDocument();
  });
});
