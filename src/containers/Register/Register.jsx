import Form from '../../components/Form/Form';
import { RegisterContainer } from './Register.styles';

const Register = ({ students, setStudents }) => {
  const addStudent = (text) => {
    const newStudent = [
      ...students,
      { name: text, id: Math.floor(Math.random() * 100).toString() },
    ];
    setStudents(newStudent);
  };

  return (
    <RegisterContainer>
      <h2>Register</h2>
      <Form addStudent={addStudent} />
    </RegisterContainer>
  );
};

export default Register;
