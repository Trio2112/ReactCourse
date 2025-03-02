export default function Log({logDetails}) {
    return (
        <ol id="log">
            {logDetails.map(logDetail => 
                <li key={`${logDetail.square.rowIndex}${logDetail.square.columnIndex}`}>{logDetail.player} selected {logDetail.square.rowIndex}, {logDetail.square.columnIndex}</li>
            )};
        </ol>
    );
}