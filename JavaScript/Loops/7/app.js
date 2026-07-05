// Do While Loop
// let i=1;
// do {
//     console.log('Hello word',i);
//     i++;
// } while(i <= 5);
// let j=20;
// let k=1;
// do{
//     console.log("Ameer Hamza",k);
//     j++;
//     k++;

// }while(j<420);



// 1.=> logical AND Operator (&&)
// => TURE if both the operands/boolean values are true else evaluates to false

const a=true;
// const b=false; false
const b=true; //true
const c=5;
console.log(a && b);
console.log(c > 2 && c < 2);

// 2.=> Logical OR Operator (||)
// // => True if either of the operands/boolean values is true evaluates to false if both are false.

console.log(a ||b);
console.log(b || b);
console.log(c >2 || c < 2);

// 3. => Logical NOT Operator (!)
// => True if the operands is false and vice-versa 

const d=false;
console.log(!d);
console.log(d);


let password="Hamza";

if(password.length >=8 && password.includes("Hamza")){
    console.log('Valid Password');
}
else{
    console.log('Invalid Password');
}
if(password.length >=8 || password.includes("Hamza")){
    console.log('Valid Password');
}
else{
    console.log('Invalid Password');
}



let isTrue=true;
console.log(!isTrue);