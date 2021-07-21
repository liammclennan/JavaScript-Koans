QUnit.module("About Strings (topics/about_strings.js)");

QUnit.test("delimiters", (assert) => {
    var singleQuotedString = 'apple';
    var doubleQuotedString = "apple";
    assert.equal(__, singleQuotedString === doubleQuotedString, "are the two strings equal?");
});

QUnit.test("concatenation", (assert) => {
    var fruit = "apple";
    var dish = "pie";
    assert.equal(__, fruit + " " + dish, 'what is the value of `fruit + " " + dish`?');
});

QUnit.test("character Type", (assert) => {
    var characterType = typeof "Amory".charAt(1); // typeof will be explained in "about reflection"
    assert.equal(__, characterType, "if Javascript has no character type, what is this type?");
});

QUnit.test("escape character", (assert) => {
    // Escape sequence using an Unicode code point https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences
    var stringWithAnEscapedCharacter = "\u0041pple";
    assert.equal(__, stringWithAnEscapedCharacter, "what is the value of `stringWithAnEscapedCharacter`?");
});

QUnit.test("string.length", (assert) => {
    var fruit = "apple";
    assert.equal(__, fruit.length, "what is the value of `fruit.length`?");
});

QUnit.test("slice", (assert) => {
    var fruit = "apple pie";
    assert.equal(__, fruit.slice(0, 5), "what is the value of `fruit.slice(0,5)`?");
});
