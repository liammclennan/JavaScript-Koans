
module("About Asserts (topics/about_asserts.js)");

test("ok", function() {
    ok(((2-1)===1) === true);
});

test("not ok", function() {
    ok((2*2===3) === false);
});

test("equal", function() {
    equal(2, 1 + 1);
});
