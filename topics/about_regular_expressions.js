QUnit.module("About Regular Expressions (topics/about_regular_expressions.js)");

QUnit.test("exec", (assert) => {
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    assert.deepEqual(results, [__, __, __], "what is the value of `results`?");
});

QUnit.test("test", (assert) => {
    var containsSelect = /select/.QUnit.test("  select * from users ");
    assert.equal(__, containsSelect, "does the string provided contain 'select'?");
});

QUnit.test("match", (assert) => {
    var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    assert.deepEqual(matches, [__, __], "what is the value of `matches`?");
});

QUnit.test("replace", (assert) => {
    var pie = "apple pie".replace("apple", "strawberry");
    assert.equal(__, pie, "what is the value of `pie`?");

    pie = "what if '6' turned out to be '9'?".replace(/\d/g, function (number) {
        // The second parameter can be a string or a function
        var map = { "6": "six", "9": "nine" };
        return map[number];
    });
    assert.equal(__, pie, "what is the value of `pie`?");
});

// THE END
