import { render, screen } from '@testing-library/react';
import App, {forEach} from '../App';
it('renders button', () => {
  render(<App />);
  const button = screen.getByText(/Submit/i);
  expect(button).toBeInTheDocument();
});


test('mock call back', () => {
  // Create a new mock that can be used in place of `add`.
  const mockCallback = jest.fn(x => x + 100);
  forEach([0, 1], mockCallback);
  expect(mockCallback.mock.calls).toHaveLength(2);
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  expect(mockCallback.mock.results[0].value).toBe(100);
});
