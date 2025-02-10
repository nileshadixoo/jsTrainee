function showMessage(){
    console.log("Hello Everyone")
}

showMessage()

function newMessage(from, text="no text given"){
    from = "*"+from+"*"
    console.log(from+":"+text)
}

newMessage("Anu" )

let sayHi = function(){
    console.log("hello")
}
sayHi() 

let func = sayHi
func()

