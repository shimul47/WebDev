import {useState} from "react";

export default function Counter(){
    let [count,setCount] = useState(0);
    // console.log(arr)
    let inCount = ()=>{
        setCount(count+1)
    }
    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Count</button>
        </div>
    );
}