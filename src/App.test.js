import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import routes from './routes';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('correct routes are exported', () => {
  expect(routes.map(({ name, path }) => `${name}: ${path}`)).toMatchSnapshot();
});

test('should render one student when user searches for shubinder', () => {
  render(<App />);

  let students = screen.getByRole('listitem');
  expect(students.length).toEqual(4);

  const searchBar = screen.getByRole('textbox');
  userEvent.type(searchBar, 'shubinder');

  students = screen.getAllByRole('listitem');
  expect(students.length).toEqual(1);
});
