const accountId = 1234
let accountEmail = "galhotra@google.com"
var accountPassword = "0987" /*Prefer not to use var because issue in block  scope and functional scope  */
acountCity = "Jaipur "
let accountState 


//accountId = 5678  //not allowed because of const keyworrd 

accountEmail ="nipun@google.com"
accountPassword ="1234"
accountCity = "SGNR"
console.log(accountEmail);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])