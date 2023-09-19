let multiDimArray = [[]];

let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Prompt the user for the table number
let tableNumber = parseInt(prompt("Enter the table number:"));

// Prompt the user for the length of the table
let tableLength = parseInt(prompt("Enter the table length:"));

// Check if the inputs are valid numbers
if (!isNaN(tableNumber) && !isNaN(tableLength)) {
  // Print the multiplication table
  console.log(`Multiplication Table for ${tableNumber} (up to ${tableLength} terms):`);
  for (let i = 1; i <= tableLength; i++) {
    let result = tableNumber * i;
    console.log(`${tableNumber} x ${i} = ${result}`);
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

console.log("Fruits in the array:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


let A = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number
let smallest = A[0];

// Loop through the array to find the smallest number
for (let i = 1; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i];
    }
}

// Display the smallest number
console.log("The smallest number in the array is: " + smallest);

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  
