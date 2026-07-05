//For Loops in JS
//DRY --> Don't repeat yourself
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");
console.log("Ameer Hamza");

//For Loop
// Syntax
// for(initalExpression;condition;increment or decrement operation){};

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }    vs code snippet


// for(let i=1;i<= 5;i++){
    // console.log('Hello World', i);

// }

//nested loop

for(let i=0;i<=5;i++){
    console.log('--- Outer Loop ---',i);
    for(let j=1;j<=5;j++){
        console.log("Inner Loop", j);
    }
}

//while Loop
//while(condition){}

let i=1;
while(i<=5){
    console.log('Hello World', i);
    i++;
}
let j=10;
let k=1;
while(j<110){
    console.log('Ameer Hamza',k);
    k++;
    j++;
}

