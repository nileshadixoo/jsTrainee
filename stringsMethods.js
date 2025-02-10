let a = "hello"
let guestsList = `Guests:
*John
*Remo
*Becca
`
// accessing through index
// console.log(a[1])
// console.log(a.at(2))

// console.log(a[a.length-1]);
// console.log(a.at(-1));

// console.log(guestsList)// you can edit the string as you want using backtick 

a = a.toUpperCase();
console.log(a)
console.log(a.toLowerCase());

let str = "anything you create"
console.log(str.indexOf('create',76));


//  question 1 
// find the first occurance of  target string in the given string 
let string =  'As sly as a fox, as strong as an ox';
var target1 = 'py'
if(string.indexOf(target1)!==-1){
    //  console.log("found at index",string.indexOf(target)+1);
}
else {
    // console.log("not found");
    
}

// question 2
// // finding all occurance of target in a string 
// let  string1 =  'As sly as a fox, as strong as an ox';
// let  target = 'as'
// pos=0

// while(true){
//     let foundPos = string1.indexOf(target,pos)
//     if(foundPos===-1){
//         break;
        
//     };
//     console.log('Found at', foundPos);
//     pos = foundPos+1;
// }



let newStr = "we all the developers we"
// console.log(newStr.includes('we')) // return true or false
// console.log(newStr.startsWith('we')); //  return true or false
// console.log(newStr.endsWith('de')); // same


console.log(newStr.lastIndexOf('we')); // return the last index 

// substring 
console.log(newStr.slice(3))
console.log(newStr.substring(3));



