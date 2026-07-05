// Inheritance 
    // Inheritance allows a class (subclass) to inherit properties
    // and methods from another class (superclass). This enables
    // code (reuse) and the creation of hierarchical relationship
    // between classes. In javascript, inheritance can be 
    // achieved through prototype-based inheritance (before ES6)
    // or using ES6 classes (with the extends keyword).


// ES5 Code 
// function Animal(name){
//     this.name=name;

// }
// Method shared among all Animal Instances
// Animal.prototype.makeSound= function (){
//     return "Unknown sound";
// }

// Subclass constructor inheriting from Animal
// function Dog(name){
//     Animal.call(this, name);  // call the superclass constructor
// }


// Setup prototype chain for Dog to inherit from Animal
// Dog.prototype = Object.create(Animal.prototype);

// Dog.prototype.makeSound = function (){
//     return 'woff!';
// }



// Creating instances of the classes
// const genericAnimal = new Animal("Generic Animal");
// console.log(genericAnimal.name);
// console.log(genericAnimal.makeSound());
// const dog = new Dog("Buddy");

// console.log(dog);




// ---------------------------- ES6 Classes ---------------

// Superclass

class Animal {
    constructor(name){
        this.name = name;
    }
    makeSound(){
        return 'Unknown Sound';
    }
}

// Subclass inheriting from Animal

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    makeSound(){
        return "Woof!"
    }
}


const genericAnimal1=new Animal ("Generic Animal 1");
console.log(genericAnimal1.makeSound());

const dog1= new Dog("Buddy");
console.log(dog1.makeSound());
console.log(dog1);
