// function callbackHell(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             const data= "Inside (callbackHell) Function";
//             console.log(data);
//             resolve(data);
//         }, 2000)
//     })
// }

// function firstFunc(data){
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=>{
//             const processedData = `${data} - Processed data`;
//             console.log("Inside (firstFunc) function");
//             resolve(processedData);
//         }, 2000);
//     })
// }

// function secondFunc(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const processedData = `${data} - Processed data`;
//             console.log("Inside (secondFunc) function");
//             resolve(processedData);
//         },1500)

//     })
// }


// callbackHell().then(data => firstFunc(data))
// .then((processedData1)=> secondFunc(processedData1))
// .then(processedData2 => console.log(`Final result of all functions with Promises ${processedData2}`))
// .catch(error => console.log(`Error: ${error}`));



// Exercise 

console.log("--------- Start --------------");

function getUserDataFromDB(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Getting User Name...");
            resolve(name);
        },2000)
    })
}

function getUserHobbies(name){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log("Getting user hobbies...");
            resolve(["Cricket", "Reading", "Danicing"]);
        },2000)
    })
}

getUserDataFromDB("Hamza").then(name =>{
    getUserHobbies(name).then((hobby)=>console.log(hobby)).catch((err) => console.log(err))
})