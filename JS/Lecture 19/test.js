

function sayMyName(){
console.log("H");
console.log("a");
console.log("m");
console.log("z");
console.log("a");
}
sayMyName();

// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }

function addTwoNumbers(number1,number2){
    // let result = number1 + number2;
    // return result;
    // console.log('Hamza');
    return number1 + number2;

}
const result = addTwoNumbers(3,4);
addTwoNumbers(3,'4');
addTwoNumbers(3,'a');

addTwoNumbers(3,null);
console.log(result);//this will through undefined when using only function does not return anything
function loginUserMessage(username){
    if(username==undefined){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just logged in`;
}
loginUserMessage("Hamza"); //does not print anything
console.log(loginUserMessage("Hamza"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());


