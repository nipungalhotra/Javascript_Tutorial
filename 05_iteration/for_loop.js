// for 

for (let i = 0;i < 10;i++) {
    const element =i;
    if (element ==5) {
       // console.log("5 is best number");
    }
   // console.log(element);
    
}

for (let i = 0; i <=10 ; i++) {
    //console.log(`Outer Loop value : ${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`Inner loop value ${j} and Outer loop ${i}`);
        //console.log(i +'*'+ j + '='+i*j);

        
    }
    
}
let myArr=['Ironman', 'Aquaman', 'Superman ']


for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}

//break and continue 
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        //console.log('dected 5');
        break
    }
    //console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log('dected 5');
        continue
    }
    console.log(`value of i is ${index}`);
    
}