import React, { useState } from 'react';

export const MessageButton: React.FC = () => {
  const [message, setMessage] = useState('****');

  return (
    <div className="div-container">
      <h5>HIDEN MESSAGE BUTTON</h5>
      
        <button onClick={() => setMessage('REACT')}>Kliknij, by zobaczyć hasło dnia</button>
        <p>{message}</p>
      
    </div>
  );
};
