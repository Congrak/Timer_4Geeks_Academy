import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [start, setStart] = useState(false)

  let timer

  useEffect(() => {
    if (setStart) {
      timer = setInterval(() => {
        setSeconds(seconds + 1);
        if (seconds == 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        }
        if (minutes == 59) {
          setHours(hours + 1);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    }
    return () => clearInterval(timer);


  }, [start]);

  const reset = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  const stop = () => {
    clearInterval(timer)
  }

  return (
    <div className="timer">
      <h1>
        {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <button className="reset" onClick={reset}>Reset</button>
      <button className="stop" onClick={stop}>Stop</button>
      <button className="start" onClick={() => { setStart(true) }}>Start</button>
    </div>

  );
};

export default Timer;
