// Exercise 6
// Write a JS program to display the result in the format below, using only nested loops for this output
    // *
    // * *
    // * * *
    // * * * *
    // * * * * *

function starPattern() {
    const numberOfRows = 5;
    for (let i = 1; i <= numberOfRows; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += "* ";
        }
        console.log(star);
    }
}

starPattern();
