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

let allChats = [
    {
        from:"Neha",
        to:"priya",
        msg:"send me",
        created_at:new Date()

    },
    {
        from:"Neha",
        to:"priya",
        msg:"send me",
        created_at:new Date()
    }
    
];

Chat.insertMany(allChats);