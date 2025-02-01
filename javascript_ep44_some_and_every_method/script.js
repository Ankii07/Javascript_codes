const evenNumbers = [0, 2, 10, 4, 61, 8]


// const result = evenNumbers.some((num, i) => {
//     if(num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })

const result = evenNumbers.every((num) => {
    debugger
    return num % 2 === 0
})

// In JavaScript, the some and every methods are used on arrays to test whether some or all elements in the array pass a provided function, respectively. Both methods take a callback function as an argument and return a boolean value.

// some Method
// The some method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if at least one element passes the test; otherwise, it returns false.

// Syntax
// javascript
// Copy code
// array.some(callback(element[, index[, array]])[, thisArg])
// callback: A function that tests each element. It receives three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array some was called upon.
// thisArg (optional): A value to use as this when executing the callback.
// Example
// javascript
// Copy code
// const numbers = [1, 2, 3, 4, 5];

// const isEven = (num) => num % 2 === 0;

// console.log(numbers.some(isEven)); // Output: true (because 2, 4 are even)
// every Method
// The every method tests whether all elements in the array pass the test implemented by the provided function. It returns true if all elements pass the test; otherwise, it returns false.

// Syntax
// javascript
// Copy code
// array.every(callback(element[, index[, array]])[, thisArg])
// callback: A function that tests each element. It receives three arguments:
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array every was called upon.
// thisArg (optional): A value to use as this when executing the callback.
// Example
// javascript
// Copy code
// const numbers = [2, 4, 6, 8, 10];

// const isEven = (num) => num % 2 === 0;

// console.log(numbers.every(isEven)); // Output: true (because all numbers are even)
// Combined Example
// Let's look at a more detailed example that uses both some and every methods:

// Example
// javascript
// Copy code
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "David", age: 40 }
// ];

// // Check if at least one person is under 30
// const hasYoungPerson = people.some(person => person.age < 30);
// console.log(hasYoungPerson); // Output: true (because Alice is 25)

// // Check if all people are over 20
// const allAreAdults = people.every(person => person.age > 20);
// console.log(allAreAdults); // Output: true (because all ages are over 20)

// // Check if all people are under 35
// const allAreYoung = people.every(person => person.age < 35);
// console.log(allAreYoung); // Output: false (because David is 40)
// Summary
// some: Returns true if at least one element in the array passes the test.
// every: Returns true if all elements in the array pass the test.
// Both methods are useful for performing checks on arrays to determine if some or all elements meet specific criteria.