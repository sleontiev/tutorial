import React, { useState, useEffect, useRef } from 'react';
import classes from "./ElevenIterationClass.module.css";

function setDefaultTimer ():number {
    const localTimer: string | null = localStorage.getItem('timer');
    return localTimer ? +localTimer : 0;
}

export default () => {
    const [timer, setTimer] = useState<number>(setDefaultTimer());
    const [countTimer, setCountTimer] = useState<boolean>(true);
    const timerIdRef:React.MutableRefObject<any> = useRef(null);

    const startTimer: () => void = () => {
        setCountTimer(false)
    }

    const stopTimer: () => void = () => {
        setCountTimer(true);
    }

    const resetTimer: () => void = () => {
        setTimer(0)
        setCountTimer(true);
    }

    useEffect(() => {
        localStorage.setItem('timer', String(timer))
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
                <p>{ timer }</p>
            </div>
            <div className={classes.Buttons}>
                { countTimer ?  <button onClick={startTimer}>Start</button> : <button onClick={stopTimer}>Stop</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    )
}
