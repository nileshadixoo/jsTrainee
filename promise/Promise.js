// let promise = new Promise(function(resolve, reject){
//     setTimeout(()=>resolve('done!!'),2000)
// })
// promise
// .then((result)=>console.log(result))
// .catch((error)=> console.log(error))
// .finally(()=>console.log("always executes")
// )


// real world use

function fetchData(url) {
  return new Promise((resolve, reject) => {
    let success = false;
    if (success) {
      resolve(
        "data is resolved"
      )
    }
    else {
      reject("Error in fetching url   ")
    }
  })
}
fetchData("https://api.example.com/data")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// handling multiple promises

// Promise.all([promise1,promise2,promise3]).
// then((result)=>{
//   console.log(
//       result
//   )
// })
// .catch((error)=>console.log(error))

let firstPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("success")
  }
  else {
    reject("error")
  }

})

// firstPromise.then((res)=>console.log(res))
// .catch(err=>console.log(err))



// promise chaining

firstPromise
  .then((res) => console.log(res))
  .then(() => console.log('second Message'))
  .then(() => console.log('third message'))
  .then(()=>console.log('this is how promise chain works'))