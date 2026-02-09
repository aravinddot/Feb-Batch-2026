

//  Functions in JavaScript


// 1) function declaration

// 2) function expression. // latest version

// 3) arrow function.    // latest version



///function declaration


 function printValues() {
    console.log("Hello World")
 }

 printValues() 


 // function expression

 const automationTool = function() {
   console.log("playwright")
 }

 automationTool()


 // arrow function


const automation = () => console.log("cypress")


automation()



function addition(a, b) {

   console.log(a + b)

}

addition(10, 20)


// function addition(a, b) {

//   return a + b // 30

// }

// const result = addition(10, 20)
// console.log(result)


const addition = (a, b) => a + b

const result = addition(10, 20)
console.log(result)


printValues()

function printValues() {
   console.log("Hello World")
}
addition()

const addition = () => console.log("Hello World")


const automationTools = ["playwright", "selenium", "cypress", "puppeteer"];

const values = [10, 20, 30, 40, 50]


function printAutomation(automation) {

   for(const tool of automation) {
    
      if(tool === "cypress" || tool === 20) {
         console.log(tool)
      }
   }


}

printAutomation(automationTools)

printAutomation(values)

  



















 



