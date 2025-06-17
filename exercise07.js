// Exercise 7
// Write a JS program to find the sum of all numbers from 0 to 1000, but only if those numbers are divisible by 3 or 5

function findSum() {
    let total = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    return total;
}

const result = findSum();
console.log(result);
