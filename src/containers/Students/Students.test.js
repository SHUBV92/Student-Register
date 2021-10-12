import { render, fireEvent } from '@testing-library/react';
import Students from './Students';
import SearchBar from '../../components/SearchBar/SearchBar';
import studentsDataObject from '../../studentsDataBase.json';
import { MemoryRouter } from 'react-router-dom';

it('Display students with a name', () => {
  const students = render(
    <MemoryRouter>
      <Students students={studentsDataObject} />
    </MemoryRouter>
  );

  const title = students.getByText('Captain America');
  expect(title).toBeTruthy();
});
