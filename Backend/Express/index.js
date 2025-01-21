//listen for incoming request
//pass those request
//match response with routes
//NPM package

const express = require("express");
const app = express();

// console.dir(app);


let port = 3000;

app.listen(port, ()=>{
    console.log(`The port is listining on port :${port}`);
});
//once we run our server it will not stop automatically so we have to 
//press ctrl+c to stop the server

//app.use --> listen all request and callback

// app.use((req,res)=>{
//     console.log(req);
//     console.log("Request received");
//     // res.send({
//     //     fruit:"apple",
//     //     color:"red",
        
//     // });
//     let html_code="<h1>Fruit</h1><ul><li>Apple</li><li>Orange</li></ul>"
//     res.send(html_code);
// });
app.get("/",(req,res)=>{
    res.send("You contacted root path");
});
// app.get("/apple",(req,res)=>{
//     res.send("You contacted Apple path");
// });
// app.get("/orange",(req,res)=>{
//     res.send("You contacted Orange path");
// });
// app.get("*",(req,res)=>{
//     res.send("hahaha");
// });
app.get("/:username/:id",(req,res)=>{
    let {username,id} = req.params;
    res.send(`<h1>Welcome to the page ${username}</h1><h3> Your id is ${id}</h3>`);
});
//Node mon -> automatically restart server

//queary string  ::::

app.get("/search", (req,res)=>{
    let {q} = req.quary;
    if (!q){
        res.send(`<h1>Nothing searched</>`);
    }
    res.send(`Search result for quary:${q}`);
});


