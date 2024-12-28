import { useState } from "react"

const HideShow = ()=>{
    let [isVisible,setVisible] = useState(false);
    function contentVisibility(){
        setVisible(!isVisible);
    }
    return(
        <>
            <button onClick={contentVisibility}>{isVisible?"hide":"show"}</button>
            {isVisible && <p>hello guyz</p>}  {/* conditional rendering technique */}
        </>
    )
}

export default HideShow;