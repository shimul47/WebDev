//forEach Method
let arr = [1,2,3,4,5];
let print = function(el){
    console.log(el);
};
arr.forEach(print);

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function(el){
    console.log(el);
});

let arr2 = [{
    name:"Shimul",
    marks:96,
},{
    name:"dimul",
    marks:91,
},{
    name:"Timul",
    marks:90,
}
];
arr2.forEach((student)=>{
    console.log(student.marks);
});

let gpa = arr2.map((el) =>{
    return el.marks/10;
});
console.log(gpa);
//map Method
let num = [1,2,3,4];
let double = num.map((el) =>{
    return el*2;
});
console.log(double);

//Filter Method 
let num2 = [1,2,3,4,5,6,7,8,9,10];

let even = num2.filter((el)=> {
    return el%2==0;
});
console.log(even);

//every method --return true/false
arr3 = [1,2,3,4,5,6,7];
newarr3 = arr3.every((el)=>{
    return el%2==0;
});
console.log(newarr3);
//reduce Method -- return single value

arr4= [1,2,3,4];
newArr4=arr4.reduce((res,el)=>{
    return res+el;
});
console.log(newArr4);

//finding maximum of a array
let arr5 = [1,2,4,5,6,7,2,1,3];
let max = -1;
for(let i=0;i<arr5.length;i++){
    if(arr5[i]>max){
        max = arr5[i];
    }
}
console.log(max);

//or
let max2 = arr5.reduce((max,el) => {
    if (max<el){
        return el;
    }else{
        return max;
    }
});
console.log(max2);

//basic functions 
function sum1(a,b=5){
    return a+b;
}
console.log(sum1(3));

//spread concept -- Expands an iterable into multiple values
arr6 = [1,2,3,4,5,6,7,8,4,3,2343,5,43,534,43];
console.log(Math.min(...arr6)); // Have to use 3 dots in JS
console.log(Math.max(...arr6));
console.log(...arr);//will print individual number like for loop

let chars = ["a","b","c","d","e"];
let newChars =[...chars];
newChars.push("hiphop");
console.log(newChars);
let odd1= [1,3,5];
let even1 = [2,4,6];
let newArr8 = [...odd1,...even1];
console.log(newArr8);

const data ={
    email:"oshimul54@gmail.com",
    pass:"abcd",

};
const dataCopy = {...data,id:123};
console.log(dataCopy);

//Rest -- Allows a function to take an indefinite number of arguments and bundle them in an array

function sum3(...args){
    for(let i = 0; i<args.length;i++){
        console.log("You gave us",args[i]);
    }
}
sum3(1,2,3,4,5,6);
function min(a,b,c){
    console.log(arguments);
}
min(1,2,3,4);

//Destructuring 
let names = ["tony","sjo","dfsadf","dgg"];
let [winner,runnerup,...others] = names;
console.log(winner);
console.log(runnerup);
console.log(others);

