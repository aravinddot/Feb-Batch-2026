

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

// 1) primitive data types

// i ) string - A string is used to store text or characters and is always written inside quotes (" " or ' ')

const automation = 'playwright'  // string data type

 console.log(automation);


// ii) A number is used to store numeric values, including both integers and decimals.

const age = 5 // number data type

 console.log(age);


// iii) Boolean stores only two values: true or false, mainly used for conditions and decision-making.

const popular = true  // true or false boolean data type

 console.log(popular);


// iv) null represents an intentional absence of a value, meaning the variable exists but currently has no value.

const firstname = "aravind"

const middlename = null  // null data type

const lastname = "purushothaman"

 console.log(middlename);


// v) undefined means a variable is declared but not assigned any value yet.


let fullname;  // undefined data type

 console.log(fullname);





// 2) reference data types

// i) array data type - An array is used to store multiple values in a single variable, accessed using index positions.


const automationTools = ["cypress", "playwright", "puppeteer", "selenium", ["webdriverio", "testcafe"]];  

                        // 0           1            2            3          4 [0]        [1]

console.log(automationTools[1]);  // output : playwright

console.log(automationTools[4][0]);  // output : webdriverio





// ii) object data type  - An object stores data in key–value pairs, making it easy to represent real-world entities.

const automationTool = {

    name: "playwright",
    age: 5,
    otherTools: ["cypress", "puppeteer", "selenium"],
    opensource: true

}

// dot notation

console.log(automationTool.name)  // output : playwright

console.log(automationTool.age)  // output : 5

console.log(automationTool.otherTools[1])  // output : puppeteer

console.log(automationTool.opensource)  // output : true


// bracket notation

console.log(automationTool['name']) // output : playwright

console.log(automationTool['age'])  // output : 5

console.log(automationTool['otherTools'][2])  // output : selenium  

console.log(automationTool['opensource'])  // output : true




// iii) function data type - A function is a reusable block of code that performs a specific task when called.



function printName() {
    console.log("Automation Testing")
}

printName()  // output : Automation Testing

printName()  // output : Automation Testing

printName()  // output : Automation Testing