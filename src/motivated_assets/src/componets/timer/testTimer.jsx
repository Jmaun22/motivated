import React, { useEffect, useState } from "react";

const TestTimer = (props) => {

    console.log(props.seconds);
    console.log('TestTimer');

    const totalTimeinSeconds = Number(props.seconds) + (Number(props.minutes)) * 60 + (Number(props.hours) * 60 * 60)
console.log(totalTimeinSeconds);

  
  const [count, setCount] = useState(Number(totalTimeinSeconds)); // seconds
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  function secondsToTime(secs) {
    var hours = Math.floor(secs / (60 * 60));
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    return {
      h: hours,
      m: minutes,
      s: seconds
    };
  }
  useEffect(() => {
    if (count >= 0 && isActive) {
      const secondsLeft = setInterval(() => {
        setCount((c) => c - 1);
        let timeLeftVar = secondsToTime(count);
        setHour(timeLeftVar.h);
        setMinute(timeLeftVar.m);
        setSecond(timeLeftVar.s);
      }, 1000);
      return () => clearInterval(secondsLeft);
    } else {
      console.log("timeout");
    }
  }, [count]);


  const [seconds, setSeconds] = useState(count);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
}

function reset() {
    setSeconds(0);
    setIsActive(false);
}

useEffect(() => {
    let interval = null;
    if (isActive) {
        interval = setInterval(() => {

            setCount(count => count - 1);
            console.log(seconds)
            if (seconds === 1) {
                clearInterval(interval);
                setIsActive()
                setIsActive(!isActive);

            }
        }, 1000);

    }


    else if (!isActive || count === 0) {
        console.log('cleared');
        console.log(seconds)
        clearInterval(interval);
    }
    return () => clearInterval(interval);
}, [isActive, count]);


  return (
    <>
      <h1>
        {hour < 9 ? "0" + hour : hour} : {minute < 9 ? "0" + minute : minute} :
        {second < 9 ? "0" + second : second}
      </h1>
      <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
    </>
  );
}

export default TestTimer;

