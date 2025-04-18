import { useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const [timerStartedState, setTimerStartedState] = useState(false);
    const [timerExpiredState, setTimerExpiredState] = useState(false);

    function handleStart() {
        setTimerStartedState(true);

        setTimeout( () => {
            setTimerExpiredState(true);
        }, targetTime * 1000);
    }

    function handleStop() {
    }
    
    return (
        <section className="challenge">
            <h2>{title}</h2>
            { timerExpiredState && <p>You lost!</p> }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStartedState ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStartedState ? 'active' : undefined}>
                {timerStartedState ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
}