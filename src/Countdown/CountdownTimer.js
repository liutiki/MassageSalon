import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    let now = new Date().getTime();
    let end = new Date();
    end.setTime(now + 24 * 60 * 60 * 1000); // Текущее время + 24 часа в миллисекундах

    let difference = end - now;
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <div>
        <span>{timeLeft.hours < 10 ? '0' + timeLeft.hours : timeLeft.hours}</span> :
        <span>{timeLeft.minutes < 10 ? '0' + timeLeft.minutes : timeLeft.minutes}</span> :
        <span>{timeLeft.seconds < 10 ? '0' + timeLeft.seconds : timeLeft.seconds}</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
