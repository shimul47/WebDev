//function funcName(){
//}
function hello(name){
    console.log(`Hello,${name}`);
}
hello("shimul");
function dice(){
    let num = Math.random()*6;
    num = Math.floor(num)+1;
    console.log(num);
}
dice();

function toN(num){
    let sum = 0;
    for(let i=0;i<=num;i++){
        sum+=i;
    }
    return sum;
}
console.log(toN(7));

function arr_to_string(arr){
    let str;
    for(let i = 0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
}
let arr = ["hi","hello","bye","!"];
console.log(arr_to_string(arr));

let sum = function(a,b){
    return a+b;
}
console.log(sum);

const calculator={
    num : 55,
    add(a,b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    multi(a,b){
        return a*b;
    }

}
calculator.add(5,6);

let str="abcdabcdefggg";
function unique(str){
    let ans="";
    for(let i=0;i<str.length;i++){

        if(ans.indexOf(str[i]) == -1){
            ans+=str[i];
        }
    }
    return ans
}
console.log(unique(str));
