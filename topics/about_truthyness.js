QUnit.module("About Truthyness (topics/about_truthyness.js)");

QUnit.test("truthyness of positive numbers", (assert) => {
    var oneIsTruthy = 1 ? true : false;
    assert.equal(__, oneIsTruthy, "is one truthy?");
});

QUnit.test("truthyness of negative numbers", (assert) => {
    var negativeOneIsTruthy = -1 ? true : false;
    assert.equal(__, negativeOneIsTruthy, "is -1 truthy?");
});

QUnit.test("truthyness of zero", (assert) => {
    var zeroIsTruthy = 0 ? true : false;
    assert.equal(__, zeroIsTruthy, "is 0 truthy?");
});

QUnit.test("truthyness of null", (assert) => {
    var nullIsTruthy = null ? true : false;
    assert.equal(__, nullIsTruthy, "is null truthy?");
});
