let a = 300  //Global scope 

if(true){
    let a = 10  // Blocked Scope 
    const b = 20
    var c = 40
    console.log("Inner:", a)

}
//console.log(a)
//console.log(b);
//console.log(c);

function one (){
    const username = "hitesh"
    function two (){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website);
    //two()
}
//one()

/**++++++++++++++++Intresting+++++++++ */
console.log(addOne(5));
function addOne (num){
    return num +1
}

//console.log(addTwo(5)); // throw error 
const addTwo = function(num){
    return num +2
}
