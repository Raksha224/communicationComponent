// ParentComponent.jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from parent');

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <p>{message}</p>
      <ChildComponent onMessageChange={handleMessageChange} />
    </div>
  );
};

export default ParentComponent;
