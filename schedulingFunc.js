function greet() {
    console.log("Hello, How are you")
}

// setTimeout(greet, 3000); 
// setTimeout(()=> greet(), 3000) // preferred

function sayHi(phrase, who) {

    console.log(phrase + "," + who);

}
// let timerId = setTimeout(() => {
//     sayHi("Hello", "John ")
//     console.log(timerId);

//     clearTimeout(timerId)
//     console.log(timerId);
// }
// , 2000)

// timerId = setInterval(()=>  sayHi("Hello", "John "),1000)

// setTimeout(()=>clearInterval(timerId),5000) // clearing the time interval






// setInterval(() => {
//     sayHi("Hello","john")
// }, 2000);

// Nested timeout
// let newTimeId = setTimeout(function dev(){
//     console.log("Revising timeout function");

//     newTimeId =setTimeout(()=>dev(),5000);
//     clearInterval(newTimeId)
// }
// ,5000)

setTimeout(() => console.log("World")); // run the function as early as possible but after executing the current script

console.log("Hello"); // Hello world is printed because the script runs first the timeout