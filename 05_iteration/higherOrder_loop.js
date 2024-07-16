// for of 
// ['','','']
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
   //console.log(num);
    
}
const greeting ="hello world"
for (const greet of greeting) {
    //console.log(`Each char is ${greet}`)
    
}

//Maps 
const map =new Map()
map.set('IN', 'India')
map.set('Ire', 'Ireland')
map.set('Bh', 'Bhutan')
map.set('Sr', 'Srilanka')

//console.log(map)


for (const [key,value] of map) {
    console.log(key ,"-", value)
}

const myobj={
    'game1':'NFS',
    'game2': 'GTA',
    'game3':'PUBG'
}
// for (const [key , value] of myobj) {
//     console.log(key ,"-", value)
// }

