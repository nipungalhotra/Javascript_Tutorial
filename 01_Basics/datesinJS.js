// Dates 

let myDate = new Date()
//console.log(myDate.toISOString())
//console.log(myDate.toDateString())
//console.log(myDate.toJSON()) // Preferable Date 
//console.log(myDate.toLocaleDateString()) // Readable Date 
//console.log(myDate.toLocaleTimeString()) //readable Time 
//console.log(typeof myDate);// Object 



//let myCreateDate = new Date(2024,3,12)
let myCreateDate = new Date("04/12/2024")
//console.log(myCreateDate.toDateString()) // find  day 


let myTimeStamp = Date.now()
//console.log(myTimeStamp)
//console.log(myCreateDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleDateString('default',{
    weekday: 'long', 
    timeZone: 'IST'
})