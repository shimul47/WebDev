//Embedded javascript templates
const express = require("express");
const path = require("path");

const app = express();
const port = 8080;
app.use(express.static(path.join(__dirname,"public")));

app.set("View Engine", "ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/hello",(req,res)=>{
    res.send("hello");
});

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1
    res.render("rolldice.ejs",{diceVal});//value came from Database and then we use it on ejs file

});

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require ("./data.json");
    const data = instaData[username];
    if (data){
        res.render("instagram.ejs",{data });
    }else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`Listen on port ${port}`);
});

//Interpolation syntax -->embedding expressing go to ejs.co then tags

