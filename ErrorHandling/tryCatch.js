function greet (){
    console.log("Good Morning.");
    
}

// setTimeout(()=>{
//     try {
        // greet()
//     } catch (error) {
        // console.log("this won't work")
//     }
// },2000)


try {
    variable ;
} catch (error) {
    console.log(error.name)
    console.log(error.message)
}

let data = '{"age":30}'

try {
    let user = JSON.parse(data);
    console.log(user.name)
} catch (error) {
    console.log("JSON ERROR ", error)
}
finally{
    console.log("it will execute always");
    
}