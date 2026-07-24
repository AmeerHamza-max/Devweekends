// Promise has three states
// 1. pending
// 2.fullfill
// 3.rejected

const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve();
    },2000)
});
promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },3000)
}).then(function(){
    console.log("Async 2 Resolve");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai",email:"ameerhamzarana0000786@gmail.com"})
    },4000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Hamza",password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

// const username = promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// })
// console.log(username);    
 

// Code above does not work

promiseFour
.then(function(user){
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("The Promise is either resolved or rejected");

})
// console.log(username);




const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Hamza1",password:"123"})
        }
        else{
            reject('Error: JS went wrong')
        }
    },6000)
})


async function consumePromiseFive(){
    try{
    const response = await promiseFive;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();



// async  function getAllUsers(){
//     try{
//          const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         //  console.log(response);
//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("E:",error);
//     }
   
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch(error=>{
    console.log(error);
})