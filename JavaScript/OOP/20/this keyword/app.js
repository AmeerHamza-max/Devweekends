//Object-Oriented Programming is a  programming langague 
// model/style organized around objects rather then actions
// and data rather then logic


// Javascript is a versatile and dynamic programming language
// that supports multiple paradigms including procedural 
// functional and object-oriented programming. While Javascript
// is not a purely object-oriented langauage like Java or C++,
// it provides the tools and features to implement OOP concepts
// effectively

// OOP in Javascript refers to the practice of desiging and
// structuring code around objects and their interactions.It 
// is a programming paradigm that allows developers to model 
// real-world entities and their relationships using objects
// and classes

// Keyword This 
// The javascript this keyword refers to the object it belongs
// to. It has different values depending on where it is used.
// 
// /                /
// /  ------------  / -----------------------------------
// /  In a method   / this referes to the owner object.
// /   Alone        / this refers to the global object.
// /  In a function /  this refers to the global object
// /                /


// This in a Method
// In an object method, this refers to the owner of the method

let Hamza={
    firstName:"Ameer",
    lastName:"Hamza",
    Hamza:function () {
    return  this.firstName+" "+this.lastName;
}};


// If use alone or in a function 
// This refers to the global or window object

window.firstName="Zeeshan"
this.lastName="Haider"
console.log(this);  //window object
console.log(this===window);  //window object



// function global or window object in function also 
function printThis(){
    return this;
}
const res=printThis();
console.log(res);

// ---------------------------

// const obj={
//     firstName:"Hamza",
//     lastName:"WebDev",
//     fullName:function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const res1=obj.fullName();
// console.log(res  );


// const obj={
//     firstName:"Hamza",
//     lastName:"WebDev",
//     fullName:()=>{
//         return `${this.firstName} ${this.lastName}`;//arrow function don't even know the this keyword and it search the first object
//     }
// }
// const res1=obj.fullName();
// console.log(res1);


const obj={
    firstName:"Hamza",
    lastName:"WebDev",
    fullName:()=>{
        return `${window.firstName} ${window.lastName}`;//arrow function don't even know the this keyword and it search the first object
    }
}
const res1=obj.fullName();
console.log(res1);