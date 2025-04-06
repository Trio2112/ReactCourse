const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onTurnComplete, turns}) {
    // NOTE: It's important to do a deep copy of the INITIAL_GAME_BOARD to avoid mutating the original array.
    // This is done using the spread operator and the map function to create a new array of arrays.
    // If you simply did "let gameBoard = INITIAL_GAME_BOARD", it would create a reference to the original array, and any changes made to gameBoard would also affect INITIAL_GAME_BOARD.
    // This is a common pitfall in JavaScript when dealing with arrays and objects, as they are reference types.
    let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])];

    turns.map(gameTurn => {
        gameBoard[gameTurn.square.rowIndex][gameTurn.square.columnIndex] = gameTurn.player;
    });

    // Alternate way instead of using "map" above is to do a for...of loop
    //for (const turn of turns) {
    //    gameBoard[turn.square.rowIndex][turn.square.columnIndex] = turn.player;
    //}
    
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((column, columnIndex) => (
                            <li key={columnIndex}>
                                <button onClick={() => onTurnComplete(rowIndex, columnIndex)} disabled={column !== null}>{column}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>  
    );
}