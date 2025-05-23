function displayMessage(){
alert("thanks for visiting the page")
}
function events(){
    console.log("button clicked twice")
}
function once(){
    console.log("clicked once")
}
function changeImage(){
    var x=document.getElementById("img")
    x.src="./bibimbap.png"
}

function oldImage(){
    var y=document.getElementById("img")
    y.src="./fast-delivery.png"
}


function changeColor(){
var para=document.getElementById("para")
para.style.color="green"
}


function normalColor(){
    var para =document.getElementById("para")
    para.style.color="black"
}


function normal(){
var pharagraph=Document.getElementById("pharagraph")
pharagraph.innerText="you have typed inside input feild"
}

function abnormal(){
    var pharagraph=Document.getElementById("pharagraph")
    pharagraph.innerHTML="you have released the keys "
    }
    
