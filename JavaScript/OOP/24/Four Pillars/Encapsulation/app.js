// Encapsulation
//     Encapsulation is the concept of building data (properties)
//      and methods (functions) together within an object, 
//      allowing the object to control access to its internal 
//      data and behaviour. This helps to hide implementation
//      details and expose only necessary interfaces to interact
//      with the objeect. In Javascript you can achieve 
//      encapsulation by using closures, symbols, or naming
//      conventions to simulate private members and expose 
//      public interfaces.


function Counter(){
    let _count=0; // private variable

    // Public Method that can access and modify the private variables
    // we are hiding the implementation details and only provide necessary details 
    this.increment= function (){
        _count++;
    }
    this.decrement=function (){
        _count--;
    }
    this.getCount=function (){
        return _count;
    }

}

const counter= new Counter();
console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.decrement();
console.log(counter.getCount());