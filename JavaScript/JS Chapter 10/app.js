// let btn = document.querySelectorAll("button");
// console.dir(btn);
// for(i of btn){
//     i.addEventListener("click", sayHello);
//     i.addEventListener("click", sayName);
// };
// function sayHello(){
//     alert("Button was clicked");
// };
// function sayName(){
//     alert("hI NAME");
// };

//this is a comment !!!!
let btn6 = document.querySelector("#click");
btn6.innerText = "Hello";

let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    let colorX = getRandomColor();
    h3.innerText = colorX;
    let div = document.querySelector("div");
    div.style.backgroundColor = colorX;
});
function getRandomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let color = `rgb(${red},${green},${blue}) `;
    return color;
}

let btn1 = document.querySelector("button");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");

function changeColor(){
    console.dir(this.innerText);
    this.style.backgroundColor ="blue";
    this.style.color = "white";
}
btn1.addEventListener("click",changeColor);
h3.addEventListener("click",changeColor);
p.addEventListener("click",changeColor);

//keyboarad event
let input = document.querySelector("input");
input.addEventListener("keydown",function(){
    console.log("key pressed");
});

//form event
let form = document.querySelector("form");
form.addEventListener("submit" ,function(){
    alert("Are you sure?");
    event.preventDefault();//will be in the same page after submit
});