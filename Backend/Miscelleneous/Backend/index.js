const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({extended:true}));//every time we need to use for post method
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Listening to port ${port}`);
});

app.get("/register",(req,res)=>{
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
});
app.post("/register", (req,res)=>{
    let {user, password} = req.body;
    res.send(`Standard POST response. Welcome ${user}!`);
    
});
