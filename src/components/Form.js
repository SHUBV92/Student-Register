import React, { useState } from 'react';

export default function ({ addStudent }) {
  const [name, setName] = useState('');

  // localStorage.setItem('answers', name);
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addStudent(name);
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
}
