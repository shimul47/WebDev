const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require ("express");
const app = express();
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
const port = 8080;

app.listen(port,()=>{
    console.log(`Listening on port : ${port}`);
});

let getRandomUser = ()=> {
    return [
      faker.string.uuid(),
      faker.internet.username(), 
      faker.internet.email(),
      faker.internet.password(),
      
    ];
  };

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'1599',
});

//inserting new data
let data = [];
q = "INSERT INTO user (id, username,email,password) VALUES ?";
for (let i=1;i<=100;i++){
    data.push(getRandomUser());
}


//Home route
app.get("/",(req,res)=>{
    let q = `SELECT count(*) FROM user`;
    try{
        connection.query(q,(err,result) =>{
            if(err) throw err;
            let count = result[0]["count(*)"];
            
            res.render("home.ejs",{count});
        
        });
    }catch(err){
        console.log(err);
        res.send(err);
    }
});
//show route
app.get("/user", (req,res)=>{
    let q = `select * from user`;
    try{
        connection.query(q,(err,users) =>{
            if(err) throw err;
            // console.log(result);
            res.render("user.ejs",{users});
            // res.render("home.ejs",{count});
        
        });
    }catch(err){
        console.log(err);
        res.send(err);
    }

});

//Edit route

app.get("/user/:id/edit",(req,res)=>{
    let id = req.params;
    let q = `SELECT * FROM user where id='${id}'`;
    

    try{
        connection.query(q,(err,result) =>{
            if(err) throw err;
            console.log(result)
            
            
        
        });
    }catch(err){
        console.log(err);
        res.send(err);
    }
    

});
// connection.end();


