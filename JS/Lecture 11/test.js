console.log("Hello");
console.log("Hello"+"World");
const name="AmeerHamza-hb";
const repoCount = 50;
console.log(name + repoCount);
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Hamza");
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));
const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "        Hamza     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20","-"))
console.log(url.includes("hitesh"));
console.log(url.includes("hamza"));
console.log(gameName.split("-"));


