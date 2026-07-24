// Primitive and Non Primitive Data Types

// Primitive Data Types 
// 7 Types : String , Number , Boolean , null  , undefined, Symbol, Bigint


// Is Javascript is dynamically type or statically typed
// Javascript is dynamically typed language because you can  store a value
// of any type in a variable  
const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
const id = Symbol('123');
const anotherId=Symbol("123");
console.log(id===anotherId);

const bigNumber = 2344333434434344434n;


console.log(id);
console.log(anotherId);




// Reference Type (Non Primitive)
// Arrays, Objects , Functions

const heros = ["Shaktiman","naagraj","doga"];
let myobj = {
    name:"Hamza",
    age:22
}
console.log(typeof myobj);
const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)


