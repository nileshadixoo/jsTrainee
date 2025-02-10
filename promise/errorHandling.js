fetch('https://random-d.uk/api/random')
.then(response =>  response.json())
.then(data=> console.log(data))
.catch(error => console.log(error))


