// Create a function named "returnDay". This function must accept 1 argument (a number from 1-7), and this function must return the value of that day of the week (1 is Monday, 2 is Tuesday, etc.). But if the number is less than 1 or greater than 7, this function must return null. In this problem, day 1 or the first day is defined as Monday.

function returnDay(today) {
    if (today < 0 || today > 6) {
        return null;
    }

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    return days[today];
}

console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));
