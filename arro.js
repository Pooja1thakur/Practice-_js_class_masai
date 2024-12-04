// let greet=()=>{
//     console.log("hy");
// }
// greet();


// let sum=(a,b)=>{
//     console.log(a+b)
// }
// sum(1,2)




//Difference between arrow and noraml function.
//arguments
// const sum=()=>{
//     console.log(arguments)
// }
// sum(1,2,3,4,5,6)


// let obj={
//     a:1,
//     b:2,
//     sum:function(){
//         console.log(this, "outer function")
//         let netedfun=()=>{
//             console.log(this, "nested funcyion")
//         }
//         netedfun()
//     }
// }
// obj.sum()







//Destructuring

//var one=num[0]
// //var two=num[1]



// //array destrunctring.
// const num=[1,2]
// let [one,two]=num
// console.log(one,two)



// let names=["ankur","neha","rotiki","ankus"];
// let[first,second,thred,fourth]=names;
// console.log(first,second,thred,fourth)


// let num1=[[1,2],3,4const num = [1, 2];
// let [one, two] = num;
// console.log(one, two);

// let names = ["ankur", "neha", "rotiki", "ankus"];
// let [first, second, third, fourth] = names;
// console.log(first, second, third, fourth);

// let num1 = [[1, 2], [3, 4,5]];
// let [[a, b], [c, d,e] = num1;


// const numebere=[12,20,30,40,50];
// let [[first,, third]]=numebere
// console.log(first,third)




//object destrunctring
// let obj={
//     name:"masai",
//     laung:"js",
// };
// //console.log(obj.name)

// let {name,laung}=obj;
// console.log(name,laung)


// let weatherdta={
//     humidity:"high",
//     latitude:90,
//     logitude:100,
//     address:{
//         city:"delhi",
//         pincode:5432,
//     }
// }
// let { latitude,logitude,place="india"}=weatherdta;
// console.log(latitude,logitude,place);
 

// let {address:city,pincode}=weatherdta
// console.log(city,pincode)

// const device = {
//     id: 101,
//     specs: {
//       os: "Android",
//       hardware: {
//         ram: "4GB",
//         storage: "64GB",
//       },
//     },
//   };
  
//   console.log(os, ram, storage);



//rest paermertr
// let res=0;
// function Sum(...nums){
// console.log(nums)
// }
// Sum(12,3,4,5,5,5,6,5,34,546,753,2,5,6,7,5,)





function joinword(sepra,name,place){

console.log( name+sepra+place)
}


joinword("~","hello","world")



//spread operator-opposite to rest.
let arr=[2,3,4]
let arr2=[5,6,7]
console.log(...arr,...arr2)// Improved version of the code with better naming conventions and comments

// Function to join words with a separator
function joinWords(separator, name, place) {
  console.log(`${name}${separator}${place}`);
}

// Example usage
joinWords("~", "hello", "world");

// Function to sum numbers using rest parameter
function sumNumbers(...numbers) {
  console.log(numbers);
}

// Example usage
sumNumbers(12, 3, 4, 5, 5, 5, 6, 5, 34, 546, 753, 2, 5, 6, 7, 5);

// Function to merge arrays using spread operator
function mergeArrays(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}

// Example usage
let arr1 = [2, 3, 4];
let arr2 = [5, 6, 7];
mergeArrays(arr1, arr2);

// Object destructuring with default values
let weatherData = {
  humidity: "high",
  latitude: 90,
  longitude: 100,
  address: {
    city: "delhi",
    pincode: 5432,
  },
};

let { latitude, longitude, place = "india" } = weatherData;
console.log(latitude, longitude, place);

// Nested object destructuring
let device = {
  id: 101,
  specs: {
    os: "Android",
    hardware: {
      ram: "4GB",
      storage: "64GB",
    },
  },
};

let { specs: { os, hardware: { ram, storage } } } = device;
console.log(os, ram, storage);

// Array destructuring with nested arrays
let num1 = [[1, 2], [3, 4, 5]];
let [[a, b], [c, d, e]] = num1;
console.log(a, b, c, d, e);

// Array destructuring with default values
let numbers = [12, 20, 30, 40, 50];
let [first, , third] = numbers;
console.log(first, third);

// Object destructuring
let obj = {
  name: "masai",
  language: "js",
};

de

