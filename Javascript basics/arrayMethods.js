// 1) array.push()  --> adds the element at the end of the array



// it modifies orginal array

// it return new array length

// const automations = ["playwright", "selenium", "cypress"];

// automations.push("tosca", "qtp");

// console.log(automations);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = [];
// const oddNumbers = [];

// for (const value of numbers) {
//   if (value % 2 === 0) {
//     evenNumbers.push(value);
//   }

//   if (value % 2 === 1) {
//     oddNumbers.push(value);
//   }
// }

// console.log(evenNumbers);
// console.log(oddNumbers);



// ii) array.pop() --> removes the last element from the array

// modifies orginal array


// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// console.log(automations.pop());

// console.log(automations)




// iii) array.shift() --> removes the first element from the array

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// console.log(automations.shift()); // removed value

// console.log(automations) 


// iv) array.unshift() --> adds the element at the beginning of the array

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// automations.unshift("testcafe", "webdriverio")

// console.log(automations)


//v) array.includes() --> checks whether the element is present in the array or not. It returns boolean value

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// //console.log(automations.includes("Cypress"));

// if(automations.includes("night watch")) {
//     console.log("true executed");

// } else {
//     console.log("false executed");
// }


// vi) array.indexof() --> it returns the index of the first occurrence of the specified element in the array. If the element is not found, it returns -1.

// const automations = ["selenium", "cypress", "puppeteer", "testcafe", "webdriverio", "playwright"]

// console.log(automations.indexOf("playwright")) // 2


// vii) array.concat() --> it is used to merge two or more arrays. It does not modify the original array, instead it returns a new array which is the combination of the original arrays.

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]
// const automationTools = ["testcafe", "webdriverio"]


// const result = automations.concat(automationTools, "katalon")

// console.log(result)
// console.log(automations);
// console.log(automationTools);


// viii) array.reverse() --> it is used to reverse the order of the elements in the array. It modifies the original array and returns the reversed array.

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// console.log(automations.reverse())


// ix) array.flat() --> it is used to flatten the nested arrays. It does not modify the original array, instead it returns a new array which is the flattened version of the original array.

// const nestedArray = [1, 2, 3, 4, ['a', 'b', 'c', ['A', 'B', 'C', ['@', '#', '$', ['x', 'y', 'z']]]]];

// const arr = [1, [2, 3], 4, [5, [6, ['a']], 7], 8, [9], 10]

//console.log(arr.flat(Infinity))

//console.log(nestedArray.flat())


// x) array.join() --> it is used to join the elements of the array into a string. It does not modify the original array, instead it returns a new string which is the result of joining the elements of the array.

// const automations = ["playwright", "selenium", "cypress", "puppeteer"]

// console.log(automations.join(', and'));


// xi) array.forEach() --> it is used to execute a provided function once for each array element. It does not modify the original array, instead it returns undefined.

// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"]

// automations.forEach((value, index, completeArray) => {
//     console.log(value, index, completeArray);
// })




// xii) array.slice() - extracts portions ina an array

// doesn't modify orginal array

// end index not included


// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"]

// console.log(automations.slice(2, 5))

// slice(start index, end index)


// xiii) array.splice() - add/ remove elements in an array

// modifies orginal array

//  const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"]

// // // array.splice(start index, delete count, item1, item2, item3, ....)

// automations.splice(1, 3, "night watch", "katalon", "rational functional tester")

// console.log(automations);



// xiv) array.map() - transforms each element in the array based on the provided function and returns a new array with the transformed elements. It does not modify the original array.

// doesn't modify orginal array

// const num = [1, 2, 3, 4, 5]

// const result = num.map(value => value + 5)

// console.log(result);

// const str = ["playwright", "selenium", "cypress", "puppeteer"]

// const res = str.map(value => value.toUpperCase())

// console.log(res);


//xv) array.filter() - creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.


// doesn't modify orginal array

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const evenNumbers = numbers.filter(val => val % 2 === 0)

// console.log(evenNumbers);


// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"]


// // const result = automations.filter(value => value.startsWith("p"))

// // console.log(result);

// const result = automations.filter(value => value.length > 8)

// console.log(result);


// xvi) array.find() - returns the value of the first element in the array that satisfies the provided testing function. It does not modify the original array.

// return first matched value

// return undefined if no match found

// const numbers = [1, 3, 5, 6, 7, 8, 9, 10]

// const result = numbers.find(value => value > 2)

// console.log(result)

// // first even number


// const result = numbers.find(value => value % 2 === 0)

//     console.log(result);



// xvii) array.every() - tests whether all elements in the array pass the test implemented by the provided function. It returns a boolean value. It does not modify the original array.

// it return true or false
// doesn't modify orginal array

// const numbers = [1, 3, 5, 6, 7, 8, 9, 10]

// const result = numbers.every(value => value > 2)
    

// console.log(result);



// xviii) array.some() - tests whether at least one element in the array passes the test implemented by the provided function. It returns a boolean value. It does not modify the original array.

// it return true or false
// doesn't modify orginal array
// oppsite of every method

// const numbers = [1, 3, 5, 6, 7, 8, 9, 10]

// const result = numbers.some(value => value > 10)

// console.log(result);


// xix) array.findIndex() - returns the index of the first element in the array that satisfies the provided testing function. It does not modify the original array.

// const numbers = [1, 3, 5, 6, 7, 8, 9, 10]

// const result = numbers.findIndex(value => value % 2 === 0)

//     console.log(result);


// xx) array.sort() - sorts the elements of the array in place and returns the sorted array. It modifies the original array.


// const numbers = [5, 2, 9, 1, 6]

// console.log(numbers.sort()) // [1, 2, 5, 5, 6, 9]


// const alphabets = ["d", "a", "c", "b"]

// console.log(alphabets.sort()) // [a, b, c, d]


// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"];

// const result = automations.sort((a, b) => b.localeCompare(a))

// console.log(result)


// xxi) array.at() - returns the element at the specified index in the array. It does not modify the original array.

// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"];

// console.log(automations.at(2)) // cypress

// console.log(automations.at(-2)) // webdriverio


// xxii) array.reduce() - executes a reducer function on each element of the array, resulting in a single output value. It does not modify the original array.

// const numbers = [1, 2, 3, 4, 5]

// const result = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

// console.log(result) // 15

// xxiii) Array.isArray() - checks whether the provided value is an array or not. It returns a boolean value.

// const automations = ["playwright", "selenium", "cypress", "puppeteer", "testcafe", "webdriverio"];

// const str = "name"

// console.log(Array.isArray(str));



