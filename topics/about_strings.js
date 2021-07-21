module("About Strings (topics/about_strings.js)");

test("delimiters", function () {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    equal(__, singleQuotedString === doubleQuotedString, "are the two strings equal?");
});

test("concatenation", function () {
    var fruit = "apple";
    var dish = "pie";
    equal(__, fruit + " " + dish, 'what is the value of `fruit + " " + dish`?');
});

test("character Type", function () {
    var characterType = typeof "Amory".charAt(1); // typeof will be explained in "about reflection"
    equal(__, characterType, "if Javascript has no character type, what is this type?");
});

test("escape character", function () {
    // Escape sequence using an Unicode code point https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences
    var stringWithAnEscapedCharacter = "\u0041pple";
    equal(__, stringWithAnEscapedCharacter, "what is the value of `stringWithAnEscapedCharacter`?");
});

test("string.length", function () {
    var fruit = "apple";
    equal(__, fruit.length, "what is the value of `fruit.length`?");
});

test("slice", function () {
    var fruit = "apple pie";
    equal(__, fruit.slice(0, 5), "what is the value of `fruit.slice(0,5)`?");
});
