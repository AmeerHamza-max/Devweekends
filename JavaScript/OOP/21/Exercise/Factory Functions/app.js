function facotryFunction(type,brand,model,year){
    return {
        type,
        brand,
        model,
        year,
        facotry:function(){
            return `This is ${this.type} car brand ${this.brand} and model ${this.model} built in ${this.year}  `;
        }
    }
}

let obj1=facotryFunction("Car","Honda","Camry",2020);
console.log(obj1.facotry());