import React, { useState } from 'react';

const Form = ({ addStudent }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addStudent(name);
      setName('');
      alert('Student added');
    }
  };

  return (
    <form>
      <input
        value={name}
        onChange={(event) => handleChange(event)}
        placeholder={name}
        onKeyPress={handleKeyPress}
      />
    </form>
  );
};

export default Form;
