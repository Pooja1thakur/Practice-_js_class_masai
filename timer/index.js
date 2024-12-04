//Call stck exceed ..Overflow call stack
// function countdown(number){


//     //fix this code for infinity
//     // if(number<=0){
//     //     return;
//     // }
// console.log(number)
// countdown(number-1)
// }
// countdown(5);


//Lexical Scoping
// function outer(){
//     inner();
//     function inner(){
//         console.log(outerVariable)
//     }
// }
// var outerVariable=99;
// outer();



//Lexical Scoping
// var x=10;
// function f(){
//     var y=20;
//     function g(){
//         var z=30;
//         console.log(x+y+z)
//     }
//     g()
// }
// f()


//function currying.

// function add(a){
//     return function(b){
//         return function (c){
//             return a+b+c;
//         }
      
//     }
// }
// //var addfive=add(2,3)
// //console.log(add(1))
// let oout=add(1)

// let res=(oout(2))
// console.log(res(3))


// function sum(a){
//     return function (b){
//         return function (c){
//             return a+b+c
//         }
//     }
// }

// let out=sum(2)(3)(2);
//  console.log(out)





//area of rectangle in currying way
// function area(w){
//     return function (h){
//         return w*h
//     }
// }
// let out=area(2)(3)
// console.log(out)






