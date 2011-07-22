
module("About Truthyness (topics/about_truthyness.js)");

test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equals(oneIsTruthy, __, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equals(negativeOneIsTruthy, __, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equals(zeroIsTruthy, __, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equals(nullIsTruthy, __, 'is null truthy?');
});
