var date = new Date();
var day = date.getDay();
const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"]
console.log("Today is :", dayList[day])

var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();


console.log(hours+":"+min+":"+sec)

var dd = date.getDate();
var mm = date.getMonth()+1;
var yyyy = date.getFullYear();

console.log("today is :" +dd+"/"+mm+"/"+yyyy)
