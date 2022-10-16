module("About Arrays (topics/about_arrays.js)");

test("array literal syntax and indexing", function () {
    var favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
    equal(favouriteThings[0], "cellar door");
    equal(favouriteThings[1], 42);
    equal(favouriteThings[2], true);
});

test("array type", function () {
    equal(typeof ([]), 'object');
});

test("length", function () {
    var collection = ['a', 'b', 'c'];
    equal(collection.length, 3);
});

test("splice", function () {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var workingWeek = daysOfWeek.splice(0, 5);
    var weekend = daysOfWeek;

    deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
    deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
});

test("stack methods", function () {
    var stack = [];
    stack.push("first");
    stack.push("second");

    equal("second", stack.pop(), 'what will be the first value popped off the stack?');
    equal("first", stack.pop(), 'what will be the second value popped off the stack?');
});

test("queue methods", function () {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    equal("third", queue.shift(), 'what will be shifted out first?');
    equal("first", queue.shift(), 'what will be shifted out second?');
});
