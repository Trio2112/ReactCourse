import { useState} from 'react';

export default function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick()
    {
      setIsEditing((editing) => !editing);
    }

    function handleNameChange(event)
    {
      setPlayerName(event.target.value);
    }

    return (
        <li>
          <span className="player">
            { !isEditing && (<span className="player-name">{playerName}</span>) }
            { isEditing && (<input type="text" required value={playerName} onChange={handleNameChange} />) }
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{!isEditing ? 'Edit' : 'Save'}</button>
        </li>
    );
}