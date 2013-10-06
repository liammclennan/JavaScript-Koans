
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(__ === true, 'what will satisfy the ok assertion?');
});

test("not ok", function() {
    ok(__ === false, 'what is a false value?');
});

test("equal", function() {
    equal(__, 1 + 1, 'what will satisfy the equal assertion?');
});
