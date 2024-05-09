import { useState } from "react";

export default function Player ({name,symbol}) {
    const [isEditing,setIsEditing] = useState(false)
    const [playerName,setPlayerName] = useState(name)
    function handleEditClick() {
        //Not Good
        //setIsEditing(!isEditing)
        setIsEditing(editing => !editing )
    }
    function handleChange(e) {
        setPlayerName(e.target.value)
    }
    let editPlayerName = isEditing == true ? <input type="text" required value={playerName} onChange={handleChange}></input> :  <span className="player-name">{playerName}</span>
    return (
        <li>
        <span className="player">
         {editPlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing == true? "Save": "Edit"}</button>
        </li>
    );
}