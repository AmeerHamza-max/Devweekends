let password;
if(password===8){
    console.log("Welcome");
}
else if(password<=8){
    console.log('Password is too short');
}
else if(password>=8){
     console.log("Too Long Password & Password should be 8 characters");
}
else{
   console.log("Please provide a password.")
}


let fruit="Banana";
switch(fruit){
    case "Banana":
        console.log("Banana is good!");
        break;
    case "Orange":
        console.log("I am not a fan of orange");
        break;
    case "Apple":
        console.log("How you like them apples?");
        break;
    default:
        console.log('I have never heard of that fruit');    
}