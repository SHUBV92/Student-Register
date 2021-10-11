import React, { useState } from 'react';

export default function ({ addStudent }) {
  const [name, setName] = useState('');
  const [data, setData] = useState([]);

  localStorage.setItem('answers', data);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ', data);
      setData(name);
      addStudent(data);
    }
  };

  return (
    <div>
      <input
        value={name}
        onChange={(event) => handleChange(event)}
        placeholder={name}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
