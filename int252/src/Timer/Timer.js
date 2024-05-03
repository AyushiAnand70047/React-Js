import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  // useEffect hook to update the timer every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means the effect runs only once after the initial render

  return (
    <div style={{ textAlign : 'center'  , marginTop: '10px' }}>
      <h2>Timer using Use-Effect</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

export default Timer;
