// Constructor functions in Javascript are regular functions 
// used with the new keyword to create and initialize objects
// with shared properties and methods. They act as blueprints
// for creating multiple instances of objects with the same
// structure and behaviour.


function CreatePeople(firstName,lastName,pl){
    this.firstName=firstName;
    this.lastName=lastName;
    this.pl=pl;
    this.info = function(){
        console.log(`Hello my name is ${this.firstName}${this.lastName} & I love ${this.pl}`)
    }
}
// NEW KEYWORD
//  1. First create empty object {}
//  2. Sets "this" to point to that object
//  3. We can omit the return statement using "new" keyword

const Hamza=new CreatePeople("Ameer ","Hamza","Javascript");
const Jawad=new CreatePeople("Jawad","Jamshed","Python")
console.log(Hamza);
console.log(Jawad);
Jawad.info();



function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getInfo=function(){
        return `${this.title} by ${this.author} (${this})`
    }
}

const book1=new Book("The sudtle are of not giving a F*ck","Mark","2026");
const book2=new Book("Atomic Habits","Hamza","2026")
console.log(book1.getInfo());
console.log(book2.getInfo());


// Built in construcotrs also knwon as naative constructors
// are standard construcotrs provided by javascript that allow
// you to create objects of various data types. These constructors
// are available globally and do not need to be explicitly defined
// They provide a convenient way to create instances of 
// primitive data types and built in objects.


const num1=new Number(10);
let num2=10
console.log(typeof num1);//object 
console.log(typeof num2);//number

const st1=new String("Ameer Hamza");
console.log(st1);


const bool1=new Boolean(false);
console.log(bool1);


const arr1=new Array(1,2,3);
console.log(arr1);


// The Object.create() method creates a new object using an 
// existing object as the prototype of the newly created object.

let person={
    greet:function(){
        console.log(`Hello my name is ${this.firstName} ${this.lastName}`)
    }
}

const Hamza3=Object.create(person);
Hamza3.firstName="Ameer";
Hamza3.lastName="Hamza";
Hamza3.greet()
