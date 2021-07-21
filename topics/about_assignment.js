QUnit.module("About Assignment (topics/about_assignment.js)");

QUnit.test("local variables", (assert) => {
    var temp = __;
    assert.equal(temp, 1, "what value needs to be assigned to `temp`?");
});

QUnit.test("global variables", (assert) => {
    temp = 1; // Not using var is an example. Always use var in practice.
    assert.equal(window.__, temp, "what is added to the `window` object when you declare a global variable?");
});
