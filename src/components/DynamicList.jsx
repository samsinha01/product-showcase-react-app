import { useState } from "react";
import DynamicListInput from "./ListInputHandle";

const DynamicList = ()=>{
    let [data,setData] = useState([]);
    
    function setItem(item){
        setData([...data,item]);
        
    }
    console.log(data);
    
    return(
        <>
            <DynamicListInput setItem={setItem}/>

            <ul>
                {data.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        </>
    )
}

export default DynamicList;