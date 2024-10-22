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
console.log(sum1(3,6));