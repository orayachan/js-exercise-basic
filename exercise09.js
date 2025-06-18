// Declare an object named "square". This object must have two methods that perform calculations related to square geometry. These two methods are named area and perimeter.
    // "area" must accept the value of each side's length (side) and return the area of the square.
    // "perimeter" must accept the value of each side's length and return the perimeter of the square, which is the length of each side (side) multiplied by 4.

const square = {
    area: function(side) {
        return side * side;
    },
    perimeter: function(side) {
        return side * 4;
    },
}

console.log(`The square's area is ${square.area(10)}`);
console.log(`The square's perimeter is ${square.perimeter(10)}`);
