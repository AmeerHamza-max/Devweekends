// for 
// for (let i = 1; i < 11; i++) {
//     // const element = i;
//     // if(element==5){
//     //     console.log("5 is best number");
//     // }
//     // console.log(element);
//     console.log(`Outer Loop value : ${i}`);
//     for(let j = 0; j < 10 ; j++){
//         console.log(`Inn$er Loop Value ${j} and inner loop value ${i}`);
//     }
    
// }

// for(let i = 1; i <=10;i++){
//     console.log("2 * ",i," = ",2*i);
// }

// for(let i = 1; i <=10;i++){
//     for(let j = 1; j <=10;j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// let myArray = ["flash","batman","superman"];
// for(let index = 0 ; index < myArray.length;index++){
//     let element = myArray[index];
//     console.log(element);
// }




//  break and continue
// To break any control flow we use break


// for(let index = 1; index <=20; index++){
//     if(index == 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`Value of i is ${index}`);
// }

// To ignore the iteration we use continue

for(let index = 1; index <=20; index++){
    if(index == 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`Value of i is ${index}`);
}
