
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equal(__, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equal(__, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equal(__, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(__, nullIsTruthy, 'is null truthy?');
});
