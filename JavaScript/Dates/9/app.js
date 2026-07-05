//Dates and Time in JS
// first i will provide for a year , month , day , hours , minutes , seconds, miliseconds 
const currentDate=new Date(2026,2,25,13,34,0,0);
console.log(currentDate);

const date=new Date();
const year=date.getFullYear();
const month =date.getMonth();
const day =date.getDay();
const hours=date.getHours();
const minutes=date.getMinutes();
const milliseconds=date.getMilliseconds();
console.log(`Year ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`MilliSeconds : ${milliseconds}`);
