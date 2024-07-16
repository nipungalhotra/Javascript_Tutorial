const coding =['js', 'rb,','cpp','java', 'python']

// coding.forEach(function(item){
//     console.log(item);

// })


// coding .forEach((item)=>{
//     console.log(item);

// })

// function primtMe(item){
//     console.log(item);
// }
// coding.forEach(primtMe)


// coding.forEach((item ,index,arr)=>{
//     console.log(item ,arr, index);
// })


const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "React",
        languageFileName: "react.js"
    }
]
myCoding.forEach((item, index, arr)=> {
    console.log(item.languageName);
})