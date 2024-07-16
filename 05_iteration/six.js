//const coding =['js','python', 'cpp', 'java']

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item
// })


// console.log(values);

// const num =[1,2,3,4,5,6,7,8,9,10]
// // const newNum = num.filter((num)=> num>5 )
// const newNum=[]
// num.forEach((num)=>{
//     if(num>4){
//         newNum.push(num)
//     }
// })
//  console.log(newNum);


const books =[
    {title:'Book One', genre:'Fiction',published:1991,edition:2004},
    {title:'Book Two', genre:'Non-Fiction',published:1992,edition:2008},
    {title:'Book Three', genre:'History',published:1999,edition:2007},
    {title:'Book Four', genre:'Non-Fiction',published:1989,edition:2010},
    {title:'Book Five', genre:'Science',published:2009,edition:2014},
    {title:'Book Six', genre:'Fiction',published:1987,edition:2010},
    {title:'Book Seven', genre:'History',published:1989,edition:1996},
    {title:'Book Eight', genre:'Science',published:2011,edition:2016},
    {title:'Book Nine', genre:'Non-Fiction',published:1981,edition:1989},
    {title:'Book Ten', genre:'Geophray',published:2001,edition:2020},
]

//const userBooks=books.filter((bks)=>bks.genre=='History')
const userBooks=books.filter((bks)=>bks.published>2000)
console.log(userBooks);

