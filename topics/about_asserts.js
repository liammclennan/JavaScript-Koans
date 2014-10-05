
module("About Asserts (topics/about_asserts.js)");

test("Asserts 1: ok", function() {
    ok(__ === true, 'what will satisfy the ok assertion?');
});

test("Asserts 2: not ok", function() {
    ok(__ === false, 'what is a false value?');
});

test("Asserts 3: equal", function() {
    equal(__, 1 + 1, 'what will satisfy the equal assertion?');
});
