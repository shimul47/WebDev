let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");
btn.addEventListener("click",async()=>{
    let fact = await getFacts();
    // console.log(fact);
    let p = document.querySelector("#result");
    p.innerText = fact;
});

// async function getFacts(params) {
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         colsole.log(data2.fact);
//     } catch(e){
//         console.log("Error:",e);
//     }
//     console.log("Bye");
// }

async function getFacts(params) {
    try{
        let res = await axios.get(url);
       
        return res.data.fact;
    } catch(e){
        console.log("Error:",e);
        return "No fact found";
    }
    
}

