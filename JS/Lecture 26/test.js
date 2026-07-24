// if statement
// if(condition){

// }
// if(true){
//     code execute 
// }
// if(false){
//     code does not execute
// }

const temprature = 40;

if(2==2){
    // code executes in braces 
}
const isUserLoggedIn = true;
if(isUserLoggedIn){
    console.log("user logged in");
}

// Comparision operators
// < , > , <= , >= , == , !=
// if(3!=2){
//     console.log("Not equal to");
// }
// === this also checks the type of the variable or value

// if(2=="2"){
//     console.log("executed");
// }
// if(2==="2"){
//     console.log("Not executed");
// }

// if(temprature < 50){
//     console.log("temprature is less then 50");
// }
// if(temprature===40){
//     console.log("temprature is equal to 40");
// }
// else{
//     console.log("temprature is greater then 50");
// }

// const score = 200;
// if(score > 100){
//     const power = "fly";
//     console.log(`User power ${power}`);
// }

// console.log("Power is not defined it gives an error ",power)


const balance = 1000;
// if(balance > 1000) console.log("test"),//implicit scope this is called
// console.log("test2");      // this is not a good practice 


// if(balance > 500){
//     console.log("less than");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less then 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedinFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 3==3){
    console.log("Allow to buy courses");
}
if(loggedInFromEmail || loggedinFromGoogle){
    console.log("User logged in");
}