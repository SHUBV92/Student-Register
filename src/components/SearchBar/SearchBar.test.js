import { render, fireEvent } from '@testing-library/react';

it('Search updates on change', () => {
  const setSearch = jest.fn((value) => {});
  const { queryByPlaceholderText } = render(
    <SearchBar setSearchQuery={setSearch} />
  );

  const searchInput = queryByPlaceholderText(
    'Search for a student by name or ID'
  );

  fireEvent.change(searchInput, { target: { value: 'Captain' } });

  expect(searchInput.value).toBe('Captain');
});
