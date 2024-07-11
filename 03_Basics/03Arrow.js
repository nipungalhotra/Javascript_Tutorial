const user = {
    UserName:"facebook",
    price:999,


    welcomeMessage: function(){
        console.log(`${this.UserName}, welcome  to website`);
        //console.log(this);

    }

}
//user.welcomeMessage()
//user.UserName ="Sam"
//user.welcomeMessage()
//console.log(this);


//function one (){
   // let username="facebook"
    //console.log(this.username); //cannot be used in functions 

//}
//one()

//const code = ()=>{
    //const user ="insta"
  //  console.log(this)
//}
//code()


/*++++++++++Arrow Functions++++++*/
const addTwo =(num1, num2) => {
    return num1+num2
}
console.log(addTwo(4,8))
const addTwo1 =(num1, num2) => num1+num2
console.log(addTwo1(48,8))

//const addTwo2 =(num1, num2) => num1+num2
const addTwo2 =(num1, num2) => ({username:"cool"})
console.log(addTwo2(12,8))