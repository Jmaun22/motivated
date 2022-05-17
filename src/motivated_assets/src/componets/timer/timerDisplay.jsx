import React, {useEffect, useState} from "react";


const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

useEffect(() => {

    const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
    }, 1000);

    return() => clearTimeout(timer);
});


const timerComponents = [];

Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
        return;
    }

    timerComponents.push(
        <span>
            {timeLeft[interval]} {interval}{" "}
        </span>
    );
});


export default timerDisplay