// if 

//if(Conditions){}  //condition is true then onyl internal code in scope will execute  otherwise not 

//if (isUserLogged){

//}
// < , > , <= , >=, ==, !=, ===

//const temprature = 41
//if (temprature ==41){
    //console.log(`${temprature} is less than 50` );
//}
//else {
    //console.log("greater than 50" );
//}
//console.log("alway executed");

//const score =200
//if (score>200){
    //const power = 'fly'
    //console.log(`user power:${power}`);
//}
//console.log(`user power:${power}`); 

const balance = 12000 
//if (balance>500) console.log("test");
//console.log('test2');

//if (balance < 500) {
  //  console.log('less than');
    
//}
//else if  (balance< 750){
  //  console.log('less than');
//}
//else if (balance <900){
  //  console.log("less than  100 ");
//}
//else {
  //  console.log("greater than 1000" );
//}


const userLoggedIn = true
const debitCard = true 
const loggedInGoogle =false 
const loggedInEmail =true

//if (userLoggedIn && debitCard) {
  //  console.log('Allow user to buy Course ');
//}

if (loggedInGoogle ||loggedInEmail) {
    console.log("User Logged IN ");
}