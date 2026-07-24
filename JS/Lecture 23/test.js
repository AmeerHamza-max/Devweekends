const user = {
    username:"Hamza",
    price:999,
    welcomeMessage: function (){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }

}
// user.welcomeMessage();
// user.username='Ameer';
// user.welcomeMessage();
// console.log(this);//this shows the {} empty curly braces but in chrome console this shows windwo object

function one(){
    console.log(this);
}
// one();
const two = function (){
    let username = "Hamza";
    console.log(this.username);
}
two(); // this will show the undefined

const third = () =>{
    let username = "Hamza";
    console.log(this.username);
    console.log(this);
}
third();


const addTwo = (num1,num2) => {
    return num1 + num2;
}

console.log(addTwo(3,5));

const add = (num1,num2) => (num1 + num2);

// const obj = (num1,num2) => {username:"hitesh"}; //this will show undefined
const obj = (num1,num2) => ({username:"hitesh"});

console.log(add(1,2));

console.log(obj());
