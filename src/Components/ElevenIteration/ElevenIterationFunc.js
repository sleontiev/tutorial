import React, { useState, useEffect, useRef } from 'react';
import classes from "./ElevenIterationClass.module.css";

function setDefaultTimer () {
    const localTimer = localStorage.getItem('timer');
    return localTimer ? +localTimer : 0;
}

export default () => {
    const [timer, setTimer] = useState(setDefaultTimer());
    const [countTimer, setCountTimer] = useState(true);
    const timerIdRef = useRef(null);

    const startTimer = () => {
        setCountTimer(false)
    }

    const stopTimer = () => {
        setCountTimer(true);
    }

    const resetTimer = () => {
        setTimer(0)
        setCountTimer(true);
    }

    useEffect(() => {
        localStorage.setItem('timer', timer)
    }, [timer])

    useEffect(() => {
        if(!countTimer) timerIdRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 100)
        return () => {
            clearInterval(timerIdRef.current);
        }
    }, [countTimer])

    return (
        <div>
            <div className={classes.ElevenIteration}>
                <h2>Таймер функционального компонента</h2>
                <p>{ timer }</p>
            </div>
            <div className={classes.Buttons}>
                { countTimer ?  <button onClick={startTimer}>Start</button> : <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}
