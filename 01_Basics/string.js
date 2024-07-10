const name = "Nipun"
const repoCount =60
// First Method 
//console.log(name+repocount+"value");


console.log(`My Name is ${name} and my repoCount is ${repoCount}`)
const gameName = new String ("Vulturepad-hc-game")
//console.log(gameName[0])
//console.log(gameName.__proto__);
//console.log(gameName.length)
//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(9))
//console.log(gameName.indexOf('d'))


const newString= gameName.substring(0,6)
console.log(newString)

const anotherString = gameName.substring(-2,4)
console.log(anotherString)

const newString1 = "       nipun    " 
console.log(newString1.trim())
console.log(newString1)


const url ="https;//nipungalhotra.com/nipun%20galhotra"

console.log(url.replace("%20", "-"))
console.log(url.includes('hitesh'))

console.log(gameName.split("-"))