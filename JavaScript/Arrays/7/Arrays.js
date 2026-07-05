// Arrays --> 0 index based
// Arrays which allows us to store multiple data 

let fruits=['orange','mango','dffdf'];

//empty array

const myList=[];
console.log(myList);


const numbersArray=[1,2,3,4,5];
console.log(numbersArray);


const stringArr=['eat','sleep','code','repeat'];
console.log(stringArr);


//Accessing Items from our Array
console.log(stringArr[0]);
console.log(stringArr[1]);
console.log(stringArr[2]);
console.log(stringArr[3]);


// Nested Array
// Two dimensional Array 

const nestArr=['one',['two','three'],1,true,false];
console.log(nestArr[1][1]);


const myLetter=['h','e','l','l','o'];
console.log(myLetter);


const fruits1=["apples",'mango','strawberries','pineapple','grapes'];
console.log(fruits1.length);
console.log(fruits1);
fruits1.push('Banana');
console.log(fruits1);
console.log(fruits1.length);
fruits1.pop();
console.log(fruits);
console.log(fruits1.length);

fruits1.shift();
console.log(fruits1);
console.log(fruits1.length);


fruits1.unshift('apples');
console.log(fruits1); 
console.log(fruits1.length); 


const fruits2=['Chocklawa','Gawa','Tomato'];

const totalFruits=fruits1.concat(fruits2);
console.log(totalFruits);

