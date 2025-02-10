function fetchData(callback){
    setTimeout(
        ()=>{console.log("data Fetched")
        callback("data is ready")}
    ,2000)
}

// fetchData((message) => {
//     console.log(message);
// });

// complex sequences
function step1(callback){
    setTimeout(()=>{
        console.log("step1 completed")
        callback();
    },1000)
}
function step2(callback){
    setTimeout(()=>{
        console.log("step2 completed");
        callback();
        
    },1000)
}

step1(()=>{
    step2(()=>{
        console.log("All the steps are completed")
    })
})