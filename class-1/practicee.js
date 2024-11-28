
// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });



// const sumNumbers = function(...args) {
//     return args.reduce((total, num) => total + num, 0); // Sum the valid numbers
// };

// // Function to collect user input
// function getNumbers() {
//     let numbers = [];



// function askQuestion() {
//     rl.question("Enter a number (or press Enter to finish): ", (input) => {
//         if (input === "") {
//             const total = sumNumbers(...numbers); // Sum up the collected numbers
//             console.log(`Total sum: ${total}`);
//             rl.close(); // Close the readline interface
//             return;
//         }

//         let num = Number(input); // Convert input to number

//         // Check if the input is a valid number
//         if (!isNaN(num)) {
//             numbers.push(num); // Add valid number to the numbers array
//             askQuestion(); // Ask for another number
//         } else {
//             console.log("Please enter a valid number.");
//             askQuestion(); // Ask again if input is invalid
//         }
//     });
// // }

// // askQuestion(); // Start the questioning loop
// // }

// // // Call the function to start getting input
// // getNumbers();







// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function calculatePrice(price, discount = 10) {
//     if (isNaN(price) || price <= 0) {
//         return "Invalid price. Please enter a positive number.";
//     }

//     if (isNaN(discount) || discount < 0 || discount > 100) {
//         return "Invalid discount. Please enter a number between 0 and 100.";
//     }

//     const discountAmount = (price * discount) / 100;
//     const finalPrice = price - discountAmount;

//     return `The final price after a ${discount}% discount is: $${finalPrice.toFixed(2)}`;
// }

// rl.question('Enter price: ', (priceInput) => {
//     rl.question('Enter discount (optional, default is 10%): ', (discountInput) => {
//         const price = parseFloat(priceInput);
//         let discount = discountInput ? parseFloat(discountInput) : 10;

//         const result = calculatePrice(price, discount);
//         console.log(result);
//         rl.close();
//     });
// });



