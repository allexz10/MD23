import React, { useEffect, useState } from 'react';

type Props = {
  title: string;
  style: string;
};

const Button: React.FC<Props> = ({ title, style }) => {
  const [buttonActive, setButtonActive] = useState(true);
  const [buttonCounter, setButtonCounter] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setButtonActive(false);
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  useEffect(() => {
    document.title = `${title} : ${buttonCounter}`;
  }, [buttonCounter]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setButtonActive(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
      setButtonActive(true);
    };
  }, [buttonCounter]);

  useEffect(() => {
    if (seconds <= 1000 && timerActive) {
      setTimeout(setSeconds, 1000, seconds + 1);
    } else {
      setTimerActive(false);
    }
  }, [seconds, timerActive]);

  return (
    <div>
      <button
        onClick={() => {
          setButtonCounter(buttonCounter + 1);
          setTimerActive(!timerActive);
        }}
        style={{
          color: buttonActive ? style : 'white',
          padding: '10px 30px',
          fontSize: '18px',
          background: buttonActive ? 'white' : style,
          cursor: 'pointer',
          width: '150px',
          border: 'none',
          boxShadow: '0px 1px 10px #cccccc',
          borderRadius: '8px',
        }}
        disabled={buttonActive}
      >
        {`${title} : ${buttonCounter}`}
      </button>
      <div className="timer">{seconds}</div>
    </div>

  );
};

export default Button;
