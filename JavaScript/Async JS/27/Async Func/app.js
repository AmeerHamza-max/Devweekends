// Async Function
// Async is a special function that is designed to operate 
// asynchronously, meaning that it can perform tasks in the
// background while other code continues to execute. Async
// Functions are marked with the async keyword.



// Async
// Async is a keyword use to turn function declration to async
// function 


// await 
// The await operator is used to wait for a Promise. It can only be used
// inside async function within regular Javascript code.


// async function getData() {
//     const response = await fetch("https://api.example.com/endpoint");
//     const data = await response.json();
//     return data;
// }

// async function main() {
//     const data=await getData();
//     console.log(data);
// }



function fetchDataFromServer(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
             resolve("User data retrieved from the server. ")
        },4000)
       
    });
}


async function getUserData() {
    try {
        const data = await fetchDataFromServer();
        console.log(data);
        console.log("Remaining task can be executed here. ")
    } catch (error) {
        console.log(error);
    }
    
}
getUserData();