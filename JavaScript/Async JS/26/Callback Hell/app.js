// function callbackHell(callback){
//     setTimeout(() => {
//         const data = "Inside (callbackHell) function";
//         console.log(data);
//         callback(data);
//     }, 2000);
// }


// function firstFunc(data, callback){
//         setTimeout(() => {
//             const processedData = `${data} - Processed First`;
//             console.log(`Inside (firstFun) Function`);
//             callback(processedData);
//         },4000);
    
// }

// function secondFunc(data, callback){
//     setTimeout(() => {
//        const processedData = `${data} - Processed Second`;
//        console.log(`Inside (secondFunc) Function`);
//        callback(processedData);
//     },1500);
// }


// Callback Hell
// callbackHell((data) =>{
//     firstFunc(data, (processedData) => {
//         secondFunc(processedData,(processedData2) => {
//             console.log(`Final result of all functions: ${processedData2}`)
//         })
//     })
// })


// callback is not always asynchronous

// console.log('Start');

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// numbers.forEach((n)=>{
//     console.log(n);
// })

// console.log("End");


// Exercise

function getUserDataFromDB(name,callback){
    setTimeout(()=>{
        const data="Getting User Name";
        console.log(data);
        callback(name);

    },2000)
}

function getUserHobbies(name,callback){
    setTimeout(()=>{
        const data=`Getting ${name} hobbies`;
        console.log(data);
        const hobbies=["cricket","reading","volleyball"];
        callback(hobbies);
    },2000)
}

getUserDataFromDB("Hamza",(data)=>{
    console.log(data);
    getUserHobbies(data,(hobby)=>{
        console.log(hobby);
    })
})