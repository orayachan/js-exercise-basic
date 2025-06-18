// Let's get some practice using the filter method. Write a function called "validUserNames" that accepts an array of usernames (strings).
// The function should return a new array consisting only of usernames that are less than 10 characters long.

const mockData = [
    "mark",
    "staceysmom1978",
    "q29832128238983",
    "carrie98",
    "MoanaFan",
];

function validUserNames(usernames) {
    const filteredUsernames = usernames.filter(function (username) {
        return username.length < 10;
    });
    return filteredUsernames;
}

console.log(validUserNames(mockData));
