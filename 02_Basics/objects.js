//Singleton
//Object.create

const mySym = Symbol('Key1') // Special Case 
//objects literals 
const JsUser = {
    name: "Nipun",
    "Full name": "Nipun Galhotra",
    [mySym]: "myKey1",  // Special Case 
    age: 18,
    Email: "galhotra@google.com",
    isLoggedIn: false,
    lostLoggedIn: ['Monday', 'Friday']
}
//console.log(JsUSer.Email);
//console.log(JsUSer["Email"]);
//console.log(JsUSer["Full name"])
//console.log(JsUSer[mySym])

JsUser.Email = "galhotranipun@openAi.com"
// Object.freeze(JsUser)
JsUser.Email = "nipungalhotra@microsoft.com"
//console.log(JsUser)


JsUser.greeting = function () {
    console.log('Hello Js User,')
}

JsUser.greeting2 = function () {
    console.log(`Hello Js User,${this.name}`)
}
//console.log(JsUser.greeting())
//console.log(JsUser.greeting2())

/************************* Depth in Objects****************/

// const tinderUser = new.Object() singleton object 
const tinderUser = {} // object literals 
tinderUser.id = "1234abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true
//console.log(tinderUser)
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        Username: {
            firstname: "Sammy",
            lastname: "Geholt",

        }
    }
}
//console.log(regularUser.fullname.Username.firstname)

const obj1 ={1:'a',2:'b'}
const obj2 ={3:'c',4:'d'}

//const obj3 ={obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2)  // {} target , obj1, obj2 is source 
const obj3 ={...obj1,...obj2}
//console.log(obj3)

// Extracting from Database 

const User=[
    {
        id:1,
        email:"User1@google.com"
    
    },
    {
        id:2,
        email:"User1@meta.com"
    
    },
    {
        id:3,
        email:"User1@microsoft.com"
    
    },
    {
        id:4,
        email:"User1@apple.com"
    
    }
]
User[1].email
//console.log(tinderUser);
//console.log(Object.keys(tinderUser));// most important method
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn')) // checking whether property is in object or not for extracting data from data base 



const course ={
    coursename : "Javascript_tutorial",
    courseInstructor: "Hitesh",
    coursePrice: 999
}
//course.courseInstructor

const{courseInstructor:instructor }=course
console.log(instructor)


//For React 
const navbar =({company}) => {


}
navbar(comapny="hitesh")

