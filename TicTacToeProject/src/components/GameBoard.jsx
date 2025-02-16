import { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleGameBoardClick(rowIndex, columnIndex) {
        // You must make a copy of the current state to keep the old state immutable.
        // Not doing so can lead to weird bugs.
        // See: https://academind.com/tutorials/reference-vs-primitive-values
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][columnIndex] = 'X';
            return updatedGameBoard;
        });
    }
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => handleGameBoardClick(rowIndex, columnIndex)}>{column}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>  
    );
}