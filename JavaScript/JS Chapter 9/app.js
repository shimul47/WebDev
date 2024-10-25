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
// creatElement()
// appendChild()
// append()
// prepend()
// indertAdjacent(where,element)


//Practice Question....
let para1 = document.createElement('p');
para1.innerText = "Hey I'm red";
document.querySelector('body').append(para1);
para1.classList.add("red");
let h3 = document.createElement("h3");
h3.innerText = "Hey i am blue H3";
document.querySelector("body").append(h3);
h3.classList.add("blue");
let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("para2");
h1.innerText = "Im in a div";
para2.innerText = "me too....";
div.append(h1);
div.append(para2);
div.classList.add("border");
document.querySelector("body").append(div);



