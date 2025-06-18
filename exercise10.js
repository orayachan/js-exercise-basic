// In a farm, cows are released to graze, and in the evening, the cows in the farm need to be counted to ensure all are present. Everyone should create an object named farm, and that object must have 4 properties
    // name: Should have the value of the cow farm's name, which is 'Farm Chokchai'
    // cowCount: Should have the latest count of cows that have entered the enclosure, starting at 0
    // cowsIntoEnclosure: This will be a method that increments the cowCount by 1 and returns the string "Mow Mow". You must use this in this exercise.
    // resetNumCows: This will be a method that resets cowCount back to 0 and returns the string "Go Go"

const farm = {
    name: "Farm Chokchai",
    cowCount: 0,
    cowsIntoEnclosure: function () {
        this.cowCount++
        return "Mow Mow"
    },
    resetNumCows: function () {
        this.cowCount = 0
        return "Go Go"
    }
};

// Start
console.log(`Farm Name: ${farm.name}`);
console.log(`Initial: ${farm.cowCount}`);

// Cow counts
console.log(farm.cowsIntoEnclosure());
console.log(farm.cowsIntoEnclosure());
console.log(farm.cowsIntoEnclosure());
console.log(farm.cowsIntoEnclosure());
console.log(farm.cowsIntoEnclosure());
console.log(`Current Cow Count: ${farm.cowCount}`);

// Reset
console.log(farm.resetNumCows());
console.log(`Reset: ${farm.cowCount}`);