// packages
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data
import filterStudents from '../../utils/filterStudents';

// component
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar/SearchBar';

// styles
import { StudentsContainer, InfoBar, Test } from './Students.styles';
import Register from '../Register/Register';

const Students = ({ students, setStudents }) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredStudents = filterStudents(students, searchQuery);

  const [sortBy, setSortBy] = useState('(A-Z)');
  const [showRegister, setShowRegister] = useState(false);

  const handleSort = () => {
    if (sortBy === '(A-Z)') {
      setSortBy('(Z-A)');
      filteredStudents.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }
    if (sortBy === '(Z-A)') {
      setSortBy('(A-Z)');
      filteredStudents.sort(function (a, b) {
        var textA = a.name.toUpperCase();
        var textB = b.name.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
    }
  };

  return (
    <Test>
      <StudentsContainer>
        <h2>Students</h2>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <InfoBar>
          <p>
            <strong>{filteredStudents.length} Students found</strong>
          </p>
          <div>
            <ul>
              <li>
                <button onClick={() => setShowRegister(true)}>
                  Add a new Student
                </button>
              </li>
            </ul>
          </div>
          <button className='sortBy' onClick={handleSort}>
            Sort by: Name {sortBy}
          </button>
        </InfoBar>
        {filteredStudents.map((student) => {
          return (
            <Card>
              <Link to={`/students/${student.id}`}>
                <h3>{student.name}</h3>
              </Link>
              <p>{student.id}</p>
            </Card>
          );
        })}
      </StudentsContainer>
      {showRegister && (
        <Register students={students} setStudents={setStudents} />
      )}
    </Test>
  );
};

export default Students;
