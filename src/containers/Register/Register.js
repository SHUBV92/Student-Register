import { useState } from 'react';
import Form from '../../components/Form';

const Register = ({ students, setStudents }) => {
  const addStudent = (text) => {
    console.log('student added');
    const newStudent = [
      ...students,
      { name: text, id: Math.floor(Math.random() * 100).toString() },
    ];
    setStudents(newStudent);
  };

  const register = async () => {
    // await writeJsonFile('foo.json', { foo: true });
  };

  console.log('Add to students', students);

  return (
    <div>
      <h2>Register</h2>;
      <Form addStudent={addStudent} />
      <button onClick={register}>Register student</button>
    </div>
  );
};

export default Register;
