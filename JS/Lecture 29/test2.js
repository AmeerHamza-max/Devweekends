//for each
// const coding = ["coding","ruby","java","python"];
// coding.forEach(function (val){
//     console.log(val);
// })
// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// });

const myCoding = [
    {
        languageName:"Javascript",
        languageFileName:"js"
    },
    {
         languageName:"java",
         languageFileName:"java",
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]


myCoding.forEach((val)=>{
    console.log(val);
})