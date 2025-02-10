// let promise = new Promise((resolve,request)=>{
//     setTimeout(()=>resolve("success"),4000)
// })

// let result = await promise
// console.log(result)


async function promise2() {
    let result = await fetch('https://random-d.uk/api/v2/random')
    let data = await result.json();
    console.log(data);

}


// try {
//     promise2()


// } catch (error) {
//     console.log(error)
// } 

const promise3 = async(url)=>{
   try {
    const res = await fetch(url)
   // console.log(res.json()) returns a promise
    let result = await res.json();
    console.log(result)
   } catch (error) {
    console.log(error)
   }
}

promise3('https://random-d.uk/api/v2/random')
