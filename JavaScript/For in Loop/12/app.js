// The "for ... in" loop in javascript is used to iterate over the
// enumerable properties of an object. It is a way to loop 
// through the keys (property names) of an object.

// for(let key in object){....}

let person={
    name:"Ameer Hamza",
    age:19,
    gender:"Male"
}

for(let keys in person){
    // console.log(keys);
    console.log(keys,person[keys]);
}

let list=['one','two','three','four'];

for(let index in list){
    console.log(`${index}`)
}

const object={a: 1,b: 2,c:3};
for (let basic in object){
    console.log(`${basic} : ${object[basic]} `)
}

// The "for...of" loop in Javascript is a modern iteration 
// statement introduced in ECMAScript 6 (ES6) that provides
// concise and easy way to loop over elements in iterable objects
// like arrays strings, maps, sets and more. It allows you 
// to iterate directly over the values of the elemtns, rahter
// than dealing with their indices or keys, which makes the
// code more readable and less error-prone.


// let peoples=["Hamza","Alex","Jhon","Brad"];

// for(let people of peoples){
//     console.log(people);
// }


const text="Hello";
for (const char of text) {
    console.log(char);
}


const array1=["a","b","c"];
for(const ex of array1){
    console.log(ex);
}



