// Challenge: Destructuring Arrays

// Given an array [1, 2, 3, 4, 5], extract all elements into variables a, b, c, d, e respectively
const arr1 = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = arr1;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Given an array [1, 2, 3, 4, 5], extract the first, third, and fifth elements into variables a, b, c respectively
const arr2 = [1, 2, 3, 4, 5];
const [a2, , b2, , c2] = arr2;

console.log(a2);
console.log(b2);
console.log(c2);

// Extract the first two values and the rest from the array [1, 2, 3, 4, 5]. Name the rest value rest
const arr3 = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr3;

console.log(first);
console.log(second);
console.log(rest);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);
