console.log(`Before my is statement`);
let age = 23;
if (age>=18){
    console.log(`You can vote`);
}
let color = 'red';
if(color == 'red'){
    console.log("stop!!");
}
else if(color == 'yellow'){
    console.log("wait a while");
}
else if(color == 'green'){
    console.log("Go");
}

let num = 0;
if (num){
    console.log("num is not equal 0");
}else{
    console.log("num is 0");
}

let pixel = "red";
switch (pixel){
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "green":
        console.log("go");
        break;
}
let day = 7;
switch(day){
    case 1:
        console.log("saturday");
        break;
    case 2:
        console.log("sunday");
        break;
    case 3:
        console.log("monday");
        break;
    case 4:
        console.log("tuesday");
        break;
    case 5:
        console.log("wednessday");
        break;
    case 6:
        console.log("thursday");
        break;
    case 7:
        console.log("Friday");
        break;
    default:
        console.log("Wrong day");
}
//arelt and prompt
// alert("something is wrong");
// prompt("please enter valid number");
console.error("this is a error massage");
let uname = prompt("Enter your first name");
let uage = prompt("enter your age");
alert(`hi ${uname} , your age is ${uage}`);
let x = 23;
let y = 423535543;
if (x%10 == y%10){
    console.log("Yes,last digit is same");
}else{
    console.log("Not matched");
}