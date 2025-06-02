export default function Price({oldPrice ,newPrice}){
    let oldStyle = {
        textDecoration:"line-through",
    }
    let newStyle = {
        fontWeight:"bold",
        fontSize:"20px"
    }
    return(
        <div>
            <span style={oldStyle}>Old Price:{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>New Price:{newPrice}</span>
        </div>
    );
}