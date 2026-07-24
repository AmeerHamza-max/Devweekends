// IIFE (Immediately invoked functio expression)
// if problem with the global scope so to avoid the global scope pollution variables we use iife
// if after iffe you are facing any syntax error problem for second function 
// you can  check the semicolon after first iffe 

(function chai(){
    // this is named iife
    console.log(`DB Connected`);

})();
// ()()

((name)=>{
    // this is simple iife 
    console.log(`DB Connected Two ${name}`);
})("Hamza");