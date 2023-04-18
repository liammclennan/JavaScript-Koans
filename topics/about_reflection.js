module("About Reflection (topics/about_reflection.js)");

function A() {
    this.aprop = "A";
};

function B() {
    this.bprop = "B";
};

B.prototype = new A();

test("typeof", function() {
    equal('object', typeof({}), 'what is the type of an empty object?');
    equal('string', typeof('apple'), 'what is the type of a string?');
    equal('number', typeof(-5), 'what is the type of -5?');
    equal('boolean', typeof(false), 'what is the type of false?');
});

test("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(var propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    ok(keys.equalTo(['name','age','unemployed']), 'what are the property names of the object?');
    ok(values.equalTo(['Amory Blaine',102,true]), 'what are the property values of the object?');
});

test("hasOwnProperty", function() {
    var b = new B();
    var propertyName;

    var keys = [];
    for (propertyName in b) {
        keys.push(propertyName);
    }
    equal(2, keys.length, 'how many elements are in the keys array?');
    deepEqual(['bprop', 'aprop'], keys, 'what are the properties of the array?');

    // hasOwnProperty returns true if the parameter is a property directly on the object,
    // but not if it is a property accessible via the prototype chain.
    var ownKeys = [];
    for(propertyName in b) {
        if (b.hasOwnProperty(propertyName)) {
            ownKeys.push(propertyName);
        }
    }
    equal(1, ownKeys.length, 'how many elements are in the ownKeys array?');
    deepEqual(['bprop'], ownKeys, 'what are the own properties of the array?');
});

test("constructor property", function () {
    var a = new A();
    var b = new B();
    equal('function', typeof(a.constructor), "what is the type of a's constructor?");
    equal('A', a.constructor.name, "what is the name of a's constructor?");
    equal('A', b.constructor.name, "what is the name of b's constructor?");
});

test("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    equal('apple pie', result, 'what is the value of result?');
});
