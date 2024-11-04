//call stack
function one (){
    return 1;
}
function two(){
    return one() + one();
}
function three(){
    let ans = two()+one();
    return ans;
}
console.log(three());

//breakpoint-- for debugging source

// color change function
h1 = document.querySelector("h1");
function changeColor (color,delay,nextcolorChange){
    setTimeout (() => {
        h1.style.color = color;
        if (nextcolorChange()){
            nextcolorChange();
        };
    },delay);
    
}
//call function
changeColor("red",1000, ()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000);
    });
});


//exmple of callback hell>>>>>>>>>
function savetoDB(data,success,failure){
    let internetspeed = Math.floor(Math.random()*10)+1;
    if (internetspeed> 4){
        success()
        
    }else{
        failure();
    }

}
savetoDB("Hello",()=>{
    console.log("Your data is saved");
    savetoDB("world",()=>{
        console.log("Success 2")
        },
        ()=>{
            console.log("failure 2");
        }
        );
        },
    ()=>{
        console.log("Failed to save...Internet is slow");
    }
);

//promises

function savetoDB(data,success,failure){
    return new Promise((resolve,reject)=>{    //Imortant syntax....
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("result published");
        }else{
            reject("Error");
        }
    });
     
}
// let request = savetoDB("Hello"); ///this is a promise object
// request
// .then(()=>{
//     console.log("Promise was resolved");
// })
// .catch(()=>{
//     console.log("Promise was rejected");
// });

//Or --- better version
savetoDB("Hello")
    .then(()=>{
        console.log("Promise was resolved");
    })
    .catch(()=>{
        console.log("Promise was rejected");
    });
//Promise chaining
//for example previous function used
savetoDB("Hello")
    .then(()=>{
        console.log("Promise was resolved");
        return savetoDb("How are you");
        
    })
    .then((result) =>{
        console.log("Data 2 saved");
        return savetoDB("data 3");
    })
    then((result)=>{
        console.log("Data 3");
    })
    .catch((error)=>{
        console.log("Promise was rejected");
        console.log(`error : ${error}`);
    });


