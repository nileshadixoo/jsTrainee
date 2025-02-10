// defining custom error 
class ValidationError extends Error {
    constructor(message){
    super(message)
        this.name = "Custom Error"
    }
}

class PropertyRequiredError extends ValidationError{
    constructor(property){
        super("No Property"+property)
        this.name = 'propertyRequiredError'
        this.property = property;
    }
}
let data = `{"age":30}`
function readUser(data){
    let user = JSON.parse(data);
    if(!user.age){
        throw new PropertyRequiredError("age is required")
    }
    if(!user.name){
        throw new PropertyRequiredError("name is required")
    }
}

try {
    let user = readUser(data)
} catch (error) {
    if(error instanceof ValidationError){
        console.log("error name:",error.name)
        console.log("Invalid data", error.message)
        console.log("property",error.property);
    }
    if(error instanceof SyntaxError){
        console.log(error.message)
    }
}