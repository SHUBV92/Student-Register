// packages
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Data
import StudentData from '../../studentsDataBase.json';
import filterStudents from '../../utils/filterStudents';

// component
import Card from '../../components/Card';
import SearchBar from '../../components/Search';
import Announcer from '../../components/Announcer';

// styles
import { StudentsContainer, InfoBar } from './Students.styles';

const Students = ({ students }) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredStudents = filterStudents(students, searchQuery);

  return (
    <StudentsContainer>
      <h2>Students</h2>;
      <Announcer message={`List has ${filteredStudents.length} posts`} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <InfoBar>
        <p>
          <strong>{filteredStudents.length} Students found</strong>
        </p>
        <div>
          <ul>
            <li>
              <Link to='/register'>Add a new Student</Link>
            </li>
          </ul>
        </div>
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
  );
};

export default Students;
