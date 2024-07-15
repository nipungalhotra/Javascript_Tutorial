const userEmail = []

//if (userEmail) {
  //  console.log('Got  user email');
    
//}else{
 //   console.log(`don't have Emailid `);
//}

// Notes : Falsy Value 

// False , 0, -0 , bigInt 0n , [], null, undefined, Nan 

// truthy Value 
// "0", 'false',"", [], :},function(){}

//if (userEmail.length===0) {
  //  console.log("Array is Empty");
//}

//const EmptyObj= {}
//if (Object.keys(EmptyObj).length ===0) {
  //  console.log("object is empy ");
//}


// Nullish Coalescing Operator(???): null , undefined 
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
//val1 = undefined ?? 10 ?? 16
//console.log(val1)


//Terniary operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80 ");