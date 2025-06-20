// Challenge: Default Params

// Greets a person by their name. If no name is provided, greets "Guest"

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet("Alice"));

// Multiplies two numbers. If the second number is not provided, it defaults to 5

function multiply(a, b = 5) {
    return a * b;
}

console.log(multiply(2));
console.log(multiply(2, 10));

// Creates a person object with a name and age. If no age is provided, it defaults to 18

function createPerson(name, age = 18) {
    return { name, age };
}

console.log(createPerson("Frank"));
console.log(createPerson("Bobby", 25));
