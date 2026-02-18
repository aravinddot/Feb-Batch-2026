


// number

// let value: number = 10

// value = 20

// console.log(value);


// string

// let value: string = "automation"

// value = "playwright"

// boolean

// let value: boolean = true

// value = false

// undefined
// let value: undefined = undefined
// // null
// let value2 : null = null


// any - no type check - not recommended

// let value: any = 10

// value = "automation"

// value = true

// value = []

// value = {}


// unknown - checks type

// let value: unknown = 10

// value = "automtion"

// console.log(value - 10);


// array


const arr: string[] = ["playwright", "cypress", "webdriver", "testcafe"]

const num: number[] = [2,3,4,5,6]

const arr1:(string | number | boolean | (string | number)[])[] = 

["playwright", 5, true,"cypress", 2020, false, "testcafe", 2021, ["microsoft", 2020] ]




// object

const obj: {name: string, age: number, moreInfo: {ownedBy: string, year?: number}} = {
    name: "Playwright",
    age: 5,
    moreInfo: {
        ownedBy: "microsoft"
    }
}


// function


function print(): number[] {
   return []
    
}




