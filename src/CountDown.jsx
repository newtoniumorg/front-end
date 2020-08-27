import React, { useState, useEffect } from 'react';

const calculateTimeLeft = () => {
  const difference = +new Date('Sat, 23 Aug 2020 01:30:00 UTC') - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

function CountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    //cleanup
    return () => clearTimeout(timer);
  });

  const renderComp = () => {
    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
      //   if (!timeLeft[interval]) {
      //     return;
      //   }

      timerComponents.push(timeLeft[interval]);
    });
    if (timerComponents.length < 1) {
      return (
        <a
          href="https://www.unicrypt.network/uniswap-browser/pair/0x0f94d105556969c4b81F342b2513f568bcc7a424"
          target="_blank"
          rel="noreferrer noopener"
        >
          Liquidity Locked: Check here
        </a>
      );
    }

    // console.log(timerComponents);
    return (
      <span>
        {timerComponents[0]} : {timerComponents[1]} : {timerComponents[2]} :{' '}
        {timerComponents[3]}
      </span>
    );
  };

  return (
    <div className="count-down">
      <p>LIQUIDITY Locked in:</p>
      {renderComp()}
    </div>
  );
}

export default CountDown;
