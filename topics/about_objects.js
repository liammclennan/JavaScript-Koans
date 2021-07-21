QUnit.module("About Objects (topics/about_objects.js)");

QUnit.test("object type", (assert) => {
    var empty_object = {};
    assert.equal(__, typeof empty_object, "what is the type of an object?");
});

QUnit.test("object literal notation", (assert) => {
    var person = {
        __: __,
        __: __,     // Trailing commas https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
    };
    assert.equal("Amory Blaine", person.name, "what is the person's name?");
    assert.equal(102, person.age, "what is the person's age?");
});

QUnit.test("dynamically adding properties", (assert) => {
    var person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;
    assert.equal("Amory Blaine", person.name, "what is the person's name?");
    assert.equal(102, person.age, "what is the person's age?");
});

QUnit.test("adding properties from strings", (assert) => {
    var person = {};
    person[__] = "Amory Blaine";
    person[__] = 102;
    assert.equal("Amory Blaine", person.name, "what is the person's name?");
    assert.equal(102, person.age, "what is the person's age?");
});

QUnit.test("adding functions", (assert) => {
    var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function () {
            return __; // HINT: use the `this` keyword to refer to the person object.
        },
    };
    assert.equal("I Amory Blaine am 102 years old.", person.toString(), "what should the `toString` function be?");
});
