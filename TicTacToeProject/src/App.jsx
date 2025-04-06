import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import { useState } from 'react';

function deriveActivePlayer(previousGameTurns) {
  if (previousGameTurns.length === 0) {
    return 'X';
  } else {
    return previousGameTurns[0].player === 'X' ? 'O' : 'X';
  }
}

function determineWinner(gameTurns) {
  for (const winningCombination of WINNING_COMBINATIONS) {
    const turn1 = gameTurns.find(turn => turn.square.rowIndex === winningCombination[0].row && turn.square.columnIndex === winningCombination[0].column);
    const turn2 = gameTurns.find(turn => turn.square.rowIndex === winningCombination[1].row && turn.square.columnIndex === winningCombination[1].column);
    const turn3 = gameTurns.find(turn => turn.square.rowIndex === winningCombination[2].row && turn.square.columnIndex === winningCombination[2].column);
    if (turn1 && turn2 && turn3) {
      if (turn1.player === turn2.player && turn2.player === turn3.player) {
        return turn1.player;
      }
    }
  }
  return null;
}

function App() {
  const PLAYERS = {
    'X': 'Player 1',
    'O': 'Player 2'
  };
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);
  const winner = determineWinner(gameTurns);
  const isDraw = gameTurns.length === 9 && winner === null;
 
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

  function handleResetGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayerName(previousPlayerName => {
      return {
        ...previousPlayerName,
        [symbol]: newName // Use computed property name to update the specific player. This is special javascript syntax to dynamically set a property.
      };
    });
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name={PLAYERS.X} symbol="X" activePlayer={activePlayer} onChangeName={handlePlayerNameChange} />
        <Player name={PLAYERS.O} symbol="O" activePlayer={activePlayer} onChangeName={handlePlayerNameChange}/>
      </ol>
      {(winner || isDraw) && <GameOver winner={playerName[winner]} onRestart={handleResetGame} />}
      <GameBoard onTurnComplete={onTurnComplete} turns={gameTurns} />
      </div>
    LOG
    <Log logDetails={gameTurns} />
    </main>
  )
}

export default App
