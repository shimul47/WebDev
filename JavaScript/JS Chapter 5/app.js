//dictionary in js --> object literals
let student = {
    name:"Shimul",
    age:23,
    id:22299079,
    city:"Sirajganj"
};
console.log(student);
//create a twitter post

const post ={
    username:"@shimul23",
    content:"this is my first post",
    likes:-5,
    repost:-10,
    tags:["Han","man","tan"],

};
console.log(post.username);
post["username"] = "darkshimul";
post.city = "sirajganj";
delete post.city;

//nested dictionary
classInfo = {
    aman : {
        grade:2.5,
        city:"Delhi",
    },
    dhaman : {
        grade:2.9,
        city:"Mumbai",
    },
    kaman : {
        grade:3.5,
        city:"Bangladesh",
    }
}

classInfo1 = [
     {  name:"Aman",
        grade:2.5,
        city:"Delhi",
    },
     {  name:"Dhaman",
        grade:2.9,
        city:"Mumbai",
    },
    {   name:"kaman",
        grade:3.5,
        city:"Bangladesh",
    }
]

console.log(student);
console.log(post);
console.log(classInfo);
console.log(classInfo1);

let a = 5;
let b = 2;
let e = a;
let x = b;
let n = -5;
//Math object

Math.abs(n);
Math.max(a,b);
Math.pow(e,x);
//rounding number to  nearest smallest integer
Math.floor(n);
//rounding number to  nearest largest integer
Math.ceil(n);
//generating random value except 1
Math.random();




let num = Math.random();
num = num * 10;
num = Math.floor(num)+1;
console.log(num);

//shortcut

let num2 = Math.floor(Math.random()*10)+1;
console.log(num2);

if (num == num2){
    console.log("Jackpot");
}