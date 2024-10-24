//get element by id - 
let imgObj = document.getElementById("mainImg");
console.log(imgObj);

// get element by class -- return a HTML collection
let small_Images = document.getElementsByClassName("oldImg");
for(let i = 0; i<small_Images.length;i++){
    
}

// get element by paragraph tag
document.getElementsByTagName("p");

// QuerySelector -- selecting first single element

document.querySelector("h1");
document.querySelector("#id");
document.querySelector(".classname");

//QuerySelectorAll -- select full Node List

console.log(document.querySelectorAll("div"));

let para = document.querySelector("p");
console.dir(para);
//innerText , innerHTML. textContent

let box_col = document.querySelectorAll(".box a");
for(let i = 0; i <box_col.length;i++){
    box_col[i].style.color = "green";
}
//adding class
let heading = document.querySelector("h1");
heading.classList.add("Green");
// classList.remove()
// classList.contains()
// classList.toggle()  return yes/no if yes then remove and if no then add

// Navigation

let box = document.querySelector(".box");
box.children;
creatElement()
appendChild()
append()
prepend()
indertAdjacent(where,element)
