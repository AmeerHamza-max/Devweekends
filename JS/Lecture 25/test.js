// Javascript execution context
// Global execution context always created with this keyword this is created.
// Functional Execution context 
// In mongoose eval execution context
// {}   -> memory creation phase 
//      -> execution phase 

let val1 = 10;
let val2 = 5;
function addNum(num1,num2){
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1,val2);
let result2 = addNum(10,2);

// 1. Global Execution Context --> this
// 2. Memory Phase all the variables are created and just kept them
// val1 --> undefined
// val2 --> undefined
// addnum --> defination
// result1 --> undefined
// result2 --> undefined             this is memory phase cycle


// 3. Execution Phase 
// val1  --> 10
// val2 --> 5
// addNum -> new variable environment + new execution thread
// in addNum first memory phase created 
// 1. val1 --> undefined
// 2. val2 --> undefined
// 3. tatal --> undefined

// After memory phase went to execution context 
// num1 --> 10
// num2 --> 5
// total --> 15
// after running executional context it deleted from the memory


// Call stack lifo context happend here 