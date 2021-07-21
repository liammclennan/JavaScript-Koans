module("About Assignment (topics/about_assignment.js)");

test("local variables", function () {
    var temp = __;
    equal(temp, 1, "what value needs to be assigned to `temp`?");
});

test("global variables", function () {
    temp = 1; // Not using var is an example. Always use var in practice.
    equal(window.__, temp, "what is added to the `window` object when you declare a global variable?");
});
