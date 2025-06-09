import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [todo , setTodo] = useState([{task:"Sample Task",id:uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prev) =>{
            return ([...prev,{task:newTodo,id:uuidv4()}])
        });
        setNewTodo("");
    }
    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id)=>{
        setTodo(todo.filter((i)=> i.id!=id))
    }
    let upperCaseTodo = (id) =>{
        setTodo((prev) =>
            prev.map((i) =>{
                if(i.id == id){
                    return{
                        ...i,
                        task:i.task.toUpperCase()
                    }
                }else{
                    return i
                }
            })
         )
    }

    return(
        <div>
            <h3>Todo List</h3>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add </button>              
            <h3>List :</h3>
            <hr />
            <ul>
                {
                    todo.map((i)=>(
                        <li key={i.id}>
                            <span>{i.task}</span>&nbsp;&nbsp;
                            <span><button onClick={()=>deleteTodo(i.id)}>Delete</button></span>
                            <span><button onClick={()=>upperCaseTodo(i.id)}>UpperCase</button></span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}