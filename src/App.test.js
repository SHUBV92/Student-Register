import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('correct routes are exported', () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});
