import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const [timerStartedState, setTimerStartedState] = useState(false);
    const [timerExpiredState, setTimerExpiredState] = useState(false);

    function handleStart() {
        setTimerStartedState(true);

        timer.current = setTimeout( () => {
            setTimerExpiredState(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    
    return (
        <section className="challenge">
            <h2>{title}</h2>
            { timerExpiredState && <p>You lost!</p> }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStartedState ? handleStop : handleStart}>
                    {timerStartedState ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStartedState ? 'active' : undefined}>
                {timerStartedState ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}