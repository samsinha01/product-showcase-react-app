import { useState } from "react";

const DynamicListInput = ({setItem})=>{
    let [inputVal, setInputVal] = useState("");
    function getData(e){
        let {value} = e.target;
        setInputVal(value);
    }
    function addData(){
        setItem(inputVal);
        setInputVal("");
    }

    return(
        <>
            <input
                type="text"
                placeholder="Enter Item Name"
                value={inputVal}
                onChange={getData}
            />
            <button
            className="py-1 px-2 border bg-success text-white mx-2"
            onClick={addData}>
                Add
            </button>
        </>
    );
}

export default DynamicListInput;