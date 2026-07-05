//The ternary operator in Javascript is a concise way of writing 
// conditional expressions. It is the only Javascript operator
// that takes three operands: a condtion followed by a question 
// mark (?), an expression to execute if the codition is true, 
// followed by a colon (:) and an expression to execute if 
// the condition is false.

// condition ? exprIfTrue : exprIfFalse 

// if(condition){
    

// }else{

// }

let password=2;

function passwordChecker(ps){
    // if(ps>=8){
    //     return `Strong Password`;
    // }
    // else{
    //     return `Password should be 8 characters`;
    // }
    return password >=8 ?`Strong Password`:`Password should be 8 characters`;
}
const res=passwordChecker(password);
console.log(res);


const age=25;
const isAdult=age>=18 ?"Adult":"Not an Adult";
console.log(isAdult);


// If the person have money they can "buy products".
// if the person don't have any money "They should bring money"


let money="500";
const person=money!=""?"Buy Products":"They should bring money";
console.log(person);
