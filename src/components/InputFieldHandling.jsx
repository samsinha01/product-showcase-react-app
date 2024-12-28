import { useState } from "react";

const InputFieldHandling = ({getColor})=>{

    let [colorInp,setColorInp] = useState("");

    function inputColor(e){
        let {value} = e.target;
        setColorInp(value);
        getColor(value);       
    }
    
    return(
        <>
            <div className="form-group">
                <input 
                    type="text"
                    placeholder="Enter Color Name"
                    className="form-control alert alert-danger fs-5"
                    value={colorInp}
                    onChange={inputColor}
                />
            </div>
            
        </>
    )
}

export default InputFieldHandling;