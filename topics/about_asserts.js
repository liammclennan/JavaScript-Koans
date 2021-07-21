QUnit.module("About Asserts (topics/about_asserts.js)");

QUnit.test("ok", (assert) => {
    assert.ok(__ === true, "what will satisfy the `ok` assertion?");
});

QUnit.test("not ok", (assert) => {
    assert.ok(__ === false, "what is a false value?");
});

QUnit.test("equal", (assert) => {
    assert.equal(__, 1 + 1, "what will satisfy the `equal` assertion?");
});
