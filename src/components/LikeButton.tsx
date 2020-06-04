import React, { useState } from 'react';

export const LikeButton: React.FC = () => {
  const [message, setMessage] = useState<string>('Jeśli Ci się podobało, zalajkuj poniżej.');
  const [buttonString, setButtonString] = useState<string>('Lubię to!');

  return (
    <div className="div-container">
      <h5>LIKE BUTTON</h5>
      <div className="div-container">
        <p>{message}</p>
        <button
          onClick={(e) => {
            setMessage('Dziękuję za lajka');
            setButtonString('Lubisz to!');
          }}>
          {buttonString}
        </button>
      </div>
    </div>
  );
};
