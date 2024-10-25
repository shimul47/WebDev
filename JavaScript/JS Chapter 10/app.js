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

let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let h3 = document.querySelector("h3");
    h3.innerText = getRandomColor();
    let div = document.querySelector("div");
    div.style.backgroundColor = getRandomColor();
});
function getRandomColor(){
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let color = `rgb(${red},${green},${blue}) `;
    return color;
}