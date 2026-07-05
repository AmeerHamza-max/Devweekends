//  Promise
// A promise is an object representing the eventual completion
// or failure of an asynchrounous operation.

// new Promise()
// A Javascript Promise object contains both the producing 
// code and calls to the consuming code. It can be used to 
// deal with asynchronous operations in javascript.




// 3 States
// Pending
// Fullfilled / Resolved
// Rejected


// 1. => Initial State, Not yet Fullfilled or Rejected
// 2. => Promise Completed  => Fullfilled/Resolved
// 3. => Promise Failed  => Rejected


// Promise => Resolved =>     .then()   .finally()
// Promise => Rejected =>     .then()   .catch() .finally()



// Syntax 
// new Promise((resolve,reject)=>{resolve(value);reject(Error)})



// .then() is a method used to handle the successfull outcome
// of a Promise in Javascript. It takes 2 arguments: 
// (onFullFilled, onRejected);

// .catch()
// The catch() method returns a Promise and deals with rejected
// case only.


// const promiseObj = new Promise((resolve,reject)=>{
//     let req=false;
//     req=true ? resolve("Request Successfull"):reject("Request Rejected");
// })
// .then((value)=>console.log(value))
// .catch((error)=>console.log(error));



function checkNumber(chNumber){
    return new Promise((resolve,reject)=>{
        if(chNumber % 2 === 0){
            resolve(`${chNumber} is an even number.`)
        }
        else{
        reject(`${chNumber} is an odd number`);
        }
    })
}


const numberTocheck=6;

checkNumber(numberTocheck).then((message)=>{
    console.log(`Success: ${message}`)
}).catch(error => {
    console.log(`Error: ${error}`)
});
