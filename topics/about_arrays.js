QUnit.module("About Arrays (topics/about_arrays.js)");

QUnit.test("array literal syntax and indexing", (assert) => {
    var favouriteThings = ["cellar door", 42, true]; // Note that array elements do not have to be of the same type
    assert.equal(__, favouriteThings[0], "what is in the first position of the array?");
    assert.equal(__, favouriteThings[1], "what is in the second position of the array?");
    assert.equal(__, favouriteThings[2], "what is in the third position of the array?");
});

QUnit.test("array type", (assert) => {
    assert.equal(__, typeof [], "what is the type of an array?");
});

QUnit.test("length", (assert) => {
    var collection = ["a", "b", "c"];
    assert.equal(__, collection.length, "what is the length of the collection array?");
});

QUnit.test("splice", (assert) => {
    var daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var workingWeek = daysOfWeek.splice(__, __);
    var weekend = daysOfWeek;

    assert.deepEqual(workingWeek, ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "what is the value of workingWeek?");
    assert.deepEqual(weekend, ["Saturday", "Sunday"], "what is the value of weekend?");
});

QUnit.test("stack methods", (assert) => {
    var stack = [];
    stack.push("first");
    stack.push("second");

    assert.equal(__, stack.pop(), "what will be the first value popped off the stack?");
    assert.equal(__, stack.pop(), "what will be the second value popped off the stack?");
});

QUnit.test("queue methods", (assert) => {
    var queue = [];
    queue.push("first");
    queue.push("second");
    queue.unshift("third");

    assert.equal(__, queue.shift(), "what will be shifted out first?");
    assert.equal(__, queue.shift(), "what will be shifted out second?");
});
