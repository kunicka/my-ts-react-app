import React, { useState, useEffect } from 'react';

export const TimerHooks = () => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h3>Hook Timer: {date.toLocaleString()}</h3>
    </div>
  );
};
