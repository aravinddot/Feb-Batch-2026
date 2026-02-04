
// print a values in the console

console.log("Hello, World!") 





//console.log("Hello, World!").  // single line comment




/*.    multi line comment

console.log(true)

console.log("JavaScript Basics")
console.log("text")

*/



// Variable Naming Conventions

// rules to declare a variable


// pascal case  - AravindPurushothaman

// camel case   - aravindPurushothaman






// 1). Variables in JavaScript

// 1) var - old way to declare a variable

// 2) let - most common way to declare a variable

// 3) const - constant variable (value cannot be changed)


//i) var

var age = 25;

console.log(age);



var automationTool = "playwright"   // declared a variable

var automationTool = "cypress"  // re-declared a variable

console.log(automationTool);  // output : cypress because the variable is re-declared



// ii) let


let programming = "javascript" // declared a variable

console.log(programming);  // output : javascript


programming = "typescript"  // re-assigning a variable

console.log(programming);  // output : typescript


//let programming = "java"  // re-declaring a variable - not allowed

//console.log(programming); // error - Identifier 'programming' has already been declared



const environment = "QA"  // declared a constant variable

//environment = "PROD"  // re-assigning a constant variable - not allowed

//const environment = "dev"  // re-declaring a constant variable - not allowed

console.log(environment);






