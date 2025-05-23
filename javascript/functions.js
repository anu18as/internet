// var x=function(a,b){
//    var sub= a-b
//    console.log(sub)
// }
// x(3,1);
// x(7,9);



// (function(a,b){
//     var mul=a*b
//     console.log(mul);
// })
// (2,3);



// var div=(a,b)=>a/b
// console.log(div(10,5))


// function y()
// {
//     console.log('hello')

// }

// function z()
// {
//     console.log('world')
// }
// y(z())
// setTimeout(z,4000)


// Named functions

function add(a,b){
    var sum=a+b;
    console.log(sum)
}
add(7,5)


function sub(a,b){
    var sub=a-b;
    console.log(sub)
}
sub(127,54)


function mul(a,b){
    var mul=a*b;
    console.log(mul)
}
mul(7,2)


function divi(a,b){
    var divi=a/b;
    console.log(divi)
}
divi(10,5)

function mod(a,b){
    var mod=a%b;
    console.log(mod)
}
mod(50,5)

// anonymous function


 var x = function (a,b){
     var sum=a+b;
     console.log(sum)
 }
 x(7,5);


var x =function (a,b){
    var sub=a-b;
    console.log(sub)
}
x(127,54);


var x= function (a,b){
    var mul=a*b;
    console.log(mul)
}
x(7,2);


var x=function divi(a,b){
    var divi=a/b;
    console.log(divi)
}
x(10,5);

var x=function (a,b){
    var mod=a%b;
    console.log(mod)
}
x(50,5);

// self/immediately inovoking function

(function (a,b){
    var sum=a+b;
    console.log(sum)
})
(7,5);


(function (a,b){
    var sub=a-b;
    console.log(sub)
})
(127,54);


(function (a,b){
    var mul=a*b;
    console.log(mul)
})
(7,2);


(function (a,b){
    var divi=a/b;
    console.log(divi)
})
(10,5);

(function mod(a,b){
    var mod=a%b;
    console.log(mod)
})
(123,5);

//arrow function


var add =(a,b)=>a+b
console.log(add(2,4));


var sub =(a,b)=>a-b
console.log(sub(2,4));


var mul =(a,b)=>a*b
console.log(mul(2,4));


var div =(a,b)=>a/b
console.log(div(2,4));


var mod =(a,b)=>a%b
console.log(mod(2,4));