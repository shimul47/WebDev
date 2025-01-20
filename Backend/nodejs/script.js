let n = 5;
for (n ; n>0;n--){
    console.log("hello", n);
}
//node -> process -> process.cwd() --- this will let us know out current working directory
console.log(process.argv);

const someValue = require("./math"); //importing other file in a very new file through (module.exports() & require ) keywords

console.log(someValue);
console.log(someValue.sum(2,2));

//NPM - node package manager --using others code/api or something else
//-->libray and packages
//-->command line tool


//we can oonly use one module (require or import) in our whole project
//--> where "require" is analog  && "import" is digital-(which can choose a single package)

 

