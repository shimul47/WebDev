import TicketNum from "./TicketNum"

export default function Ticket({arr}){
    return(
        <div>
            {arr.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}