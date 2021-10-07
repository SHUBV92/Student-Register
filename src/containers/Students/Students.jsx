import React from 'react';
import StudentData from '../../studentsDataBase.json';

// component
import Card from '../../components/Card';

const Students = () => {
  return (
    <div>
      <h2>Students</h2>;
      {StudentData.map((student) => {
        return (
          <Card>
            <h3>{student.name}</h3>
            <p>{student.id}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Students;
