import Form from '../../components/Form';
import { RegisterContainer } from './Register.styles';

const Register = ({ students, setStudents }) => {
  const addStudent = (text) => {
    console.log('student added');
    console.log(text);
    const newStudent = [
      ...students,
      { name: text, id: Math.floor(Math.random() * 100).toString() },
    ];
    setStudents(newStudent);

    // Use UUID library
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <Form addStudent={addStudent} />
    </RegisterContainer>
  );
};

export default Register;
