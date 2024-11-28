// let p1={
//     fname:"pooja",
//     lname:"thakur",
//     age:26,
//     title:"lady"
// };
// for(let key in p1){
//     console.log(key,p1[key])
//     //console.log(p1[key])
// }



//crete obj personal detail anme , age, place use for in loop print all keys and values.
// let sdetail={
//     fname:"pooja",
//     age:26,
//     place:"MP"
// };
// for(let key in sdetail){
//     //console.log(typeof(key))
//     console.log(key,sdetail[key])

// }



//write the program to get count of objects key
// let ipl={
//     rcb:"kohli",
//     csk:"MSD",
//     mi:"Rohit",
//     LSG:"Pant",
//     SRH:"Cummins"
// }
// let count=0;
// for(let key in ipl){

// count++
    
// console.log(count)
// }




// let sdetail={
//         name:"pooja",
//         age:26,
//         grade:"A",
//         isgradute:true,
//      };
//      for(let key in sdetail){
//         if (typeof sdetail[key] === "string") {
//             console.log(key,sdetail[key]);
//           }
//         //console.log(key,sdetail[key])
//      }



// let price={
//     braed:2,
//     milk:1.5,
//     chesse:5,
// };
// for(let key in price){
//     price[key]=price[key]*0.9
// }
// console.log(price)


//write a function that counts the number of occurence of keys in obj.
// let str="abbccc";
// let obj={}
// for(let i=0;i<str.length;i++){
//     let key=str[i]
// if(obj[key]==undefined){
//     obj[key]=1; 
// }

// else{
//     obj[key]++
// }



// // }for(let key in obj){
// //     console.log( key,"is printed",obj[key], "times")
// // }



// //write a function take a str swiss return 1st non repeating charcter
// let str="swiss";
// let obj={}
// for(let i=0;i<str.length;i++){
//     let key=str[i]
// if(obj[key]==undefined){
//     obj[key]=1; 
// }

// else{
//     obj[key]++
// }



// }for(let key in obj){

//     if(obj[key]===1){
//         console.log( key)
//     }
    
//    // console.log( key,"is non repeting chr",obj[key])
// }



//object method
// let per={
//     name:"pooja",
//     age:20,
//     details: function(){
//     return `Your ${this.name} and ${this.age}`
//     }
// }
//console.log(per.details())



// let a=10;
// let b=20;
// let obj={
//     a:1,
//     b:2,
//     sum:function(){
//         console.log(this.a+this.b)
//     }

// }
// obj.sum()



// let rectgle = {
//     width:5,
//     height:10
//   };
  
//   function calPeri(rect) {
//     return 2 * (rect.width + rect.height);
//   }
  
//   let parimetr = calPeri(rectgle);
  
//   console.log(`The perimeter of the rectangle is: ${parimetr}`);






//crete an obj bankacount it should have foloowing properties(accountholder name, balance).
//deposite-add balace your account and return the balance.
//withdrow-withdraw balnce and updete your balnce and return that. 


  