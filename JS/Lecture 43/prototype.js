let myName ="Hamza      ";
console.log(myName.length);
console.log(myName.trim().length);
// console.log(myName.trueLength());


let myHeroes= ["thor","spiderman"];
let heroPower = {
    thor:"Hammer",
    spiderMan:"sling",
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderMan}`)
    }
}

Object.prototype.Hamza=function(){
    console.log("Hamza is present in allObject");
}

// heroPower.Hamza();
myHeroes.Hamza();


Array.prototype.heyHamza = function(){
    console.log("Hamza says hey hello");
}

myHeroes.Hamza();
myHeroes.heyHamza();
// heroPower.heyHamza();  // object does not have access to heyHamza but array  has

const User = {
    name:"Hamza",
    email:"ameerhamza@gmail.com"
}
const Teacher = {
    makeVideo : true,
}
const TeachingSupport = {
    isAvailable:false,
}

const TASupport = {
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User


//modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher);


let anotherUserName = "Ameeer Hamza          ";
String.prototype.trueLength=function(){
    // console.log(`${this}`)
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength();