// singleton


// Object literals
// Object.create();
const JsUser = {};
const mySym = Symbol("key1");

const js={
    "full name":"Ameer Hamza",
    name:"Hamza",
    age:18,
    location:"Sargodha",
    email:"AmeerHamza@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"],
    // mySym:"mykey1",//this will show mykey1 and don't show the symbol typeof
    [mySym]:"mykey1"
}
// console.log(js.name);
// console.log(js["name"]);
// console.log(js["full name"]);
// console.log(js[mySym]);
// console.log(js."full name"); You can't access it using dot notation

js.email="JJ@chatgpt.com";
// Object.freeze(js);
js.email="AmeerHamza@microsoft.com";
// console.log(js);
js.greeting=function(){
    console.log("Hello JS User");
}
js.greetingTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(js.greeting());
console.log(js.greetingTwo());