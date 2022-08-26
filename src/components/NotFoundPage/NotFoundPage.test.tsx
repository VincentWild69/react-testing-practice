import NotFoundPage from "./NotFoundPage"
import { render, screen } from '@testing-library/react';

describe('render NotFoundPage', () => {
  test('renders page', () => {
    render(<NotFoundPage />);
    const element = screen.getByText(/page not/i);
    expect(element).toBeInTheDocument();
  });
  
})