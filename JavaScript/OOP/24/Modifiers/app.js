// private => it makes our method or property private
// public => it makes our method or property public
// protected => it makes our method or property protected


function MyClass(publicField,privateField, protectedField){
    // Public Field
    this.publicField= publicField;
    // Private Field (closure)
    const _privateField=privateField;

    // Protected Field
    const _protectedField=protectedField;

    // Public Method
    this.publicMethod=function (){
        return `Public Field: ${this.publicField}`;
    }
    // Private Method (closure)
    function _privateMethod(){
        return `Private Method: ${_privateField}`
    }
    // Protected Method (closure)
    function _protectedMethod(closure){
        return `Protected Method: ${_protectedField}`;
    }

    // Method to access protected method
    this.accessProtectedMethod=function (){
        return _protectedMethod();
    }
    this.accessPrivateMethod=function (){
        return _privateMethod();
    }
}


const myObject= new MyClass("Public Data","Private Data","Protected Data");
console.log(myObject.publicField);
console.log(myObject._privateField);
console.log(myObject._protectedField);
console.log(myObject.publicMethod());
// console.log(myObject._privateMethod());
// console.log(myObject._protectedMethod());
console.log(myObject.accessProtectedMethod());
console.log(myObject.accessPrivateMethod());

