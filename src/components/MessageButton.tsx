import React, { useState } from 'react';

export const MessageButton: React.FC = () => {
  const [message, setMessage] = useState('****');

  return (
    <div>
      <h3>Kliknij w przycisk, a odkryjesz hasło => {message}</h3>
      <div className="div-container">
        <button onClick={() => setMessage('REACT')}>KLIKNIJ</button>
      </div>
    </div>
  );
};
