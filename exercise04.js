// Exercise 4
// Write a JS program using a conditional statement to find the largest number among 5 numbers

// For loop and conditional statement
function findLargestNumber(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];

    let largestNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largestNumber) {
            largestNumber = numbers[i];
        }
    }
    return largestNumber;
}

// Math.max()
function findMathMax(a, b, c, d, e) {
    return Math.max(a, b, c, d, e);
}

console.log(`${findLargestNumber(-5, -2, -6, 0, -1)}`);
console.log(`${findMathMax(-5, -2, -6, 0, -1)}`);
