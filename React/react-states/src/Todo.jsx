import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [todo , setTodo] = useState([{task:"Sample Task",id:uuidv4(),isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = ()=>{
        setTodo((prev) =>{
            return ([...prev,{task:newTodo,id:uuidv4(),isDone:false}])
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
    let markAsDone = (id)=>{
        setTodo((prev) =>
            prev.map((i) =>{
                if(i.id == id){
                    return{
                        ...i,
                        isDone:true
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
            <h3>Task ToDo :</h3>
            <hr />
            <ul>
                {
                    todo.map((i)=>(
                        <li key={i.id}>
                            <span style={i.isDone?{textDecorationLine:"line-through"}:{}}>{i.task}</span>&nbsp;&nbsp;
                            <span><button onClick={()=>deleteTodo(i.id)}>Delete</button></span>
                            <span><button onClick={()=>upperCaseTodo(i.id)}>UpperCase</button></span>
                            <span><button onClick={()=>markAsDone(i.id)}>Done</button></span>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}