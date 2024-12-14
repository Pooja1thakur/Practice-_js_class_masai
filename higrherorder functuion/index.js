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



// let arr=[1,2,3,4,5];
// const sum=arr.filter(function (el,i,array){
//     return el % 3 === 0
// })

// let out=sum.reduce(function(acc,el,i,array){
//     return acc+el**3
// },0)
// console.log(out)

// const sumCubes = arr.map(num => num ** 3) 
//   .reduce((acc, currentValue) => accumulator + currentValue, 0); 

// console.log("Sum of cubes:", sumOfCubes); 





//Sorting
// let arr=[1,2,3,4,5];
// //console.log(arr.sort())//assending order.


// //sort in decending order.using sort you cant in decending order.
// //it compare ASCII value in given array of number.
// let res=arr.sort((a,b)=>
//   //a-b assingding oreder
//   //b-a decending oreder.
//   b-a
// )


// console.log(res)










//string
// let animals=["dog", "cat","elem","bee"]
// animals.sort()
// console.log((animals))

// //print string to dssending oreder.
// animals.sort((a,b)=>{
//   if(a>b) return -1//decending
//   if(a<b) return 1// assending
//   return 0
// })

// console.log(animals)







// let employees = [
//   { name: "john", salary: 90000, hireDate: "July 1, 2010" },
//   { name: "david", salary: 75000, hireDate: "August 15, 2009" },
//   { name: "ana", salary: 80000, hireDate: "December 12, 2011" },
// ];

// employees.sort((a,b)=>{
//   if(a.name > b.name) return 1
//   if(a.name < b.name) return -1
// return 0
// })
// console.log(employees);




//PSC
// let employee=[
//   {
//     name:"Alice",
//     taskCompleted:8,
//     rating:4.7,
//   },
//   {
//     name:"Bob",
//     taskCompleted:4,
//     rating:4.0,
//   },
//   {
//     name:"charle",
//     taskCompleted:6,
//     rating:3.5,
//   },
//   {
//     name:"David",
//     taskCompleted:10,
//     rating:4.9,
//   },
//   {
//     name:"Eve",
//     taskCompleted:7,
//     rating:2.8,
//   },
  

// ];

// let filterEmployees=employee.filter(employee=>employee.taskCompleted>5)

// //console.log(filterEmployees)

// let mapemployee=filterEmployees.map(employee=>{
//   let performance="";
//   if(employee.rating>4.5){
//     performance="Excellent"
//   }else if(employee.rating >=3 && employee.rating<=4.5){
//     performance="Good"
//   }
//   else{
//     performance="Improvement";
//   }
//   return {name:employee.name,performance}
// })
// //console.log(mapemployee);

// let order={"Excellent":3, "Good":2,"Improvement":1};
// let sortemplyee=mapemployee.sort((a,b)=>{
// return order[b.performance]-order[a.performance]
// })
// console.log(sortemplyee);





//Clousers.






// //Prototype.
// // let nums=[10,20,50,65];
// // console.log(nums.__proto__);


// // let str="pooja"
// // console.log(str.__proto__)







// //constructor function without prototype.
// function Employee(firstName, lastName, position) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.position = position;

//   this.getDetails = function () {
//     return `${this.firstName} ${this.lastName} - ${this.position}`;
//   };
// }



// Employee.prototype.getDetails=function(){
//   return `${this.firstName} ${this.lastName} - ${this.position}`;
// }


// const protoTypeMethod={
//   getDetails(){
//     return`${this.firstName} ${this.lastName} - ${this.position}`;
//   }
// }

// Employee.prototype=Object.create(protoTypeMethod)
// // Creating employee instances
// const employee1 = new Employee("Alice", "Johnson", "Manager");
// const employee2 = new Employee("Bob", "Smith", "Engineer");

// console.log(employee1)
// console.log(employee2)




//setProtoType.







//Inherite class

class rectangle{
  constructor(l,w){
    this.l=l;
    this.w=w;


  }
  area(){
     return this.l*this.w
  }
  perimeter(){
    return 2*(this.l+this.w)
 }
  
}
class sqare extends rectangle{
  constructor(side){
    super(side,side)

  }
  


}
let out=new sqare(2)
console.log(out.area())







// let res=new rectangle(2,4)

// console.log(res)
// console.log(res.area())
