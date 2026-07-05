// Every javascript object has a anonymous property called
// prototype remember functions and arrays are also an object
// that prototype will be the parent of that object, prototype
// property is object by itself, which have some special 
// properties and methods.

// Every object is associated with another object.
// The object (a) is associated with [[Prototype]] object
// --> which means a object will inherit all properties of 
// Object.prototype || [[Prototype]]

// We can check the prototype of something in 3 ways.
// --> obj.__proto__
// --> obj.constructor.prototype
// --> Object.getPrototypeOf(a)


const obj= {};
console.log(obj);
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
console.log(obj.constructor.prototype);
console.log(Object.getPrototypeOf(obj));




const arr=new Array();
console.log(arr);



function Person(firstName, lastName, pl){
    this.firstName=firstName;
    this.lastName=lastName;
    this.pl=pl;
}
const Hamza=new Person("Ameer","Hamza","JS");
console.log(Hamza);
console.log(Hamza.__proto__.__proto__.__proto__);

// ********** Changing the built-in Methods ************
console.log(Array.prototype);
Array.prototype.pop=function (){
    return "Please pop Item from the array";
}

const myArr=["one","two","three"];
console.log(myArr.pop());

String.prototype.hello=function (){
    console.log(this);
    console.log(this.toUpperCase());
}
console.log("Hello and welcome".hello());


const arr1=["hello","yello","bla"];





// Prototypal inheritance is a mechanism in Javascript that
// allows objects to inherit properties and methods from 
// other objects. It is a fundamental concept in the language
// and is based on the prototype model. In prototypal inheritance
// objects can serve as prototypes for other objects, forming
// a hierarchical chain of inheritance.

// In Javascript, every object has an internal property called
// [[prototype]] (often reffered to as __proto__), which paints
// to its prototype object. When you accesses a property or method
// on an object, and that property or method is not found in the object itself,
// Javascript looks for it in the object's prototype (and 
// further up the prototype chain, if needed) until it finds
// the property or reaches the top of the prototype chain,
// which is usually the Object.prototype.



function Animal(name){
    this.name=name;
}


Animal.prototype.sound=function(){
    return "Animal Sound";
}

function Dog(name,breed){
    Animal.call(this,name);
    this.breed=breed;
    this.name=name;

}
Dog.prototype=Object.create(Animal.prototype)
Dog.prototype.bark=function (){
    return "Woof";
}
const dog1=new Dog("Hamza","Genius");
console.log(dog1);
console.log(dog1.name);
console.log(dog1.sound());


const animal1=new Animal("Frog");

console.log(animal1);
console.log(dog1.bark());


