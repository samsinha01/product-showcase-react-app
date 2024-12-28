import { useState } from "react";

const ToggleButton = ()=>{
    
    let [isTurnOn,setTurnOn] = useState(false);
    function buttonTurn(){
        setTurnOn(!isTurnOn);
    }
    return(
        <>
            <p>{(isTurnOn===true)?"turn is On":"turn is Off"}</p>
            <button onClick={buttonTurn}>Button</button>
        </>
    )
}
export default ToggleButton;