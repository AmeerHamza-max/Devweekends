// Abstraction
//   Abstraction is the process of simplifying complex systems by
//   breaking them down into smaller, manageable parts. It 
//   allows you to focus on the essential features of an object
//   and hide uncessary details. In javascript, you can 
//  use abstract classes to define abstract structures and 
//  then implement them in concrete objects.



// Abstract class (providing a blueprint for subclasses)
class Animal {
    constructor(name){
        this.name=name;
    }

    // Abstract method (to be implemented by subclasses)
    makeSound(){
        throw new Error("Method (makeSound) must be implemented");
    }

}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    // Implementing the abstract method here
    makeSound(){
        return "Woff!";
    }
}

// Concrete Subclass
class Cat extends Animal {
    constructor(name){
        super(name);
    }
    makeSound(){
        return "Meow!";
    }
}


const dog=new Dog("Buddy");
console.log(dog.name);
console.log(dog.makeSound());


const cat=new Cat("Whiskers");
console.log(cat.name);
console.log(cat.makeSound());



// Define
// In this example, we have an abstract class Animal that contains
// an abstract method makeSound(). The makeSound() method is 
// declared in the animal class but doesn't provide an implementation
// It's meant to be implemented by subclasses like dog and cat.

// The Dog and Cat classes are concreate subclasses that inherit 
// from the animal class. They implement the abstract method 
// makeSound() with their own specific implementation for making 
// sounds.

// By using abstraction, we define a common interface (makeSound())
// that each subclass must implement, while hiding the internal
// details of how each animal makes its sound. This simplifies
// the code and allows us to work with animals at a higher 
// level of abstraction, without worrying about the specifics
// of each animal's sound implementation.