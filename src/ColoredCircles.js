import React from "react";
import { useState } from "react";
import Circle from "./Circle";
import ColoredButtons from "./ColoredButtons";

function ColoredCircles(){
    const [circles, setCircles] = useState(["indigo", "peachpuff",  "lavender"]);
    const addColor = (color)=>{setCircles(circles=>[...circles, color])};
    return(
        <div className = "ColoredCircles">
            <ColoredButtons addCircle = {addColor} colors = {["peachpuff", "lightsteelblue", "paleturquoise"]}/>
            {circles.map((c,i)=>(< Circle color={c} idx={i} key={i}/>))}
        </div>
    )
}

export default ColoredCircles;