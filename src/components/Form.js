import React, { useState } from 'react';

export default function ({
  Question,
  currentQuestion,
  setCurrentQuestion,
  questionLength,
  dataObject,
}) {
  const [question, setQuestion] = useState('');
  const [data, setData] = useState([]);

  console.log('DataObject', dataObject);

  localStorage.setItem('answers', data);

  const handleChange = (event) => {
    console.log(question);
    setQuestion(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      console.log('enter press here! ', data);
      setData([...data, question]);
      setQuestion('');
      if (currentQuestion < questionLength)
        setCurrentQuestion(currentQuestion + 1);
    }
  };

  console.log('Data', data);

  return (
    <div>
      <input
        value={question}
        onChange={(event) => handleChange(event)}
        placeholder={Question}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}
