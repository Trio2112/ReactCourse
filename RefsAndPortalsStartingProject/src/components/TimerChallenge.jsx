import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    const [timerStartedState, setTimerStartedState] = useState(false);
    const [timerExpiredState, setTimerExpiredState] = useState(false);

    function handleStart() {
        setTimerStartedState(true);

        timer.current = setTimeout( () => {
            setTimerExpiredState(true);
            dialog.current.open();
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }
    
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
            <section className="challenge">
                <h2>{title}</h2>
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
        </>
    );
}