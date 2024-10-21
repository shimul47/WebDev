const student ={
    m1 :2,
    m2:3,
    m3:5,
    get avg(){
        let avg = (this.m1+this.m2+this.m3)/3;
        console.log(avg);
    }
}
try{
    console.log(a);
} catch(e){
    console.log("Error detected");
    console.log(e);
}
//arrow function
let sum =(a,b)=>{
    console.log(a+b);
};
sum(5,6);

let mul = (a,b) =>(
    a*b
);

//timeout function

console.log("Hello!");
setTimeout ( () =>  {
    console.log("bye")},
    1000);
console.log("buddy");

//interval func

// setInterval()


//practice

// So this function will print Hello world 5 times and then it will stop printing because of clearInterval function


let id = setInterval ( ()=> {
    console.log("Hello World!");
},2000);
setTimeout( () => {
    clearInterval(id);
},10000);