module("About Equality (topics/about_equality.js)");

test("numeric equality", function () {
    equal(3 + __, 7, "what happens when you add two numbers?");
});

test("string equality", function () {
    equal("3" + __, "37", "what happens when you add two strings?");
});

test("equality without type coercion", function () {
    ok(3 === __, "what is exactly equal to 3?");
});

test("equality with type coercion", function () {
    // You answer must be a string to be zen
    ok(3 == "__", "what string is equal to 3, with type coercion?");
});

test("string literals", function () {
    equal(__, "frankenstein", "quote types are interchangeable, but must match.");
    equal(__, 'frankenstein', "quote types can use both single and double quotes.");
});
