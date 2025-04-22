import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();
    
    const [timeRemainingState, setTimeRemainingState] = useState(targetTime * 1000);
    const timerIsActive = timeRemainingState > 0 && timeRemainingState < targetTime * 1000;

    if (timeRemainingState <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart() {
        timer.current = setInterval( () => {
            setTimeRemainingState(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleReset() {
        setTimeRemainingState(targetTime * 1000);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemainingState} onReset={handleReset}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}