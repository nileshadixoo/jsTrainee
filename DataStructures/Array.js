let a = [1, 3, 4, 5, 6, 7, 'a', "string"]
// console.log(a.length)

// delete a[1];
// delete a[4];



// console.log(a.splice(0,6))

// a.forEach((item, index)=>{
//     console.log(item)
// })


// console.log(a.indexOf('a'))

let users = [
    {
        id:1,
        name:"John"
    },
    {
        id:2,
        name:"bemo"
    },
    {
        id:3,
        name:"fin"
    }
]



// let user  = users.find((item)=>{
//    return   item.id==1    
// })

let user  = users.filter((item)=>(
       item.id<3    
))
// console.log(user)

let u = ['john','doe','fin','jake   '].map((item)=>(item.length))
// console.log(u);     

let arr = [
    1,16,5,54,86,9
]
// console.log(arr) // original array 
// console.log(arr.slice(0))
function cloneArray(arr){
    return arr.slice(0);
}
cloneArray(arr)
//  arr.sort()
// console.log(arr)

function getFirstNElement(arr, n ){
return arr.slice(0,1)
}
// console.log(getFirstNElement())


// reduce 
let arr1 = [1, 2, 3, 4, 5];

let result = arr1.map((sum, current) => sum + current); // return an array of element
let result1 = arr1.reduce((sum, current) => sum + current); // return a single element



console.log(result)

// console.log(users) 


let checkingFilter = users.map(item=>item.id==3)
let checkingFilter2 = users.filter(item=>item.id==3) // returns the value based on the test condition
// console.log(checkingFilter)
// console.log(checkingFilter2)

var arr5 = [1,7,6,98,0,90];
var arr6 = [9,7,3,8,0,0];
function fn(arr1, arr2){
    if(arr1.length === arr2.length && arr1.some((value,index)=> value === arr2[index]))
        return true;
    else {
        return false;
    }
}


// if any one value is correct in the array some return true;

function fn2(arr1, arr2){
    if(arr1.length === arr2.length && arr1.every((value,index)=> value === arr2[index]))
        return true;
    else {
        return false;
    }
}
console.log(fn2(arr5,arr6))
// it checks for all the element
        

let newArr = [12,12,65,87,90];
console.log(newArr.slice(2,4));
