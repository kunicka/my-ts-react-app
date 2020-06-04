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
    <div className="div-container">
      <h5>HOOK TIMER: </h5>
      <p>{date.toLocaleString()}</p>
    </div>
  );
};
