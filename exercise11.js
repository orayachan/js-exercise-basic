// In this problem, you will practice using the map() method to extract data from an array of objects (named fullNames) and store it in a variable "firstNames". We only want the first name of each character in this list.
// The steps we will take are to use the map() method to extract the first value from each object in the fullNames array and store it in firstNames, which will result in an array of first names from each character in the list.

const fullNames = [
    { first: "Albus", last: "Dumbledore" },
    { first: "Harry", last: "Potter" },
    { first: "Hermione", last: "Granger" },
    { first: "Ron", last: "Weasley" },
    { first: "Rubeus", last: "Hagrid" },
    { first: "Minerva", last: "Mcgonalgall" },
    { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (character) {
    return character.first;
});

console.log(firstNames);
