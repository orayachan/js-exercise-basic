// Exercise: Capitalize the First Letter
// Create a function named "capitalize" that accepts one string argument and returns that string with its first letter capitalized (but other letters remain the same

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "";
    }
    const firstLetterOfStr = str[0].toUpperCase();
    const restOfStr = str.slice(1);
    return firstLetterOfStr + restOfStr;
}

console.log(capitalize("eggplant"));
console.log(capitalize("pamplemousse"));
console.log(capitalize("squid"));
