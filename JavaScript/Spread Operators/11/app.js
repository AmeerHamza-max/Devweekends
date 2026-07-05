// The spread operator is a new addition to the set of operators 
// in Javascript ES6.It takes in an iterable (e.g. an array) and
// expands it into individual elements.The spread operator is
// commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its
// readability 


//Functions, Array, Objects 
function giveMe4(a,b,c,d){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);
}
const colors=['red','green','blue','teal'];
// giveMe4(1,2,3,4);
giveMe4(colors);// It will give us an array but for b c and d give us undefined 

giveMe4(...colors);//this is how we solve the above problem


const strNums=['one','two','three'];
const morestrNums=['four','five','six'];
const concat = [...strNums,...morestrNums];
console.log(concat);


let peoples=['Hamza','Alex','Zeeshan'];
console.log('Noman',...peoples,'John');


const obj1={
    x:1,
    y:2,
}
const obj2={z:3};
const obj3={...obj1,...obj2};
console.log(obj3);


let person={
    name:"Hamza",
    age:22,
    gender:'male',
}
const clone={...person,work:'programmer'};
console.log(clone);
console.log(person);


//Exercise

let arr=[1,2,3];
let arr2=[4,5];
const user={
    name:"Hamza",
    age:22,
}

let arr3=[...arr,...arr2];
console.log(arr3);

let userclone={...user};
console.log(userclone);



//The rest operator 
// The rest parameter syntax allows a function to accept an indefinite number
// of arguments
// as an array, providing a way to represent variadic functions in javascript

// function restOperator(...userData){
//     console.log(userData);
// }
// restOperator('Hamza',19,"programming",'football');

 function restOperator(somethingelse,...userData){//this syntax is right
    console.log(userData);
    console.log(somethingelse)
 }
 restOperator('Hamza',19,"programming",'football');

// function restOperator(...userData,somethingelse){//this syntax is wrong and will through an error
//     console.log(userData);
// }
// restOperator('Hamza',19,"programming",'football');


function person12(firstName,lastName,...hobbies){
    console.log('First Namw',firstName);
    console.log('Last Name:',lastName);
    console.log('Hobbies',hobbies);

}
person12('Ameer','Hamza','programming','cricket','singing');



//exercise
function unlimited(...nonStop){
  for(let i=0;i<nonStop.length;i++){
    console.log(nonStop[i]);
  }
}
unlimited('Hamza','Ameer','Zeeshan','Noman','Hussain');


