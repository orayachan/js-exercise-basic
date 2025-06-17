// Exercise 5
// Write a JS program using a loop to repeat the process from number 0 to 15. In each iteration, check if the current number is even or odd and display the result as a message on the screen

function checkEvenOrOdd() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        } else {
            console.log(`${i} is odd`);
        }
    }
}

checkEvenOrOdd();
