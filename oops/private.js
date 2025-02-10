class CoffeeMachine{
    #waterAmount = 200;
    get waterAmount(){
        return this.#waterAmount;
    }
    set waterAmount(value){
        if(value<0) value = 0;
        this.#waterAmount = value;

    }
    constructor(power){
        this.power = power;
    }
}

let coffeeMachine = new CoffeeMachine(200);
coffeeMachine.waterAmount = 2300 // setter 
console.log(coffeeMachine.waterAmount) // getter 
console.log(coffeeMachine.#waterAmount) // error because it is private property 