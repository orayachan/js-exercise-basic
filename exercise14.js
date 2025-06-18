// Define a function called "allEvens" that accepts an array of numbers. If the array consists of all even numbers, return true. Otherwise, return false. Use some or every to help you! (Only one of them is truly useful here.)

function allEvens(numbers) {
    return numbers.every(function (num) {
        return num % 2 === 0;
    });
}

console.log(allEvens([2, 4, 6, 8]));
console.log(allEvens([1, 4, 6, 8]));
console.log(allEvens([1, 2, 3]));
