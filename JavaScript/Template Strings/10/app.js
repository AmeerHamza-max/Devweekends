//Template strings, also known as template literals, are a 
//feature in Javascript that allows you to create strings
//with embedded expressions. They are denoted by backticks ``
//instead of single or double quotes. Template strings provide
// a more flexible and concise way to construct strings, 
//especially when they involve variables or expressions.


console.log('Hello');
// console.log('This is some
//     random Text.');    //this gives us an error  

console.log(`This is some 
                    random text it is not giving me any error`);


//Expression inside the Javascript

console.log(`${2 + 2}`);

const num = 2+2;

const firstName='Ameer';
const lastName='Hamza';
console.log(`My Name is: ${firstName} ${lastName}`);
console.log(`${['one' ,'two','three']}`);