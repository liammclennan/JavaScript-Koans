QUnit.module("About Operators (topics/about_operators.js)");

QUnit.test("addition", (assert) => {
    var result = 0;
    // Starting i at 0, add i to result and increment i by 1 until i is equal to 5
    for (var i = 0; i <= 5; i++) {
        result = result + i;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("assignment addition", (assert) => {
    var result = 0;
    for (var i = 0; i <= 5; i++) {
        // The code below is just like saying result = result + i; but is more concise
        result += i;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("subtraction", (assert) => {
    var result = 5;
    for (var i = 0; i <= 2; i++) {
        result = result - i;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("assignment subtraction", (assert) => {
    var result = 5;
    for (var i = 0; i <= 2; i++) {
        result -= i;
    }
    assert.equal(__, result, "what is the value of `result`?");
});

// Assignment operators are available for multiplication and division as well
// let's do one more, the modulo operator, used for showing division remainder

QUnit.test("modulus", (assert) => {
    var result = 10;
    var x = 5;
    // Again this is exactly the same as result = result % x
    result %= x;
    assert.equal(__, result, "what is the value of `result`?");
});
