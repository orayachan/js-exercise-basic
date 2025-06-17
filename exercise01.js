// Exercise 1
// Write a program that finds the largest integer between two integers

// If-else
function LargestInteger(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Ternary Operator
function LargestIntegerTernary(a, b) {
    return a > b ? a : b;
}

// Using Math.max()
function LargestIntegerMathMax(a, b) {
    return Math.max(a, b);
}

console.log(`Largest integer is ${LargestInteger(8, 12)}`);
console.log(`Largest integer is ${LargestIntegerTernary(18, 9)}`);
console.log(`Largest integer is ${LargestIntegerMathMax(3, 34)}`);
