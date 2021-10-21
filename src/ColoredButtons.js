import React from "react";
import "./ColoredButtons.css"
import ColoredButton from "./ColoredButton";

const ColoredButtons = ({colors, addCircle})=>{
    console.log(colors);
    return (
        <div className="ColoredButtons">
            {colors.map(c=>
                <ColoredButton color={c} addCircle={addCircle} />
            )}
        </div>
    )
}

export default ColoredButtons;