import React from "react";
import "./ColoredButton.css";

const  ColoredButton = ({color, addCircle})=>{
    return (
        <button 
        className="ColoredButton-btn" 
        style={{backgroundColor:color}} 
        onClick={()=>addCircle(color)}
        >
            {color}
        </button>
    )
}

export default ColoredButton;
