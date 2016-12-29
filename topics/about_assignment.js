
module("About Assignment (topics/about_assignment.js)");

test("Assignment 1: local variables", function() {
    var temp = __;
    equal(temp, 1, "Assign a value to the variable temp");
});

test("Assignment 2: global variables", function() {
    temp = 1; // Not using var is an example. Always use var in practice.
    equal(window.__, temp, 'Global variables are assigned to the window object');
});
