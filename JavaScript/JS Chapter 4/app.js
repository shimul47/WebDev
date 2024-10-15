// for (let i = 1 ; i<=15;i++){
//     if(i%2 != 0){
//         console.log(i);
//     }
// }
// let str = "Rockstar";
// let guess = prompt("Guess the movie");
// while ( (guess != str)  && (guess != "quit")){
//     guess = prompt("try again ");
    
// }

// let arr= [[1,3,3434,],[43,46,36,5,6,46,56]];
// for(let i = 0; i<arr.length; i++){
//     for(let j = 0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
//     console.log("  ");
// }

//to do app.....

let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req == "quit"){
        console.log("Quiting");
        break;
    }
    if (req == "list"){
        console.log("----------");
        for(task of todo){
            console.log(task);
        }
    }else if (req == "add"){
        let task = prompt("Type of task you want to add");
        todo.push(task);
        console.log("Task added");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx,1);
    }else{
        console.log("Invalid request...")
    }
    req = prompt("Please enter your request")
}
