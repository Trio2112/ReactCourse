import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function onTurnComplete() {
    setActivePlayer((previousPlayer) => {
      return previousPlayer === 'X' ? 'O' : 'X';
    })
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
        <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
      </ol>
      <GameBoard onTurnComplete={onTurnComplete} activePlayer={activePlayer} />
      </div>
    LOG
    </main>
  )
}

export default App
