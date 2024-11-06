async function greet(){
    throw "404 Page not found";
    return "hello";
}
greet()
.then(()=>{
    console.log("Successful")
})
.catch(()=>{
    console.log("promise was rejected")
})

let demo = async() =>{
    return 5;
}

function getNum (){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        },1000);       
    })
}
async function demo(){
    await getNum();
    await getNum();
}

//*****API*****
//JSON - JS Object Notation

// let jsonData = 'copy json';
// JSON.parse(data) -->to convert json into js object
let student ={
    name:"s",
    mark:32,
};
JSON.stringify(student);//js to json

//api checking tools --> Hoppscpth,Postman
//Ajax - Asynchronous JS with xml

//http Verb
    /*
    get 
    post
    delete
    */
//status code --
    /*
    200-Ok
    404- Not found
    400 - bad request
    500 - Internal Server Error
    */

let url = "https://catfact.ninja/fact";
fetch(url)
    .then((res)=>{
        console.log(res);
        res.json().then((data) =>{
            console.log(data);
        })
    })
    .catch(()=>{
        console.log("Error");
    });
async function gerFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(res.fact);   
    }
    catch(e){
        console.log(e);
    }
}
