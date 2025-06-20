// Challenge: Spread in Function Calls and Array Literals

// Find the maximum number using the spread operator

const numbers = [3, 7, 2, 8, 6];
const maxNumber = Math.max(...numbers);

console.log(numbers);
console.log(`The maximum number is ${maxNumber}`);

// Write a function combineArrays that takes two arrays and returns a new array that combines both arrays using the spread operator

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const fruits = ["apple", "banana"];
const veggies = ["carrot", "spinach"];
const combinedFood = combineArrays(fruits, veggies);

console.log(combinedFood);

// Use the spread operator to convert the string "hello" into an array of characters

const word = "hello";
const chars = [...word];

console.log(word);
console.log(chars);

// Given two arrays, combine them into a single array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];

console.log(merged);
