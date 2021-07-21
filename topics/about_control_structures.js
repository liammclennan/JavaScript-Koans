QUnit.module("About Control Structures (topics/about_control_structures.js)");

QUnit.test("if", (assert) => {
    var isPositive = false;
    if (2 > 0) {
        isPositive = true;
    }
    assert.equal(__, isPositive, "what is the value of `isPositive`?");
});

QUnit.test("for", (assert) => {
    var counter = 10;
    for (var i = 1; i <= 3; i++) {
        counter = counter + i;
    }
    assert.equal(__, counter, "what is the value of `counter`?");
});

QUnit.test("for...in", (assert) => {
    // This syntax will be explained in "about objects"
    var person = {
        name: "Amory Blaine",
        age: 102,
    };

    var result = "";
    // `for...in` enumerates the property names of an object
    for (var property_name in person) {
        result = result + property_name;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("ternary operator", (assert) => {
    var fruit = true ? "apple" : "orange";
    assert.equal(__, fruit, "what is the value of `fruit`?");

    fruit = false ? "apple" : "orange";
    assert.equal(__, fruit, "now what is the value of `fruit`?");
});

QUnit.test("switch", (assert) => {
    var result = 0;
    switch (2) {
        case 1:
            result = 1;
            break;
        case 1 + 1:
            result = 2;
            break;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("switch default case", (assert) => {
    var result = "Pippin";
    switch ("m") {
        case "f":
            result = "Frodo";
            break;
        case "s":
            result = "Samwise";
            break;
        default:
            result = "Merry";
            break;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("null coalescing", (assert) => {
    var result = null || "a value";
    assert.equal(__, result, "what is the value of `result`?");
});
