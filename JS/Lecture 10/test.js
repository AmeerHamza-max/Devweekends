//  **********************************************
// Memory Type
//  Stack (Primitive), Heap (Non-Primitive)

// stack (Primitive)
// When memory defined in stack it passes or defines the copy of the memory

// Heap (non-Primitive)
// When memory defined in heap it passes or defines the reference of the memory not the copy of the memory


let myAddress="DhoolKadhi";

let anotherAddress='TehsilSahiwal';
anotherAddress="TehsilSahiwalDistrictSargodha";


let userOne ={
    email:"Hamza@gmail.com",
    upi:"user@bl",
}


let userTwo=userOne;
userTwo.email="Junaid@gmail.com";


console.log(anotherAddress);