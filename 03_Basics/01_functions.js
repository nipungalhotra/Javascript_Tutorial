// Definition of function 
function sayMyName(){
    console.log("Choudary")
}
sayMyName // Reference
//sayMyName()// Execution 

//function addTwoNumber(number1,number2){  //(number1 , number2) here denoted as parameters 
  //  console.log(number1+number2)
//}
function addTwoNumber(number1,number2){
    //let result =number1+number2
    //return result
    return number1+number2
}
const result = addTwoNumber(122,434) // (122,434) here known as arguments
//console.log("Result:", result)

function loginUserMessage(Username = 'same'){
    if(Username ===undefined){
        console.log("Please Enter the Correct Username");
        return

    }
    return `${Username} justlogged in` 
}
//console.log(loginUserMessage("hitesh"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1

}
//console.log(calculateCartPrice(200,300,400))
function calculateCartPrice1(val1,val2,...num1){
    return num1

}
//console.log(calculateCartPrice1(200,300,400,300,202))

const User={
    Username:"Hitesh",
    price:199
}
function handleUser(anyobject){
    console.log(`username is ${anyobject.Username} and price is ${anyobject.price}`)

}
//handleUser(User)
handleUser({
    Username:"sam",
    price:299
})

const myNewArr =[200,300,400]
function returnSecondValue (getArray){
    return getArray[1]

}
//console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200,400,600,500]))
