import { useState } from "react"
export default function LudoBoard(){
    let [moves,setMoves] = useState({blue:1,red:1,yellow:1,green:1 })
    let updateBlue = ()=>{
        setMoves((moves)=>{
            return {...moves,blue:moves.blue+1}
        });
    }
    let updateGreen = ()=>{
        setMoves((moves)=>{
            return {...moves,green:moves.green+1}
        });
    }
    let updateYellow = ()=>{
        setMoves((moves)=>{
            return {...moves,yellow:moves.yellow+1}
        });
    }
    let updateRed = ()=>{
        setMoves((moves)=>{
            return {...moves,red:moves.red+1}
        });
    }
    return(
        <div>
            <p>Game begins</p>
            <div className="board">
                <p>Blue Moves = {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
                <p>Yellow Moves = {moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Red Moves = {moves.red}</p>
                <button style={{backgroundColor:"red"} }onClick={updateRed}>+1</button>
                <p>Green Moves = {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    )
}