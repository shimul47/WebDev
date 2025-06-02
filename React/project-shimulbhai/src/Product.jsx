import "./Product.css"
import Price from "./Price1.jsx"
function Product({title,idx}){
    let oldPrices = ["11","12","13","14"];
    let newPrices = ["7","8","9","29"];
    let description = ["DPI : 4000","DPI : 4500","DPI : 3000"," DPI: 2500"];
    return( 
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;