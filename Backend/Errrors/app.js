const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

app.get("/",(req,res)=>{
    res.send("Hi,I'm root!!!");
});

const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if (token === "giveaccess"){
        next();
    };
    throw new ExpressError(404,"Access Denied");
};

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
});
app.get("/err",(req,res)=>{
    abaca=dsdas;
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is Forbidden");
});
app.use((err,req,res,next)=>{
    let{status=500,massage="Some Error Occured"}= err;
    res.status(status).send(massage);
});
app.listen(8080,()=>{
    console.log("Port is listening 8080");
});
