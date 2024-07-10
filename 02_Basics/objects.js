//Singleton
//Object.create

const mySym = Symbol('Key1') // Special Case 
//objects literals 
const JsUser = { 
    name:"Nipun",
    "Full name": "Nipun Galhotra",
    [mySym]: "myKey1",  // Special Case 
    age : 18,
    Email: "galhotra@google.com",
    isLoggedIn: false,
    lostLoggedIn:['Monday', 'Friday']
}
//console.log(JsUSer.Email);
//console.log(JsUSer["Email"]);
//console.log(JsUSer["Full name"])
//console.log(JsUSer[mySym])

JsUser.Email = "galhotranipun@openAi.com"
// Object.freeze(JsUser)
JsUser.Email = "nipungalhotra@microsoft.com"
//console.log(JsUser)


JsUser.greeting = function(){
    console.log('Hello Js User,')
}

JsUser.greeting2 = function(){
    console.log(`Hello Js User,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2())