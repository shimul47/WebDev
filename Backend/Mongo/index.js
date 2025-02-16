const express = require("express");
const app = express();
const path = require("path");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));

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

app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
})
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs")
})
app.post("/chats",(req,res)=>{
    let {from,to,msg} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });
    newChat.save().then(res =>{
        console.log("Chat was saved");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
});


const port = 8080;

app.get("/",(req,res)=>{
    res.send("Working")
})
app.listen(port,()=>{
    console.log(`App is Listening ${port}`);
});

