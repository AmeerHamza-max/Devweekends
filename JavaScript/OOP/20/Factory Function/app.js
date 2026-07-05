// A factory function is a type of function that is used to 
// create and return object. It's a design pattern that 
// provides an alternative way to create objects compared to 
// using constructors and the new keyword


// let Hamza={
//     firstName:"Ameer",
//     lastName:"Hamza",
//     fullName:function(){
//         return `Hello my name is ${this.firstName} ${this.lastName} & I love Javascript`
//     },

// }

function createPerson(firstName,lastName,pl){
    return {
        firstName:firstName,
        lastName:lastName,
        pl:pl,
        fullName:function(){
            console.log(`Hello my name is ${this.firstName} ${this.lastName} and I love ${this.pl}`)
        }
    }
}

let Hamza=createPerson("Ameer","Hamza","Javascript");
let Hamza1=createPerson("Ameer","Hamza","Python");
Hamza.fullName()

// 12:02