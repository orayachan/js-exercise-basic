// Challenge: Destructuring Objects

// Given an Object { name: 'Alice', age: 25, city: 'Wonderland' }, extract the name and city properties into variables

const person1 = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, city } = person1;

console.log(person1)

console.log({name})
console.log({city})

console.log(`Name: ${person1.name}`)
console.log(`Age: ${person1.city}`)

// Rename the name key to firstName while destructuring the object { name: 'Bob', age: 30 }

const person2 = { name: 'Bob', age: 30 };
const { name: firstname, age } = person2;

console.log(person2);
console.log({firstname});

// Extract the country property from the object { name: 'Charlie', country: 'Chocolate Factory' } and provide a default value of 'Thailand' if it's not present

const person3 = { name: 'Charlie', country: 'Chocolate Factory' };
const person4 = { name: 'Dobby', age: 18 };

const { name: p3, country = 'Thailand' } = person3;
const { name: p4, country: defaultCountry = 'Thailand'} = person4;

console.log(person3);
console.log(person4);
console.log({defaultCountry});
