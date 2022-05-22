import React, { useEffect, useState } from "react";
import { ExploreOffOutlined } from "../../../../../node_modules/@material-ui/icons/index";
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleIcon from '@material-ui/icons/PauseCircleOutline';

const TestTimer = (props) => {



    // working min
    // Number(props.seconds);

    var counter = 0;
    const workingMin =  Number(props.seconds);

    const shortBreakMin = (Number(props.minutes));;
    // (Number(props.minutes));

    const longBreakMin = (Number(props.hours));
    // (Number(props.hours));


    // short break

    // long break
    // var workSec = workingMin * 60 
    const workSec = workingMin * 60;
    const shortBreakSec = shortBreakMin * 60;
    const longBreakSec= longBreakMin * 60;


//     const totalTimeinSeconds = Number(props.seconds) + (Number(props.minutes)) * 60 + (Number(props.hours) * 60 * 60)
// console.log(totalTimeinSeconds);

  
const [count, setCount] = useState(Number(workSec)); // seconds
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [sessionType, setSession] = useState('Click start to get started')
  const [reps, setReps] = useState(0)

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
    } else if(!isActive){
        console.log('when will you work?');
        console.log('not active');
    }
    
    else if(isActive){

        if(counter === 2){
            console.log('yikes');
        } else{
            console.log('maybe its working');
            ++counter
            setReps(reps + 1)
            swithTimer(reps)
            console.log('first reps' + reps);
        }
     
   
        console.log('active');
        console.log(reps + 'why you not work');
        console.log(isActive);
        console.log(count);
        console.log(counter + 'counter');
     

   
       
      
        }
  }, [count, reps]);




  const [seconds, setSeconds] = useState(count);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
}

function reset() {
    setSeconds(0);
    setIsActive(false);
}

var done = false;

function swithTimer(reps) {

    if(reps % 8 == 0){
        setCount(longBreakSec);
        setSession('long Break')
        console.log('2');
     
    }else if(reps % 2 == 0){
        setCount(shortBreakSec);
        setSession('short break');

        console.log('counting');

    } else {
        setCount(workSec);
        setSession('working');
    }

}

useEffect(() => {
    let interval = null;
    if (isActive) {
        interval = setInterval(() => {

            setCount(count => count - 1);
            // 
            console.log(seconds + 'is this it?')
            if (seconds === 1) {

                if(!done){
                    setReps(reps + 1)
                    swithTimer(reps)
                    console.log('reps 2 ' + reps);
                    counter++
                    swithTimer(counter)
                }
                else{
                    ++counter
                clearInterval(interval);
                setIsActive()
                setIsActive(!isActive);
                }

            }
        }, 1000);

    }


    else if (!isActive || count === 0 && done) {
        console.log('cleared');
        console.log(seconds + 'seconds')
        clearInterval(interval);
    }

    return () => clearInterval(interval);
}, [isActive, count]);






  return (
    <>
    <h2> { sessionType}: {reps}</h2>
      <h1>
        {hour < 9 ? "0" + hour : hour} : {minute < 9 ? "0" + minute : minute} :
        {second < 9 ? "0" + second : second}
      </h1>
      <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle} style={{backgroundColor: 'transparent', border: 'transparent', }}>
                    {isActive ? <PauseCircleIcon style={{fontSize: '50', color: '#0ae0f4'}}/> :   <PlayCircleOutlineIcon style={{fontSize: '50', color: '#0ae0f4'}}/>}
                </button>
              
            </div>
            
         
    </>
  );
  }

export default TestTimer;

