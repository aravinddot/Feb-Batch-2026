
// print a values in the console

// console.log("Hello, World!") 

//console.log("Hello, World!").  // single line comment

/*.    multi line comment

console.log(true)

console.log("JavaScript Basics")
console.log("text")

*/

// pascal case  - AravindPurushothaman

// camel case   - aravindPurushothaman


// 1). Variables in JavaScript

// 1) var - old way to declare a variable

// 2) let - most common way to declare a variable

// 3) const - constant variable (value cannot be changed)

// var age = 25;

// console.log(age);

// let name = "John Doe"

// console.log(name);

// const automation = "cypress"

// console.log(automation);



// 2). Data Types in JavaScript

// 1) Primitive Data Types

/* 

i) string.   ''   ""
ii) number
iii) boolean
iv) null
v) undefined

// 2) reference Data Types

i) array
ii) object
iii) function

*/

// 1) string data type

// const automation = 'playwright'  // string data type

// const age = 5 // number data type

// const popular = true  // true or false boolean data type

// const firstname = "aravind"

// const middlename = null  // null data type

// const lastname = "purushothaman"

//let fullname;  // undefined data type


 //console.log(fullname);





// 2) reference data types

// i) array data type

//const automationTools = ["cypress", "playwright", "puppeteer", "selenium", ["webdriverio", "testcafe"]];  

//                         // 0           1            2            3

// console.log(automationTools[3]);



// ii) object data type

// const automationTool = {

//     name: "playwright",
//     age: 5,
//     otherTools: ["cypress", "puppeteer", "selenium"],
//     opensource: true

// }

// // dot notation

// console.log(automationTool.name)


// // bracket notation

// console.log(automationTool['name'])


// iii) function data type


// function printName() {
//     console.log("Automation Testing")
// }

// printName()

// printName()

// printName()



// Operators in JavaScript

// 1) Arithmetic Operators

/*

i) +  addition
ii) -  subtraction
iii) *  multiplication
iv) /  division
v) %  modulus
vi) ++ increment
vii) -- decrement
*/
 //let a = 12;
// let b = 5;

// console.log(a + b)  // 15.  addition

// console.log(a - b) // subraction

// console.log( a * b) // multiplication

// console.log(a / b) // division

// console.log( a % b) // modulus

// ++a   // 1 + 12. increament by 1

// --b // 5 - 1. decrement by 1

 //console.log(a++)  // 13

// console.log(b)  // 4

//++a


//console.log(a++) // pre increment

// console.log(++a) // post increment


// comparison operators

/*

equal  ==

strict equal  ===

not equal !=

strict not equal !==

greater than  >

less than  <

greater than or equal to  >=

less than or equal to  <=

*/


// console.log(10 == "10") // both the values are equal

// console.log(10 === "10") // both the values and data types are equal

// console.log(10 != "5") // values are not equal

// console.log(10 === 10) // same value and same data type. -- 

// console.log(10 === "10") // same value but data type is different

// console.log( 10 !== "10") // value same but data type is different

// console.log( 10 !== 10) // value same and data type is same

// greater than 

// console.log(10 > 5) // true

// console.log(5 > 10) // false

// console.log(10 < 5) // false

// console.log(5 < 10) // true

let a = 10;

console.log(a++) // post increment

console.log(a)
