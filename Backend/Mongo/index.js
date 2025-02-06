const express = require("express");
const app = express();
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connected");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
let chat1 = new Chat({
    from:"Neha",
    to:"priya",
    msg:"send me",
    created_at:new Date()
});
chat1.save().then((res) =>{
    console.log(res);
});

const port = 8080;

app.get("/",(req,res)=>{
    res.send("Working")
})
app.listen(port,()=>{
    console.log(`App is Listening ${port}`);
});

