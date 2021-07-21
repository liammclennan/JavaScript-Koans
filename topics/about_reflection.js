QUnit.module("About Reflection (topics/about_reflection.js)");

function A() {
    this.aprop = "A";
}

function B() {
    this.bprop = "B";
}

B.prototype = new A();

QUnit.test("typeof", (assert) => {
    assert.equal(__, typeof {}, "what is the type of an empty object?");
    assert.equal(__, typeof "apple", "what is the type of a string?");
    assert.equal(__, typeof -5, "what is the type of -5?");
    assert.equal(__, typeof false, "what is the type of false?");
});

QUnit.test("property enumeration", (assert) => {
    var keys = [];
    var values = [];
    var person = { name: "Amory Blaine", age: 102, unemployed: true };
    for (var propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    assert.deepEqual(keys, [__, __, __], "what are the property names of the object?");
    assert.deepEqual(values, [__, __, __], "what are the property values of the object?");
});

QUnit.test("hasOwnProperty", (assert) => {
    var b = new B();
    var propertyName;

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }
    assert.equal(__, keys.length, "how many elements are in the keys array?");
    assert.deepEqual([__, __], keys, "what are the properties of the array?");

    // `hasOwnProperty` returns `true` if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    var ownKeys = [];
    for (propertyName in b) {
        if (b.hasOwnProperty(propertyName)) {
            ownKeys.push(propertyName);
        }
    }
    assert.equal(__, ownKeys.length, "how many elements are in the `ownKeys` array?");
    assert.deepEqual([__], ownKeys, "what are the own properties of the array?");
});

QUnit.test("constructor property", (assert) => {
    var a = new A();
    var b = new B();
    assert.equal(__, typeof a.constructor, "what is the type of `a`'s constructor?");
    assert.equal(__, a.constructor.name, "what is the name of `a`'s constructor?");
    assert.equal(__, b.constructor.name, "what is the name of `b`'s constructor?");
});

QUnit.test("eval", (assert) => {
    // `eval` executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    assert.equal(__, result, "what is the value of `result`?");
});
