// let arr=[10,20,30,40];

// for(let i=0;i<arr.length;i++){
//     console.log(i,arr[i],arr)
// }


//ForEach function
// arr.forEach(function (element,index,array){
//     console.log(index);
//     console.log(element)
//     console.log(array)
// })

//write a program all sum of given array to use foreach function.
// let nums=[10,20,30,40];
// let sum=0;
// nums.forEach(function (element,index,array){
//     sum+=element
// })
// console.log(sum);



// nums.forEach((el)=>(sum+=el));
// console.log(sum)


// let nums=[10,20,30,40];
// let out=[]
// nums.forEach((el)=>{
//     out.push(el*2)
// })
// console.log(out)




// const arr=[3,4,5,6,7];
// let out=[]
// arr.forEach((el,i)=>{
//     if(el%2!==0){
//         out.push(el)
//     }


// })
// console.log(out.join("-"))





// const user=[
//     {name:"john",age:34},
//     {name:"jane",age:30},
//     {name:"mike",age:20},
// ];

// let out=user.map(function (el,i,array){
//     return el.name;
// })
// console.log(out)






// const numbers = [1, 2, 3, 4, 5, 6];
// const evenNum = numbers.map(num => num % 2 === 0 && num) .filter(Boolean); 
// console.log(evenNum);




// const user=[
//        {name:"john",age:34},
//         {name:"jane",age:30},
//          {name:"mike",age:20},
//     ];
//     let out=user.filter(function(el,i,array){
//         return (el.age>=25) 
//     })
// let res=(out).map(function(el){
// return el.name
// })
// console.log(res)



//REDUCe method without initial value.
// let nums=[10,20,30,40];

// let res=nums.reduce(function (acc,el,i,array){
// return acc+el
// })
// console.log(res)


  //reduce with initial value.
//   let nums=[10,20,30,40];

//   let res=nums.reduce(function (acc,el,i,array){
//   return acc+el
//   },0)
//   console.log(res)


// let nums=[10,20,30,40];
// let res=nums.reduce(function (acc,el,i,array){
// return acc*el
// })
//  console.log(res);


//  let nums=[10,20,30,40];
// let res=nums.reduce(function (acc,el,i,array){
// return acc*el
// },1)
//  console.log(res);
 

// let arr=[1,2,3,4];
// let res=arr.filter(function (el,i,array){
//     return el%2!==0
// })
// let out=res.reduce(function(acc,el,i,array){
//     return acc+el
// })
// console.log(res)
// console.log(out)



let arr=[1,2,3,4,5];
const sum=arr.filter(function (el,i,array){
    return el % 3 === 0
})

let out=sum.reduce(function(acc,el,i,array){
    return acc+el**3
},0)
console.log(out)

// const sumCubes = arr.map(num => num ** 3) 
//   .reduce((acc, currentValue) => accumulator + currentValue, 0); 

// console.log("Sum of cubes:", sumOfCubes); 