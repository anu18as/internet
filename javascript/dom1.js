function printName(){
    var uname=document.getElementById("uname").value 
    console.log(uname) 

    if(uname === "" || uname === null){
        let unam = document.getElementById("uname")
        unam.style.border ="1px solid red"
        unam.style.borderRadius = "12px"
        let errorMessage = document.getElementById("errorMessage")
        errorMessage.innerText = "invalid input"
        errorMessage.style.color = "red"
        let errorLabel = document.getElementById("errorLabel")
        errorLabel.style.color = "red"
    }

   
    var pwd = document.getElementById("pwd").value
    console.log(pwd)

    if(pwd === "" || pwd === null){
        let pwds=document.getElementById("pwd")
        pwds.style.border = "1px solid blue"
        pwds.style.borderRadius = "12px"
        let errorMessages = document.getElementById("errorMessages")
        errorMessages.innerText = "invalid input"
        errorMessages.style.color = "red"
        let errorLabels = document.getElementById("errorLabels")
        errorLabels.style.color= "red" 
    }


    var email= document.getElementById("email").value
    console.log(email)

    if(email === "" || email === null){
        let email=document.getElementById("email")
        email.style.border="1px solid brown"
        email.style.borderRadius = "12px"
        let error=document.getElementById("error1")
        error.innerText ="invalid input"
        error.style.color ="red"
        let errorLabels = document.getElementById("error-1")
        errorLabels.style.color= "red"
    }


    var file=document.getElementById("Files").value
    console.log(file)

    if(file === "" || file === null){
        let file=document.getElementById("Files")
        file.style.border="1px solid red"
        file.style.borderRadius ="12px"
        let error=document.getElementById("error2")
        error.innerText ="invalid input"
        error.style.color ="red"
        let errorLabels = document.getElementById("error-2")
        errorLabels.style.color= "red"
    }

    
    var date = document.getElementById("Date").value
    console.log(date)

    if(date === "" || date === null){
        let date=document.getElementById("Date")
        date.style.border="1px solid brown"
        date.style.borderRadius ="12px"
        let error=document.getElementById("error3")
        error.innerText ="invalid input"
        error.style.color ="red"
        let errorLabels = document.getElementById("error-3")
        errorLabels.style.color= "red"
    }

    var phone = document.getElementById("Number").value
    console.log(phone)

    if(phone === "" || phone === null){
        let phone=document.getElementById("Number")
        phone.style.border="1px solid brown"
        phone.style.borderRadius ="12px"
        let error=document.getElementById("error5")
        error.innerText ="invalid input"
        error.style.color ="red"
        let errorLabels = document.getElementById("error-5")
        errorLabels.style.color= "red"
    }


    var color = document.getElementById("Color").value
    console.log(color)

    if(color === "" || color === null){
        let color =document.getElementById("Color")
        color.style.border="1px solid brown"
        color.style.borderRadius ="12px"
        let error=document.getElementById("error6")
        error.innerText ="invalid input"
        error.style.color ="red"
        let errorLabels = document.getElementById("error-6")
        errorLabels.style.color= "red"
    }


    event.preventDefault()
}