// Challenge: Destructuring Params

// Write a function "displayPerson" that takes an Object as a parameter and prints the name and age properties

function displayPerson({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

console.log(displayPerson({ name: "Alice", age: 18 }));
console.log(displayPerson({ name: "Bobby", age: 23 }));

// Write a function "getCoords" that takes an Object with x and y properties and returns them as an array

function getCoords({ x, y }) {
    return [x, y];
}

console.log(getCoords({ x: 1, y: 2 }));
console.log(`Result: ${getCoords({ x: 10, y: 20 })}`);

// Write a function "config" that takes an object with width, height, and color properties and sets default values if they are not received: width = 100, height = 100, color = 'white'
function config({ width = 100, height = 100, color = "white" } = {}) {
    return { width, height, color };
}

console.log(config());
console.log(config({ height: 125 }));
console.log(config({ width: 20, color: "red" }));
