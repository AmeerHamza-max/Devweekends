function person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.info=function(){
        return (`Person ${name} is ${gender} and he is ${age} years old`);
    }
}

let person1=new person("Hamza",22,"Male");
let person2=new person("Hamza",22,"Male");
let person3=new person("Hamza",22,"Male");
let person4=new person("Hamza",22,"Male");
console.log(person1);
console.log(person1.age);
console.log(person1.name);
console.log(person1.gender);
console.log(person1.info())





function Car(make,model,year,color){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.start=function(){
        return `Starting the ${this.make} ${this.model}`
    }
    this.stop=function(){
        return `Stopping the ${this.make} ${this.model}`
    }
}

const car1=new Car("Toyota","Camry","2020","Silver");
console.log(car1.stop());
console.log(car1.start());