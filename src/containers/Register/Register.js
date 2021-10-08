import React from 'react';
import Form from '../../components/Form';

const Register = () => {
  const register = async () => {
    // await writeJsonFile('foo.json', { foo: true });
  };

  return (
    <div>
      <h2>Register</h2>;
      <Form />
      <button onClick={register}>Register student</button>
    </div>
  );
};

export default Register;
