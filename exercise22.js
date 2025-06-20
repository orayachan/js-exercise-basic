// Challenge: Rest Params

// Write a function "includeLast" that accepts any number of parameters and returns the last parameter

function includeLast(...args) {
    return args[args.length - 1];
}

console.log(includeLast(2, 3, 4, 1));
console.log(includeLast("A", "B", "C", "D"));

// Write a function "excludeLast" that accepts any number of parameters and returns them as an array, excluding the last parameter

function excludeLast(...args) {
    return args.slice(0, args.length - 1);
}

console.log(excludeLast(2, 3, 4, 1));
console.log(excludeLast("A", "B", "C", "D"));

// Write a function "sumFirstLast" that accepts any number of parameters and returns them as the sum of the first and last parameters

function sumFirstLast(...nums) {
    if (nums.length === 0) {
        return undefined;
    }
    const first = nums[0];
    const last = nums[nums.length - 1];
    return first + last;
}

console.log(`The summary of first and last number is ${sumFirstLast(2, 3, 4, 1)}`);
console.log(`The summary of first and last number is ${sumFirstLast(4, 2, 1, 8)}`);
