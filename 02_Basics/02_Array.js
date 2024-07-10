const marvel_heros = ['Ironman','Thor','Spiderman']
const Dc_heros = ['Superman', 'Deadpool','Batman']

//marvel_heros.push(Dc_heros)
//console.log(marvel_heros);
//console.log(marvel_heros[3][1]);

//const All_heros = marvel_heros.concat(Dc_heros)
//console.log(All_heros);

const All_heros =[...marvel_heros,...Dc_heros]
console.log(All_heros);


const anotherArr = [1,2,3,[4,5,6],7,8,[4,5]]
const useOtherArr = anotherArr.flat(Infinity)
console.log(useOtherArr);

console.log(Array.isArray('Nipun'));
console.log(Array.from('Nipun'));
console.log(Array.from({name:'Nipun'})); // Interesting 


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));