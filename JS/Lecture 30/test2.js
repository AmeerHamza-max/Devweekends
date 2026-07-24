const array = [1,2,3,4];
const initialValue=0;
// const sum = array.reduce((acc,cur)=>{
//     return acc+cur;
// },initialValue)
// const sum = array.reduce((acc,cur)=>{
//     console.log(`acc: ${acc} and currentvalue: ${cur}`);
//     return acc+cur;
// })
// const sum = array.reduce((acc,cur)=>{
//     console.log(`acc: ${acc} and currentvalue: ${cur}`);
//     return acc+cur;
// },initialValue)
// console.log(sum);

// const myTotal = array.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999,

    },
    {
        itemName:"python course",
        price:999,
        
    },
    {
        itemName:"Mobile app course",
        price:5999,
        
    },
    {
        itemName:"Data Science course",
        price:10999,
        
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);