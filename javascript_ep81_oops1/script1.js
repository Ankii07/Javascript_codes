const user = {
    firstName: 'Anurag',
    lastName: 'Singh',
    age: 25,
    getBirthYear:function (){
        return new Date().getFullYear - user.age
    }
  };


 //functional and procedural programming mai objects use nhi kr skte hai 

//  object oriented programing mai ek bdi si unit object hogi aur usi mai sara logic likha jayega..

// const year = (user.age) => {
//     let date = new Date();
//     let year = date.getFullYear();
//     console.log(year-user.age);
// }

// There are a couple of issues in your code:

// Function Syntax: You are using an arrow function but the parameter should not be enclosed in parentheses if there is only one parameter.
// Variable Naming Conflict: You are declaring a variable year inside the function, which conflicts with the parameter year.
// Function Usage: The function should return the calculated year instead of just logging it to the console, or it should have a meaningful name.
// Here’s a corrected version of your code:

// javascript
// Copy code
// const calculateBirthYear = userAge => {
//     let date = new Date();
//     let currentYear = date.getFullYear();
//     return currentYear - userAge;
// };

// // Example usage:
// let age = 25;
// let birthYear = calculateBirthYear(age);
// console.log(birthYear); // Outputs the birth year based on the current year and the provided age
// Explanation:
// Arrow Function Syntax: The parameter userAge is correctly used without parentheses since there is only one parameter.
// Variable Naming: The variable currentYear is used to store the current year to avoid naming conflicts.
// Return Statement: The function returns the calculated birth year instead of just logging it to the console.
// Meaningful Function Name: The function is renamed to calculateBirthYear for clarity.

function getBirthYear(age){
    return new Date().getFullYear - age
}

// Encapsulation ka mtlb hota hai bhut si alg alg cheezo ek jgh put krna

// Encapsulation mai bahar se access bhi nhi kr skte hai

//Abstracion ka mtlb hota hai hiding the complexties
