import { useState } from 'react';
import { Link } from 'react-router-dom';

import StudentData from '../../studentsDataBase.json';
import filterStudents from '../../utils/filterStudents';

// component
import Card from '../../components/Card';
import Search from '../../components/Search';

const Students = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredStudents = filterStudents(StudentData, searchQuery);

  return (
    <div>
      <h2>Students</h2>;
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredStudents.map((student) => {
        return (
          <Card>
            <Link>
              <h3>{student.name}</h3>
            </Link>
            <p>{student.id}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Students;
