import React, { useState, useEffect } from 'react';
import React from "react";
import { FormatListNumbered } from '../../../../../node_modules/@material-ui/icons/index';


const Timer = (props) => {
   
    const time = Number(props.hours) + Number(props.minutes) + Number(props.seconds) * 60 * 60 * 60

    function FormatTime(time){

        const fromatedTime = new Date(time * 1000).toISOString().substring(11, 16)

        return fromatedTime


    }
    console.log(time);
    console.log(FormatTime(time))
    const done = FormatTime(time)
    console.log(done);
    const [seconds, setSeconds] = useState(time);
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

                setSeconds(seconds => seconds - 1);
                console.log(seconds)
                if (seconds === 1) {
                    clearInterval(interval);
                    setIsActive()
                    setIsActive(!isActive);

                }
            }, 1000);

        }


        else if (!isActive || seconds === 0) {
            console.log('cleared');
            console.log(seconds)
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (


        <div className="app">

            <div className="time">
                {seconds }s
            </div>
            <div className="row">
                <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                    {isActive ? 'Pause' : 'Start'}
                </button>
                <button className="button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;


