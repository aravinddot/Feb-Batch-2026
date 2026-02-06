


// if-else statement


// if (condition) {
//     // code to be executed if condition is true
// } else {
//     // code to be executed if condition is false
// }

const name = "playwright"

console.log(name === "playwright")

if(10 == "10") {
    console.log("true executed")
} else {
    console.log("false executed")
}

//.  true   &&.   false
if(10 === 10  && 15 === "15") {
    console.log("true executed")
} else {
    console.log("false executed")
}

///. false    ||.   false
if(10 === "10"  || 15 === "15") {
    console.log("true executed")
} else {
    console.log("false executed")
}

    // true             &&        true
if((10 === 10 && 12 > 5)  && (10 === "10" || 15 > 10))    {
        console.log("true executed")
} else {
        console.log("false executed")
}


const automation = "playwright"

if(automation === "playwright") {

    console.log("playwright executed")

} else if (automation === "selenium") {

    console.log("selenium executed")

} else {
    console.log("no match found")
}



// switch case statement

// switch(true) {

//     case value:
//         // code to be executed if value matches case
//         break;
//     case value2:
//         // code to be executed if value matches case2
//         break;
    
//     default:
//         // code to be executed if no case matches
// }


const environment = "QA"

switch(environment) {

    case "DEV":
        console.log("dev url executed")
        break;
    case "QA":
        console.log("qa url executed")
        break;
    case "STAGING":
        console.log("staging url executed")
        break;
    case "PROD":
        console.log("prod url executed")
        break;
    default:
        console.log("no match found")
}
