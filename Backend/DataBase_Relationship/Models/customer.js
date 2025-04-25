const mongoose = require("mongoose");
const {Schema} = mongoose;

main()
    .then(() => console.log("connection succcessfull"))
    .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}
//One to few Relation

const orderSchema = new Schema ({
    item:String,
    price:Number,
});

customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref : "Order",
        },
    ],
});
const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async()=>{
    let customer1 = new Customer({
        name:"ShimulBhai",
    });

    let order1 = await Order.findOne({item:"Chips"});
    let order2 = await Order.findOne({item:"Samosa"});
    let order3 = await Order.findOne({item:"Choclate"});

    customer1.orders.push(order1);
    customer1.orders.push(order3);
    

    let res = await customer1.save();
    console.log(res);
}
addCustomer();

const addOrders = async()=>{
    let res = await Order.insertMany([
        {item:"Samosa",price:12},
        {item:"Chips",price:20},
        {item:"Choclate",price:50},
    ]);
    console.log(res);
};

addOrders();

const findCustomer = async ()=>{
    let result = await Customer.find({}).populate("orders");
    console.log(result);

};
findCustomer();