const myobj ={
    js:'javascript',
    cpp: 'C++',
    Rb:"Ruby",
    Swift:'swift by apple'

}
for (const key in myobj) {
   //console.log(`${key} shortcut is for ${myobj[key]}`)
}

const programming = ['Cpp','java', 'python', 'ruby']
for (const key in programming) {
    console.log(programming[key]);
}