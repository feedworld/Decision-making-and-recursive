// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true; // It is a leap year
//     } else {
//         return false; // Not a leap year
//     }
// }

// console.log(isLeapYear(2024));  
// console.log(isLeapYear(1900));  
// console.log(isLeapYear(2000));  
// console.log(isLeapYear(2023));  


// function getTicketPrice() {
//     // Ask user to enter their age in the console
//     const readline = require('readline');
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });

//     rl.question("Please enter your age: ", (input) => {
//         const age = parseInt(input, 10);

//         // Validate the input
//         if (isNaN(age) || age < 0) {
//             console.log("Invalid age. Please enter a valid number.");
//         } else {
//             // Determine ticket price based on age
//             let price;
//             if (age <= 12) {
//                 price = 10;
//             } else if (age >= 13 && age <= 17) {
//                 price = 15;
//             } else if (age >= 18) {
//                 price = 20;
//             }

//             // Display the ticket price
//             console.log(`The price of your ticket is $${price}.`);
//         }

//         // Close the readline interface
//         rl.close();
//     });
// }

// // Call the function
// getTicketPrice();
