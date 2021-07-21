QUnit.module("About Functions And Closure (topics/about_functions_and_closure.js)");

QUnit.test("defining functions directly", (assert) => {
    var result = "a";
    function changeResult() {
        // The ability to access variables defined in the same scope as the function is known as "closure"
        result = "b";
    }
    changeResult();
    assert.equal(__, result, "what is the value of `result`?");
});

QUnit.test("assigning functions to variables", (assert) => {
    var triple = function (input) {
        return input * 3;
    };
    assert.equal(__, triple(4), "what is triple 4?");
});

QUnit.test("self invoking functions", (assert) => {
    var publicValue = "shared";

    // Self invoking functions are used to provide scoping and to alias variables
    (function (pv) {
        var secretValue = "password";
        assert.equal(__, pv, "what is the value of `pv`?");
        assert.equal(__, typeof secretValue, "is `secretValue` available in this context?");
        assert.equal(__, typeof publicValue, "is `publicValue` available in this context?");
    })(publicValue);

    assert.equal(__, typeof secretValue, "is `secretValue` available in this context?");
    assert.equal(__, typeof publicValue, "is `publicValue` available in this context?");
});

QUnit.test("arguments array", (assert) => {
    var add = function () {
        var total = 0;
        for (var i = 0; i < arguments.length; i++) {
            // Complete the implementation of this method so that it returns the sum of its arguments
            // __
        }
        // __
    };

    assert.equal(15, add(1, 2, 3, 4, 5), "add 1, 2, 3, 4, 5");
    assert.equal(9, add(4, 7, -2), "add 4, 7, -2");
});

QUnit.test("using call to invoke function", (assert) => {
    var invokee = function (message) {
        return this + message;
    };

    /* Another way to invoke a function is to use the `call` function, which allows
    you to set the caller's `this` context. `call` can take any number of arguments:
    the first one is always the context that `this` should be set to in the called
    function while the rest are the arguments to be sent to the function (multiple 
    arguments are comma separated). */
    var result = invokee.call("I am this!", "where did it come from?");

    assert.equal(__, result, "what will the value of `invokee`'s `this` be?");
});

QUnit.test("using apply to invoke function", (assert) => {
    var invokee = function (message1, message2) {
        return this + message1 + message2;
    };

    /* Similar to the `call` function is the `apply` function. `apply` only has two
    arguments: the first is the context that `this` should be set to in the called
    function and the second is the array of arguments to be passed into the called 
    function. */
    var result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);

    assert.equal(__, result, "what will the value of `invokee`'s `this` be?");
});
