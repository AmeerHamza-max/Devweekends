function showCallFunc(fn){
    let b=10;
    fn(b);
}
function callbackFunc(num){
    console.log(num);
}
showCallFunc(callbackFunc);



