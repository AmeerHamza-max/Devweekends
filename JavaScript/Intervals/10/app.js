////////  setInterval in every 2 seconds this code runs
setInterval(()=>{
    console.log(`This function will be executed every 2 seconds.`);
},2000);

//setTimout after 3 second it runs only once 
setTimeout(() => {
 console.log(`This function will be executed after 3 seconds`)   
},3000);


const intervalId=setInterval(function (){
    console.log(`This function is being executed at the interval`);
},1000);

//stop the interval after 10 seconds
setTimeout(() => {
    clearInterval(intervalId);
    console.log(`Interval Stopped`)
},10000);