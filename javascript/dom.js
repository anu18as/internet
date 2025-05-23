// console.log(document)
// console.log(document.all)
// console.log(document.all[4])


var body=document.body
var ol=document.createElement("ol")
var li=document.createElement("li")
var lione=document.createElement("li")
var litwo=document.createElement("li")
console.log(ol)
console.log(li,lione,litwo)


li.innerHTML="music"
lione.innerHTML="car"
litwo.innerHTML="forest"


body.appendChild(ol)
ol.appendChild(li)
ol.appendChild(lione)
ol.appendChild(litwo)



// let h1=document.createElement('h1')
// console.log(h1)
// h1.innerHTML='No'
// let h2=document.createElement("h2")


// var body=document.body
// var ol=document.createElement("ol")



// var li=document.createElement("th")
// var lione=document.createElement("th")
// var litwo=document.createElement("th")
// var lithree=document.createElement("th")
// console.log(ol)
// console.log(li,lione,litwo,lithree)


// li.innerHTML="NO."

// lione.innerHTML="fullname"
// litwo.innerHTML="founder"
// lithree.innerHTML="salary"

// body.appendChild(ol)
// ol.appendChild(li)
// ol.appendChild(lione)
// ol.appendChild(litwo)h
// ol.appendChild(lithree)


// var body=document.body
// var ol=document.createElement("ol")



// var li=document.createElement("tr")
// var lione=document.createElement("tr")
// var litwo=document.createElement("tr")
// var lithree=document.createElement("tr")
// console.log(ol)
// console.log(li,lione,litwo,lithree)


// li.innerHTML="billgates"

// lione.innerHTML="steve"
// litwo.innerHTML="larry page"
// lithree.innerHTML="markzuckberge"

// body.appendChild(ol)
// ol.appendChild(li)
// ol.appendChild(lione)
// ol.appendChild(litwo)
// ol.appendChild(lithree)


// var h1=document.getElementById("heading")
// console.log(h1)
// h1.innerHTML= "<p> this is pharagraph</p>"


function printName(){
    var uname =document.getElementById("uname").value
     console.log(uname)

    if (uname ===""|| uname=== null){
        let unam =document.getElementById("uname")
        unam.style.border = "1px solid red"
        unam.style.borderRadius="12px"
        let errorMessage=document.getElementById("errorMessage")
        errorMessage.innerText="invalid input"
        errorMessage.style.color="red"
        let errorLabel = document.getElementById("errorLables")
        errorLabel.style.color="red"
    }

    var pwd =document.getElementById("pwd").value
     console.log(pwd)

    if (pwd ===""|| pwd=== null){
        let pwds =document.getElementById("pwd")
        pwds.style.border = "1px solid red"
        pwds.style.borderRadius="12px"
        let errorMessage=document.getElementById("errorMessage")
        errorMessage.innerText="invalid input"
        errorMessage.style.color="red"
        let errorLabels=document.getElementById("errorLables")
        errorLabels.style.color="red"
    }
    event.preventDefault()
}

document.all[6].innerHTML="<h1> this is heading<h1>"


document.all[6].innerHTML=" this is normal para"
    // var pwd =document.getElementById("pwd").value
    // console.log(pwd)
   