module("About Scope (topics/about_scope.js)");

thisIsAGlobalVariable = 77;

test("global variables", function() {
    equal(__, thisIsAGlobalVariable, 'is thisIsAGlobalVariable defined in this scope?');
});

test("variables declared inside of a function", function() {
    var outerVariable = "outer";

    // this is a self-invoking function. Notice that it calls itself at the end ().
    (function() {
        var innerVariable = "inner";
        equal(__, outerVariable, 'is outerVariable defined in this scope?');
        equal(__, innerVariable, 'is innerVariable defined in this scope?');
    })();

    equal(__, outerVariable, 'is outerVariable defined in this scope?');
    equal(__, typeof(innerVariable), 'is innerVariable defined in this scope?');
});
