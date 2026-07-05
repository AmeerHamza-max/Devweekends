// Synchronous
//    Synchronous Javascript refers to the traditional way 
//    of executing Javascript code, where each operation is
//    performed in a sequential and blocking manner. In a 
//    sequential and blocking manner. In other words, each
//    line of code is executed one after the other and the 
//    program will wait for each operation to finish before
//    moving on to the next one. If an operation takes a long
//    time to complete, it can potentially slow down the 
//    entire application, making it less responsive.
//      

function addNumbers(a, b){
    return a+b;
}
function multiplyNumbers(c, d){
    return c * d;
}
const result1 = addNumbers(2, 3);
const result2= multiplyNumbers(result1,4);
console.log(result2);//output: 20




// Asynchronous Javascript

// Asynchronous Javascript allows certain operations to be 
// executed independent from the main program flow, so they
// don't block the execution of other tasks. This is typically
// achieved using techniques like callbacks, promises, and 
// async/await, which allow developers to handle asynchronous
// operations more efficiently.




console.log("start");
setTimeout(() => {
    console.log("Inside SetTimeOut");
}, 4000);

console.log("After the SetTimeout");