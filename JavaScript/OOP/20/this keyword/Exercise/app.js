let person={
    name:"Ameer Hamza",
    age:22,
    greetRegular:function(){
        return `Hello, my name is ${this.name} & I'm ${this.age} years old`;

    },
    greetArrow:()=>{
        return  `Hello, my name is ${this.name} & I'm ${this.age} years old`;
    }
}

let obj1=person.greetRegular();
console.log(obj1);
let obj2=person.greetArrow();
console.log(obj2);