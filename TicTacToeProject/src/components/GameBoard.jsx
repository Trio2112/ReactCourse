const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onTurnComplete, turns}) {
    let gameBoard = initialGameBoard;

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