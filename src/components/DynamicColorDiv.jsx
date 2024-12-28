import { useState } from "react";
import InputFieldHandling from "./InputFieldHandling";

const DynamicColorDiv = ()=>{

    let [color,setColor] = useState(null);

    function getColor(getVal){
        setColor(getVal);        
    }
    return(
        <>
            <div
            className="colorDiv"
            style={{background:`${color}`}}>

            </div>
            <InputFieldHandling getColor={getColor}/>
        </>
    )
}

export default DynamicColorDiv;