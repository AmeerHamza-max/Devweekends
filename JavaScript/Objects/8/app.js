// OBJECTS -->  'orange'
//Object allows us to store collection of data in label and value like key value pair 
// const person ={
//     key:value,
// }

const person={
    firstName:"Ameer",
    lastName:"Hamza",
    age:19,
    location:['plante','Earth'],
    isProgrammer:true,
    10:'ten',
}
console.log(person);
console.log(typeof person);

const arr=[];
console.log(typeof arr);

console.log(person.age);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.location);


// console.log(firstName); It gives us error  that firstName is not defined

console.log(person['firstName']);
console.log(person['location']);

// console.log(person.10); This gives us error on dot notation so we use square brackets

console.log(person['10']);

const person1={
    firstName:"Ameer",
}
person1.lastName="Hamza";
person1.location=['planet','Earth'];
delete person1.firstName;
console.log(person1);


const car={
    type:'Land Cruiser',
    model:'20',
    color:'black',

}
console.log(typeof car);
console.log(car.type);
car.type='Toyota';
console.log(car.type);
car.wheels='four wheels';
console.log(car);



