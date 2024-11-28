// //varibles
// var name1="Pooja"
// //console.log(name1)

// //update the value
// var name2="gyan"
// name2="rohit"
// //console.log(name2)

// var num=4;
// if(num%4===0){
//     //console.log("Yes")
// }
// else{
//     //console.log("No")
// }

// let N=5
// for(let i=1;i<=N;i++){
//     //console.log(N +" *" +" = "+N*i)
// }

// let n=5;
// for(let i=1;i<=n;i++){
//     let bag="";
// for(let j=1;j<=n;j++){
//     if(i==1  && j==n-1){
// bag=bag+" "
//     }
// bag=bag+"*"+" "
// }
// //console.log(bag)
// }

// let num1 = 3;
// let num2 = 7;
// let num3 = 5;

// if(num1 > num2 && num1 > num3){
//   //console.log("true")
// }
// else{
//    // console.log("false")
// }

// if(num2 > num1 && num2 > num3){
//    //console.log("true")
//  }
//  else{
//    // console.log("false")
// }
//  if(num3 > num1 && num3 > num2){
//    //console.log("true")
//  }
//  else{
//    //console.log("false")
//  }


 
// let R1 = 3 ; 
// let R2= 4;
// const PI = Math.PI;
// let area1 = PI * R1 * R1;
// let area2 = PI * R2 * R2;


// let circumference1 = 2 * PI * R1;
// let circumference2 = 2 * PI * R2;


// let isAreaGreater = area1 > area2;
// let isCircumferenceGreater = circumference1 > circumference2;


// if(isAreaGreater){
//   console.log("true")
// }
// else{
//   console.log("false")
  
// }
// if(isCircumferenceGreater){
//   console.log("true")
// }
// else{
//   console.log("false")
// }



// function showDateTime() {
//   const now = new Date();
//   const date = now.toLocaleDateString();
//   const time = now.toLocaleTimeString();
//   console.log(`Current Date: ${date}`);
//   console.log(`Current Time: ${time}`);
// }

// showDateTime()


// function Averageofthreenum(num1, num2, num3) {
//   const sum=num1 + num2 + num3
//   const average =sum/ 3;
//   //console.log(`Average of  ${num1}, ${num2}, and ${num3} is: ${average}`);
// }
// const avg=Averageofthreenum(10, 20, 30);
// //console.log(avg)


// function generateBill(basePrice = 0,tax = 0.1,discount = 0.05) {
//   const sum = basePrice + (basePrice * tax) - (basePrice * discount);
//   console.log(`result:${sum}`);
// }

// generateBill();
// generateBill(100);
// generateBill(100, 0.2, 0.1);


// function Large(num1, num2) {
//   if (num1 > num2) {
//       return num1;
//   } else {
//       return num2;
//   }}
// const result = Large(45, 78);
//console.log(result);

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter number of rows (1-10): ', (input) => {
//     let rows = Number(input); // Convert input to a number
//     generatePattern(rows);
//     rl.close();  // Close the readline interface
// });


// function generatePattern(rows) {
  
//   for (let i = 1; i <= rows; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//           if (j % 3 !== 0) {
//               row += j + ' ';
//           }
//       }
//       if (row.includes('7')) {
//           break;
//       }
//       console.log(row.trim());
//   }
// }

// // // Input
// // //let rows = parseInt(prompt('Enter number of rows (1-10): '));

// // // Generate the pattern
// // //generatePattern(rows);

// const readline = require('readline');

// const greetUser = function() {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question("Enter your name: ", function(name) {
//         if (!name) {
//             name = "Guest"; 
//         }
//         console.log(`Hello, ${name}!`);
//         rl.close();
//     });
// };


// greetUser();
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to sum numbers using rest parameters
const sumNumbers = function(...args) {
    return args.reduce((total, num) => total + num, 0); // Sum the valid numbers
};

// Function to collect user input
function getNumbers() {
    let numbers = [];
    
    function askQuestion() {
        rl.question("Enter a number (or press Enter to finish): ", (input) => {
            if (input === "") {
                const total = sumNumbers(...numbers); // Sum up the collected numbers
                console.log(`Total sum: ${total}`);
                rl.close(); // Close the readline interface
                return;
            }

            let num = Number(input); // Convert input to number

            // Check if the input is a valid number
            if (!isNaN(num)) {
                numbers.push(num); // Add valid number to the numbers array
                askQuestion(); // Ask for another number
            } else {
                console.log("Please enter a valid number.");
                askQuestion(); // Ask again if input is invalid
            }
        });
    }

    askQuestion(); // Start the questioning loop
}

// Call the function to start getting input
getNumbers();
