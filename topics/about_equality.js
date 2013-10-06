
module("About Equality (topics/about_equality.js)");

test("numeric equality", function() {
    equal(3 + __,  7, "");
});

test("string equality", function() {
    equal("3" + __, "37", "concatenate the strings");
});

test("equality without type coercion", function() {
    ok(3 === __, 'what is exactly equal to 3?');
});

test("equality with type coercion", function() {
    ok(3 == "__", 'what string is equal to 3, with type coercion?');
});

test("string literals", function() {
    equal(__, "frankenstein", "quote types are interchangable, but must match.");
    equal(__, 'frankenstein', "quote types can use both single and double quotes.");
});
