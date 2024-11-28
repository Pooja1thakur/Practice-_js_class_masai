// let animalList=[];
// console.log(typeof(animalList));

// const { reverse } = require("dns");


// // var wildAnimals=["A","B","C","D","E"];
// // console.log(wildAnimals[0]);
// // console.log(wildAnimals[4]);



//  let num=[1,2,3,4,5,6];
//  let sum=0;
//  for(let i=0;i<=num.length-1;i++){
//     if(num[i]%2==0){
// sum+=num[i]
//     }
//     console.log(sum)
//      }
//    // console.log(sum)



   
  

//  function countChar(str, char) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   console.log(countChar("hello world", "o")); // Output: 2
//   //console.log(countChar("javascript", "a")); // Output: 2
  

//   function findIndex(str, char) {
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === char) {
//         return i; 
//       }
//     }
//     return -1; 
//   }
  
//   //console.log(findIndex("hello", "z")); 
  


function sumNumbers() {
  let numbers = []; 
  let sum = 0; 
  do {
    let input = prompt("Enter a number:");
    if (isNaN(input)) {
      alert("Please enter a valid number.");
    } else {
      numbers.push(parseInt(input));
      sum = sum+ parseInt(input); 
    }
  } while (confirm("Do you want to enter another number?"));
  return sumNumbers(...numbers); 
}

function sumNumbers(...args) {
  let sum1 = 0;
  for (let i = 0; i < args.length; i++) {
    sum1 = sum+ args[i];
  }
  return sum1;
}


let result = sumNumbers();
console.log("The sum of the numbers is:", result); 