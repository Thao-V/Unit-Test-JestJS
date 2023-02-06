import { render, screen } from '@testing-library/react';
import App from '../App';
it('renders button', () => {
  render(<App />);
  const button = screen.getByText(/Submit/i);
  expect(button).toBeInTheDocument();
});

