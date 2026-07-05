// Classes are one of the features introduced in the ES6 
// version of Javascript.
// A class is a blueprint for the object. You can create
// an object from the class.

// You can think of the class as a sketch (prototype) of a 
// house. It contains all the details about the floors, doors,
// windows, etc. Based on these descriptions, you build the 
// house.

// Since many houses can be made from the same description,
// we can create many objects from a class.



// Class Declartion 
class Person{
    constructor(firstName,lastName,age){
        // Instance Members
        this.firstName= firstName;
        this.lastName= lastName;
        this.age= age;
        this.printuserInfo=function(){
            return `Name: ${this.firstName} ${this.lastName}, Age:${this.age}`;
        }
    };
    // Prototype members
    greet(){
        return `Hello there ${this.firstName} ${this.lastName}`;

    }
}
class Programmer extends Person {
    constructor (firstName, lastName, age, pl, experience){
        super(firstName,lastName,age)  //this just calls the parent constructor
        this.pl=pl;
        this.experience=experience
    }
}

const Hamza=new Programmer("Ameer","Hamza","19","Javascript","5")
const Ameer=new Person("Hamza","WebDev","19");
console.log(Ameer);
console.log(Ameer.printuserInfo());
console.log(Hamza);





// exercise
class Hero{
    constructor(name, level){
        this.name=name;
        this.level=level;
    }
    greet=function(){
        return `Hello ${this.name}  your level is ${this.level}`;
    }
}

class captain extends Hero{
    constructor(name,level,spell){
        super(name,level);
        this.spell=spell;
    }
    greet=function(){
        return `Hello ${this.name} your level is ${this.level} and have power ${this.spell}`
    }
}
const hero=new Hero("Ameer Hamza",23);
console.log(hero);
console.log(hero.greet());

const hero2=new captain("Captain America",2,"Stell Plate");
console.log(hero2);