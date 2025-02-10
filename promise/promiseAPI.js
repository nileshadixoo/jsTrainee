// Promise.all([
//     new Promise((resolve)=> setTimeout(()=>resolve(1),3000)),
//     new Promise((resolve)=> setTimeout(()=>resolve(2),2000)),
//     new Promise((resolve)=> setTimeout(()=>resolve(3),1000)),
// ])
// .then(()=>console.log("all promises are completed ")) // when we want to execute multiple promises parallelly

let urls = [

    'https://random-d.uk/api/random',
    'https://placebear.com/g/200/300',
]

let requests = urls.map(url=>fetch(url));


// Promise.all(requests)
// .then((res)=>res.map(response=>console.log(response.status)))
// .catch(err=> console.log(err.message)) // fetching three api simultaneously
// .finally(()=>console.log("by promise all"))
// if one the fetch failed it will throw error 


// promise.allSettled
// Promise.allSettled(requests)
// .then((res)=>res.map(response=>console.log(response.status)))
// .catch((err)=> console.log(err))
// .finally(()=>console.log("by promise allSettled"))
// it will throw error only for the api it was unable to fetch

Promise.race(requests)
.then((res)=>console.log(res))
.catch((err)=> console.log(err))
.finally(()=>console.log("by promise race"))
// returns result of first promise and error any of the promise gets failed

// Promise.any(requests)
// .then((res)=>console.log(res))
// .catch((err)=> console.log(err))
// .finally(()=>console.log("by promise race")) // if any the promise fullfills then result/output and if none of the promise gets the result then it will return the array of error for all the promise

