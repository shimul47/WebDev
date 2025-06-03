function printHello(){
    console.log("Hello")
};
function bye(){
    console.log("Bye")
}
function dblClick(){
    console.log("Double Clicked")
}
export default function Button(){
    console.log("click me")
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={bye}>This is for demo Hover</p>
            <button onDoubleClick={dblClick}>Double clickl</button>

        </div>
    )
}