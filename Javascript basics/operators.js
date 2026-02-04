
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


 let a = 12;
let b = 5;

console.log(a + b)  // addition

console.log(a - b) // subraction

console.log( a * b) // multiplication

console.log(a / b) // division

console.log( a % b) // modulus

++a   // 12 + 1 increament by 1

--b // 5 - 1. decrement by 1

 console.log(a++)  // 13

console.log(b)  // 4

++a


let x = 7;
let y = 3;

console.log(++x) // pre increment    output: 8

console.log(y++) // post increment  output: 3

console.log(x)  // pre increment    output: 8

console.log(y)  // post increment output: 4


// pre increment post increment explanation explaination: 

// ++x (pre-increment) increases x first, then prints it, so x becomes 8 and prints 8.

// y++ (post-increment) prints y first (3), then increases it to 4.

// x stays 8 because it was already incremented.

// y prints 4 because the increment happened after the earlier log.





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



// Equal to (==)

// Compares only the value, not the datatype.
// Datatype conversion happens automatically.


console.log(10 == "10") // output : true because only values are compared


// Strict Equal (===)

//Compares both value and datatype.
//Most recommended operator in real projects.

console.log(10 === "10") // output : false because data types are different


// Not Equal

// Checks whether two values are not equal.
// Datatype is not considered.

console.log(10 != "5") // output : true because values are not equal


console.log(10 != "10") // output : false because values are equal


//Strict Not Equal (!==)

// Checks value and datatype are not equal.
// Safer option compared to !=.

console.log(10 !== 10) // same value and same data type. -- output : false

console.log(10 !== "10") // same value but data type is different -- output : true


//greater than 

// Checks if left value is greater than right value.
// Returns true or false.

console.log(10 > 5) // true

console.log(5 > 10) // false

// less than

// Checks if left value is less than right value.
// Returns true or false.

console.log(10 < 5) // false

console.log(5 < 10) // true


