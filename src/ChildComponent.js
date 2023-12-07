// ChildComponent.jsx
import React, { useState } from 'react';

const ChildComponent = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    props.onMessageChange(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Update Message</button>
    </div>
  );
};

export default ChildComponent;
