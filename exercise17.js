// Exercise: Sum Array Exercise
// Write a function named "sumArray" that accepts one array argument (an array that stores numbers), and this function must be able to return the result of adding all the numbers in that array.

function sumArray(numArr) {
    let total = 0;
    for (let i = 0; i < numArr.length; i++) {
        total += numArr[i];
    }
    return total;
}

console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));
