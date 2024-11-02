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

// function savetoDB(data,success,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if (internetspeed> 4){
//         success()
        
//     }else{
//         failure();
//     }

// }
// savetoDB("Hello",()=>{
//     console.log("Your data is saved");
//     savetoDB("world",()=>{
//         console.log("Success 2")
//         },
//         ()=>{
//             console.log("failure 2");
//         }
//         );
//         },
//     ()=>{
//         console.log("Failed to save...Internet is slow");
//     }
// );

//promises

function savetoDB(data,success,failure){
    return new Promise((resolve,reject)=>{
        let internetspeed = Math.floor(Math.random()*10)+1;
        if(internetspeed>4){
            resolve("result published");
        }else{
            reject("Error");
        }
    });
     
}
savetoDB("Hello")



