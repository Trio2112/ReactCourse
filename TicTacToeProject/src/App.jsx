import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import { useState } from 'react';

function deriveActivePlayer(previousGameTurns) {
  if (previousGameTurns.length === 0) {
    return 'X';
  } else {
    return previousGameTurns[0].player === 'X' ? 'O' : 'X';
  }
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  
  function onTurnComplete(rowIndex, columnIndex) {
    setGameTurns(previousGameTurns => {
      const updatedTurns = [
        {
          square: {
            rowIndex: rowIndex,
            columnIndex: columnIndex
          },
          player: deriveActivePlayer(previousGameTurns)
        },
        ...previousGameTurns
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" activePlayer={activePlayer} />
        <Player name="Player 2" symbol="O" activePlayer={activePlayer} />
      </ol>
      <GameBoard onTurnComplete={onTurnComplete} turns={gameTurns} />
      </div>
    LOG
    <Log logDetails={gameTurns} />
    </main>
  )
}

export default App
