//Arrow functions also known as fat arrow functions are a concise
// and shorter way to define functions in javascript. They
// were introduced in ECMAScript 6 (ES6) and provide a more 
// compact syntax compared to traditional function expressions

// function greet(username){
//     return `Hello ${username}`;
// }

// console.log(greet('Ameer Hamza'));
 greet=(username)=>{
    return `Hello ${username}`;
}

console.log(greet('Ameer Hamza'));


greet2=username=>`Hello ${username}`;



function double(number){
    return number*2;
}

console.log(double(10));



// Refactor this code to ES6 arrow functions 

setTimeout(()=>{
    console.log("Hello");
    setTimeout( ()=>{
        console.log("Hey");
        setTimeout( ()=>{
        console.log("Namaste");
         setTimeout(()=>{
        console.log('Hi');
        setTimeout( ()=>{console.log('Bon Jour')},2000);
    },2000)
    },2000)
    },2000)
    
    
    
},2000);


