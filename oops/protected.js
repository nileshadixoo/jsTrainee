
// public property water amount 
// class CoffeeMachine{
//     waterAmount = 0;
//     constructor(power){
//         this.power = power
//         console.log("Machine is created with power",power);
//     }
// }

// protected properites are prefixed with underscore
class CoffeeMachine{
    _waterAmount = 0;
    set waterAmount (value){
        if(value<0){
            value =0;
        }
        this.waterAmount = value;    
    }
    get waterAmount(){
        return this._waterAmount;
    }
    constructor(power){
        this._power = power
        console.log("Machine is created with power",power);
    }
    get power(){
        return this._power
    }
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine._waterAmount = -10
coffeeMachine.power = 25

