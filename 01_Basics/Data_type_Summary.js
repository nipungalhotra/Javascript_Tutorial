// # Primitive Data Type 
//7 Types : String, Number, BigInt, Boolean, Null, Undefined, Symbols
//Call by Value 

const score = 100
//JavaScript is a dynamically typed language. This means that the data type of a variable is not determined at compile time (when the code is converted into machine code) but rather at runtime (when the code is actually executed).

const id = Symbol('123')
const anotherId = Symbol('123')
//onsole.log(id===anotherId)

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

//console.log(typeof heros)

//++++++++++++++++++++++++++++++++++++++
//Stack (Primitive), Heap(Non-Primitive)

let myYoutube = "nipungalohtradotcom"
let anotherName = myYoutube
anotherName = "galhotranipundotcom"
console.log(anotherName)
console.log((myYoutube));


let user1 = {
    email:"user1@gmail.com",
    upi :"user1@yblyesbank"

}
let user2={
    email:"user2@gmail.com",
    upi:"user2@yblyesbank"
}
let user3 =user2

user2.email="hitesh@google.com"
console.log(user2.email)
console.log(user3.email);