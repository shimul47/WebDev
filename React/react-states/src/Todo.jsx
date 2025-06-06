import { useState } from "react"
export default function Todo(){
    let [todo , setTodo] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo([...todo,newTodo]);
        setNewTodo("");
    }
    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }


    return(
        <div>
            <h3>Todo List</h3>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add </button>
            <br/>
            
            <h3>List :</h3>
            <hr />
            <ul>
                {
                    todo.map((i)=>(
                        <li>{i}</li>
                    ))
                }
            </ul>
        </div>
    )
}