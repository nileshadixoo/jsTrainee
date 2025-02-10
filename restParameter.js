// program to sum numbers using rest parameter it is used while passing args in function 
function fn(...args){
    let sum = 0 ;
    // for(let i=0; i<args.length; i++){
    //     sum+=args[i];   
    // }
    for(let arg of args) sum += arg   
     console.log(sum);
}
// fn(1,2)
// fn(1,2,3,4,5)
// fn(1,2,3,4,5,3,4,7,8)


// speard syntax and used when making copy it expand the array into a list  
let array = [1,2,3]
console.log(Math.max((1,5,8)))
// console.log(Math.max(arr)) // throws an error 
// to resolve this we can use spread 
console.log(Math.max(...array))

let string = "hello"
console.log(...string)
console.log(Array.from(string)) // returns an array from the given string 