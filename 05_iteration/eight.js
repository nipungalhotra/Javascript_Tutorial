const myNum =[1,2,3,4]

// const myTotal= myNum.reduce(function(acc,currentValue){
//    console.log(`acc:${acc} and cuurentValue ${currentValue}`);
//     return acc+currentValue

// },0)

// const myTotal = myNum.reduce((acc, currVal)=>acc+currVal,0)

// console.log(myTotal)

const shoppingCarte =[
    {
        itemName:'js-web developer',
        Price:399
    },
    {
        itemName:'js-foundation',
        Price:399
    },
    {
        itemName:'js-mobile developer',
        Price:399
    },
    {
        itemName:'node.js',
        Price:399
    }
]
const priceToPay = shoppingCarte.reduce((acc, item)=> acc+ item.Price, 0)
console.log(priceToPay);