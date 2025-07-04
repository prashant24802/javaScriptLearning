// Primitive

// 7 types: String, Number, Boolean, null, unidentified, Symbol, BigInt

// JavaScript is a dynamically typed Language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);

const bigNumber = 6205465433888888888888n //bigInt n in the last
console.log(typeof bigNumber)




// Reference or (Non-Primitive)

// Arrays, Objects, Functions

const heros = ["Krrish", "Dr. Doom", "Iron Man"]

let myObj = {
    name: "Prashant",
    age: 23, 

}

const myFunc = function(){
    console.log("Hello World")
}

console.log(myFunc);


//******* Memories**************//

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "Manliness Matters"

let anotherName = myYoutubeName

anotherName = "Chai"

console.log(myYoutubeName);


console.log(anotherName);

let userOne = {
    email:"User@gmail.com",
    upi: "user@mkc"
}

let userTwo = userOne
userTwo.email = "prashant@google.com"
console.log(userOne.email);
console.log(userTwo.email)

