// Exercise 3
// Write a JS program using a conditional statement to sort 3 numbers from largest to smallest

function sortDescending(a, b, c) {
    let numbers = [a, b, c];

    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] < numbers[j + 1]) {
                let temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }

    return `${numbers[0]} > ${numbers[1]} > ${numbers[2]}`;
}

console.log(`${sortDescending(-235, 789, 46)}`);
