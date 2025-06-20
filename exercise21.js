// Challenge: Spread with Objects

// Given two objects, combine them into a single object

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObjA = { ...obj1, ...obj2 };

console.log(mergedObjA);

// Use the spread operator to create a new Object that has the same properties as Object { x: 10, y: 20 } but also adds the key z with a value of 30

const obj = { x: 10, y: 20 };
const newObj = { ...obj, z: 30 };

console.log(newObj);

// Given Object { a: 1, b: 2, c: 3 } and { c: 4, d: 5 }, combine them so that the value of c in the first Object is replaced by the value of c in the second Object

const obj3 = { a: 1, b: 2, c: 3 };
const obj4 = { c: 4, d: 5 };
const mergedObjB = { ...obj3, ...obj4 };

console.log(mergedObjB);
