// Exercise 2
// Write a JS program using a conditional statement to find the sign of the result obtained by multiplying three numbers

function findingSign(a, b, c) {
    if (a === 0 || b === 0 || c === 0) {
        return "No Sign, the result is zero.";
    }
    // Count negative sign (-)
    let negativeCount = 0;
    if (a < 0) {
        negativeCount++;
    }
    if (b < 0) {
        negativeCount++;
    }
    if (c < 0) {
        negativeCount++;
    }
    // Check the signs
    if (negativeCount % 2 === 0) {
        return "The sign is +";
    } else {
        return "the sign is -";
    }
}

console.log(
    `When multiplying 3 numbers (-2, -4, -6), the sign will be ${findingSign(-2, -4, -6)}`
);
