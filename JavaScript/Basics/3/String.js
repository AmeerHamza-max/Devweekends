// Strings

// "Hamza";
// 'this is a string in js'

let firstName="Ameer Hamza";

let first='Hamza';
console.log(first);

let secondName="WebDev";
console.log(secondName);

let thirdName=`Basics`;



//Strings concatenation 

let fullName=firstName + ' ' + secondName;

console.log(fullName);


let secondFullName = firstName.concat(secondName);

console.log(secondFullName);


// Append

firstName+="Something else";
console.log(firstName);

//length
console.log(firstName.length);


//4.Cases
 
 
console.log(firstName.toLowerCase());   
console.log(firstName.toLowerCase());

// 5. Slice 
console.log(firstName.slice(0));
console.log(firstName.slice(0,1));
console.log(firstName.slice(0,3));
console.log(firstName.slice(1,3));

// 6. split and Join
console.log(firstName);
console.log(firstName.split(""));
console.log(firstName.split(" "));
console.log(firstName.split(" ").join(" "));

// 7.Includes 
// true or false
console.log(firstName.includes("X"));

// 8. trim

let name="     Hey   ";
console.log(name.trim());

// let desc="This is some 
// random text 

// "                   This will give us an error

let desc=`this is 
            some random variable  ${fullName}`;

console.log(desc);

fullName=`${firstName}  ${secondFullName}`;
console.log(fullName);


