import React, { useState, useEffect, useCallback } from 'react';

import './Countdown.css';

const CountdownTimer = ({ targetDate }) => {

  const calculateTimeLeft = useCallback(() => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  }, [targetDate]);
  

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
<div className='timer'>
    <div className="saleContainer">
      <div className='salePosition'>
      <p>Купон на SPA</p>
      <p className="twenty">-25%</p>
      </div>

     <div>
      <div className="expirePosition">
        <p className="expire">Истекает через</p>
      </div>
    <div className="timePosition">
      <p className="time"> {timeLeft.hours}</p>
      <p>:</p>
      <p className="time">{timeLeft.minutes}</p>
      <p>:</p>
      <p className="time">{timeLeft.seconds}</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CountdownTimer;
