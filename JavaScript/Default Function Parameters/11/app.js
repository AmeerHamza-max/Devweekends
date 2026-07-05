// Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default
// values to function parameters. When a function is called
// and an argument is not provided for a parameter, the default
// value will be used instead. This feature makes it easier to
// handle cases where arguments might be missing or undefined.


// function name(params={object})
// function name(params={arrays})
// function name(params=1);

// function countTo5(count){
//     if(count===true){
//         for(let i=1;i<=5;i++){
//             console.log(`Count: ${i}`);
//         }
//     }
// }
// function countTo5(count=false){
//     if(count===true){
//         for(let i=1;i<=5;i++){
//             console.log(`Count: ${i}`);
//         }
//     }
// }
function countTo5(count=true){
    if(count===true){
        for(let i=1;i<=5;i++){
            console.log(`Count: ${i}`);
        }
    }
}
countTo5();
countTo5(true)

function ratings(rate=0){
    if(rate===5){
        console.log(`Hight Rating :)`)
    }
    else if(rate===0){
        console.log(`Low Ratings :(`)
    }
}
ratings();


// 1. Create function name (multiply) with 2 parameters (a,b)
// which will multiply the parameters value 
// 2. Provide 1 as the default value to parameter "b"
let multiply=(a,b=5)=>{//you can't give the default value to first parameter 
    return a*b;
}
let multiple=multiply(5);
console.log(multiple);
let multiple1=multiply(4,5);
console.log(multiple1);