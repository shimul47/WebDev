import { useState } from "react"

export default function Forms(){
    // let [name,setName] = useState("")
    // let [username,setUsername] = useState("")

    // let handleNameChange = (event)=>{
    //     setName(event.target.value)
    // }
    // let handleUserName = (event)=>{
    //     setUsername(event.target.value)
    // }
    let [formData, setFormData] = useState({name:"",username:"",password:""})
    let handleInputChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        setFormData((curr)=>{
            curr[name] = value;
            return{...curr}
        })

    }
    let handleSubmit = (event)=>{
        event.preventDefault();
        setFormData({
            name:"",
            username:"",
            password:""
        })
    }   
    return(
        <form onClick={handleSubmit}>
            <label htmlFor="fullname">Full name : </label>
            <input type="text" placeholder="Write something" value={formData.name} id="fullname" name="name" onChange={handleInputChange}/><br /><br />
            <label htmlFor=" username">User Name : </label>
            <input type="text" placeholder="Write something" value={formData.username} id="username" name="username" onChange={handleInputChange}  /><br /><br />
            <label htmlFor="password">Password : </label>
            <input type="password" placeholder="Write something" value={formData.password} id="username" name="password" onChange={handleInputChange} /><br /><br />
            <button>Submit</button>
        </form>
    )
}