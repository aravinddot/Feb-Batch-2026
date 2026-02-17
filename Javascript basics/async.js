

// javascript sync by nature but can handle mutiple async operations
// playwright async by nature



// console.log("first");

// console.log("second")
// // setTimeout(() => {
// // console.log("second");
// // }, 10000)

// console.log("third");



function getApiValue() {
    const res = fetch('https://automationexercise.com/api/productsList').then((data)=> {
        return data.json()
    })
    return res
}

getApiValue().then((response)=> {
    console.log(response);
})


async function getApiVal() {
    const res = await fetch('https://automationexercise.com/api/productsList')
    console.log(await res.json());
}

getApiVal()




// variables
// data types
// operators
// if else
// loop - for, for in, for of
// array & object - how to access
// string methods
// array methods - array.push
// functions
// parameters
// return value




