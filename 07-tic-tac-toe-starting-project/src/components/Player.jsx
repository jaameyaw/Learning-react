
import { useState } from "react";

export default function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(false)
    function isClicked() {
        setIsEditing(true)
    }

    return (
        <li>
            <span className="player">
              {isEditing? <input type="text" />: <span className="player-name">{name}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={isClicked}>Edit</button>
        </li>
    )
}