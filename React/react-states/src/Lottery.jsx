import { useState } from "react"
import "./ticket.css"
import { generateTicket, sum } from "./helper"
import Ticket from "./Ticket";
export default function Lottery({n=3,winningSum=15}){
    let [ticket,setTicket] = useState(generateTicket(n));
    let winning = false;
    let sum2 = sum(ticket);
    if (sum2 === winningSum){
        winning = true;
    }
    let regenerate = ()=>{
        setTicket(generateTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <h5>Winning Rules:</h5>
            <p>If the sum of numbers is equal to <b>{winningSum}</b> you will win.</p>
            <div className="TStyle">
                <Ticket arr={ticket}/>
                <h3>Your Total sum is : {sum2}</h3>
            </div>
            <br />
            <hr /><br />
            <button onClick={regenerate}>Buy Ticket</button>
            <h3>{winning && "Congratulation you won!"}</h3>
        </div>
    )
}