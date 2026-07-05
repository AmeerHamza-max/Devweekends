// A function is a block of code that performs a specific task.
//Function makes the code reusable. You can declare it once 
// and use it multiple times.
//Function makes the program easier as each small task is divided
//into a function.
//Function increases the readability 
//DRY - Don't repeat yourself



//Syntax
// function name(parameterIfany){...} 



//Function Declaration
function greet(){
    console.log('Hello from a function');
}

//call, run , execute   
greet();
let varname='Ameer Hamza';

//Function Declaration 

function sayHello(name){
    console.log(`Hamza ${name}`);
}

sayHello;//This will print Hello undefined

sayHello(varname);
sayHello(varname);
sayHello(varname);


//return keyword ---> function 

function add(x,y){
    return x+y;
}

add(10,20);//it does not give us anything we want

console.log(add(10,20));

const res = add(20,20);
const res1 = add(30,20);
const res2 = add(40,20);
console.log(res);
console.log(res1);
console.log(res2);


function myFunction(num1,num2){
    return num1*num2;
}
let x=myFunction(4,3);
console.log(x);
console.log(myFunction(2,2));



//Function Declaration 
//  this is function declration that we make our function 
function sayBy(username){
    console.log(`Hello ${username}`)
}
//Function Expression
// when we store function in a variable this is called function expression 



// greetings("Ameer");//you can't access function here it will give you an error because you are accessing the variable before its declaration 
const greetings=function (user){
    console.log(`Hello ${user}`)
}

greetings("Hamza");



//Call back function 
// When we provide function as (argument) to other function that function 
// is known as callback function.

// Syntax 
// showCallFunc(function() {})

function showCallFunc(fn){
    const value=10;
    fn(value);
}
showCallFunc(function(value){
    console.log(value);
})

function greet(name,cb){
    console.log(`Hello ${name}`);
    cb();
}

function cb(){
    console.log(`I am callback function`);
}

greet("Hamza",cb  );