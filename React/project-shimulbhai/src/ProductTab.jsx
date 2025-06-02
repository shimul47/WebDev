import Product from "./Product";
function ProductTab(){
    let styles ={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",
    }
    return(
        <div style={styles}>
            
            <Product title='Logitech' idx={0} />
            <Product title='Apple Pencil' idx={1}/>
            <Product title='Magic Mouse' idx={2}/>
            <Product title='S-Pen' idx={3}/>
        </div>
    );
};

export default ProductTab;