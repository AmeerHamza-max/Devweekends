// for of loop

["","",""];
[{},{},{}];

// It does not necessary to be an object

const arr = [1,2,3,4,5];


// for (const val of arr) {
//     console.log(val);
    
// }

// Map is an object who stores data in key value pairs

// const greetings = "Hello World!";
// for (const greet of greetings) {
//     console.log(`Each character is ${greet}`);
// }

const map = new Map();
map.set('USA',"United States of America");
map.set('IN',"India");
map.set('fr',"France");
// console.log(map);



// for (const key of map) {
//     console.log(key);
// }

// for (const [key,value] of map) {
//     console.log(key,':',value);
// }

const myObject = {
    "game1":"NFS",
    "game2":"Spiderman",
}

for (const [key,value] of myObject) {
    // console.log(key,":",value); //object is not iterable

}


