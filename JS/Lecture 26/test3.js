var userEmail = "hamza.ai";
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

var userEmail = "";
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

var userEmail = [];
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}


// falsy values
// false , 0, -0, BigInt 0n, "", null , undefined, NaN

// truthy values 
// "0","false"," ",[],{},function(){}
if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj = {};
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

console.log(false==0);
console.log(false=='');
console.log(0=='');


// Nullish coalescing operator (??): null undefined
// It check the null or undefined value if null then it assigned the next value

let val1;
val1 = 5 ?? 10;
console.log(val1);//5
val1 = null ?? 10;
console.log(val1);//10
val1=undefined ?? 10;
console.log(val1);//10
val1 = false ?? 10;
console.log(val1);//false;
val1 = null ?? 10 ?? 20;
console.log(val1);

val1 = ""??10;
console.log(val1);



// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("greater than 80"):console.log("less than 80");



