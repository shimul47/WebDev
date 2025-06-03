function handleSubmit(event){
    event.preventDefault();
    console.log("form was submitted")
}
export default function Form(){
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Input something" />
            <button>Submit</button>
        </form>
    )
}