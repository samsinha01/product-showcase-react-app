import { useState } from "react";

const CounterApp = ()=>{

    let [count,setCount] = useState(0);
    function increment(count){
        setCount(++count);
    }
    function decrement(count){
        setCount(--count);
    }
    return(
        <>
            <p>{count}</p>

            <button onClick = {()=>increment(count)}>Increment</button>
            <button onClick={()=>{decrement(count)}}>Decrement</button>
        </>
    )
}
export default CounterApp;