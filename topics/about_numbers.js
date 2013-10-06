
module("About Numbers (topics/about_numbers.js)");

test("types", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);
    equal(__, typeOfIntegers === typeOfFloats, 'are ints and floats the same type?');
    equal(__, typeOfIntegers, 'what is the javascript numeric type?');
    equal(__, 1.0, 'what is a integer number equivalent to 1.0?');
});

test("NaN", function() {
    var resultOfFailedOperations = 7/'apple';
    equal(__, isNaN(resultOfFailedOperations), 'what will satisfy the equals assertion?');
    equal(__, resultOfFailedOperations == NaN, 'is NaN == NaN?');
});
