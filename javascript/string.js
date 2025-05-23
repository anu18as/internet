var str =prompt("search here")
console.log(str)
console.log(str.length)


var x =str.trim()
console.log(x)
console.log(x.length)



var fullnames=str.trim()
console.log(fullnames)


var firstChar =fullnames.slice(0,1)
console.log(firstChar)
var firstUpper=firstChar.toUpperCase()
console.log(firstUpper)

var remainingChar=fullnames.slice(1,fullnames.length)
console.log(remainingChar)
var remainingLower=remainingChar.toLowerCase()
console.log(remainingLower)

var fullname= firstUpper.contact(remainingLower)
alert("welcome"+fullname)


var x='jspiders'
console.log(x)
var y= replace("j","q")
console.log(y)
var x='malayalam'
var y =x.replaceAll("a","e")
console.log(y)