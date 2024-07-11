//Immediately invoked function Expression (IIFE)

(function code (){
    console.log(`DB Connected`)
}
)();//use of semicolon is must to end the statement 

// have problen of global scope pollution so global scope variables , declaration pollution removed  so use of iife

(()=>{
    console.log(`DB CONNECTED TWO`)
})()