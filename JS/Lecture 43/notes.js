// ALl this write in chrome 

// new keyword


const newHero = ["hulk","spiderman"];
console.log(newHero);
// Prototypal behaviour means if not find there than goes deep 

function multipleBy5(num){
    return num * 5;
}
console.log(multipleBy5(5));

// function is also an object so they can access using dot 

multipleBy5.power = 2;
console.log(multipleBy5.power);

console.log(multipleBy5.prototype);


function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function (){
    this.score++;
}
createUser.prototype.printMe = function (){
    console.log(`Score is ${this.score}`);
}
const Hamza = createUser("Hamza",25);
const tea = createUser("tea",250);