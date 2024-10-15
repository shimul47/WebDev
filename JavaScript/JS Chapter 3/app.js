let str = "   shimul  ";
str.trim();
// will remove all the extra spaces like strip method
let password = prompt("Set your password");
console.log(password.trim());
str.toUpperCase();
str.toLowerCase();
str.indexOf("s"); // 0
let dx = str.slice(1,4); // himu --last index is exclusive
str.slice("s","x"); // work like replace method
str.repeat(2); // will repeat 2 times

//Practice

 let msg = "help!";
 console.log(msg.trim().toUpperCase());

//Array

let arr = [1,2,3,4,"Str allow"];
console.log(arr);
arr[10] = "adding new";
arr.push(12);
arr.unshift(9);
arr.pop();
arr.shift();
console.log(arr);
arr.includes(4); // will return true if 4 exist otherwise false
arr.indexOf(4); // will return 4's index -- index of 4 is : 3

// merge 2 array
let arr2 = ["a1", 2 ,"a7"];
arr.concat(arr2);
//reverse an array
arr.reverse();

//slicing arr
// arr.slice (start idx, end idx(exclusive))

//splice method
// arr.splice(start_idx,delete_count,items you want to add);
let cars = ["Audi" , "BMW", "XUV", "Lambo"];
cars.splice(3);
cars.splice(0,1);
cars.splice(0,1,1,2,3,4,5);
console.log(cars);

//sorting
cars.sort(); //only work on string or character....it  doesnt work on integer

let arr3 =[["x",null,"O"],[null,"x",null],["O",null,"x"]];
console.log(arr3);


