const express = require("express");
const app = express();

//middleware
app.use((req,res,next)=>{
    console.log("I'm middleware");
    // res.send("Middleware finished");
    next();
    console.log("This is after next")//not a sign of a good programmer to write something after next....

});
app.use((req,res,next)=>{
    console.log("I'm 2nd middleware");
    next();
    
});
app.get("/",(req,res)=>{
    res.send("Hi,I'm root");
});
const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if (token === "giveaccess"){
        next();
    };
    res.send("Access Denied");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});
app.get("/random",(req,res)=>{
    res.send("This is a random page.")
    next();
});

//utility middleware --- try on hoppscotch
app.use((req,res,next)=>{
    req.time = Date.now();
    console.log(req.method,req.hostname,req.path,req.time);
    next();
});
//case-404 
app.use((req,res)=>{
    res.status(404).send("Page not found");
});
app.listen(8080,()=>{
    console.log("app is listening 8080");
});

//Middleware
    //execute any code
    //make changes to the request and the response objects
    //end the request-response cycle
    //call the next middle-ware funct. in the stack

//error handling
app.get("/wrong",(req,res)=>{
    abs=ggwp;
});