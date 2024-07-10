// # Primitive Data Type 
//7 Types : String, Number, BigInt, Boolean, Null, Undefined, Symbols
//Call by Value 

const score = 100
//JavaScript is a dynamically typed language. This means that the data type of a variable is not determined at compile time (when the code is converted into machine code) but rather at runtime (when the code is actually executed).

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

// Reference Type(Non-Primitive)
// Arrayas , Objects, Functions 

const heros= ["Ironman" , "Aquaman", "Batman"]

let myobj={
    name:"TonyStark",
    age:40,
}

const myfunction=function(){
    console.log("Hello world");
}

console.log(typeof heros)