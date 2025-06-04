import { useState } from "react";

export default function LikeButton(){
    let [like,setLike] = useState(false);
    let [count,setCount] = useState(0);
    let toggle = ()=>{
        setLike(!like)
        setCount(count+1)
    }
    let color = {
        color:"red",
    }
    return(
        <div>
            <p>Click = {count}</p>
            <p onClick={toggle}>
                {like?(<i className="fa-solid fa-heart"style={color}></i>):(<i className="fa-regular fa-heart"></i>)}
            </p>
        </div>
    )
}
