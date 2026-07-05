// Polymorphism allows objects to be treated as instance of 
// their parent class, even if they are instances of a subclass
// This facilitates writing code that works with different
// types of objects in a generic way. In Javascript, polymorphism
// is achieved through method overriding, where a subclass
// provides its own implementation of a method that is alread
// defined in the parent class. the code can then use the same
// method to work with both parent and subclass instances



// In Javascript, polymorphism is typically achieved through
// method overriding, where a subclass provides its own 
// implementation of a method that is already defined in the 
// parent class.



class Animal{
    constructor(name){
        this.name= name;

    }
    makeSound(){
        return 'Unknown sound';
    }

}

class Dog extends Animal {
    constructor(name){
        super(name);
    }
    // Overriding method

    makeSound(){
        return "Woof!";
    }
}

class Cat extends Animal {
    constructor(name){
        super(name)
    }
    makeSound(){
        return "Meow";
    }
}
function animalInfo(animal){
    console.log(`Name: ${animal.name}`);
    console.log(`Sound: ${animal.makeSound()}`);
}


const genericAnimal=new Animal("Generic Animal");
animalInfo(genericAnimal);


const dog= new Dog("Buddy");
animalInfo(dog);

const cat= new Cat("Whiskers");
animalInfo(cat);