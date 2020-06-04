import React, { useState, useEffect } from 'react';

export const UseEffectHook: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>(' ');

  useEffect(() => {
    document.title = `Kliknąłeś ${count}`;
     return () => {
         document.title = "React App"
     }
  }, [count]);
  return (
    <div className="div-container">
      <h5>USE EFFECT</h5>
      <button
        onClick={(e) => {
          setCount(count + 1);
          setMessage('Zobacz w tytule strony ile razy kliknąłeś');
        }}
      >
        Kliknij na mnie kilka razy
      </button>
      <p>{message}</p>
    </div>
  );
};
