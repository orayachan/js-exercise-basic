// Exercise: Last Element
// I want you to create a function named lastElement. This function will accept one array argument, and this function must return the value of the last element of that array (without deleting any elements in the array). However, if the array is empty, your function must return null.

function lastElement(arr) {
    if ((arr.length === 0)) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));
