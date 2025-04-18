import { useState, useRef } from 'react';

export default function Player() {
  const playerName = useRef();
  const [playerNameState, setPlayerNameState] = useState('unknown entity');

  function handleClick() {
    setPlayerNameState(playerName.current.value);
  }
  
  return (
    <section id="player">
      <h2>Welcome { playerNameState ?? "unknown entity" }</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
