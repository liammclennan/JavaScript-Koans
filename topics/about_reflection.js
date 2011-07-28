module("About Reflection (topics/about_reflection.js)");

test("typeof", function() {
    equals(typeof({}), __, 'what is the type of an empty object?');
    equals(typeof('apple'), __, 'what is the type of a string?');
    equals(typeof(-5), __, 'what is the type of -5?');
    equals(typeof(false), __, 'what is the type of false?');		
});

test("property enumeration", function() {
    var keys = [];
    var values = [];
    var person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(propertyName in person) {
        keys.push(propertyName);
        values.push(person[propertyName]);
    }
    ok(keys.equalTo(['__','__','__']), 'what are the property names of the object?');
    ok(values.equalTo(['__',__,__]), 'what are the property values of the object?');
});

test("hasOwnProperty", function() {
    // hasOwnProperty returns true if the parameter is a property directly on the object, 
    // but not if it is a property accessible via the prototype chain.
    var keys = [];
    var fruits =  ['apple', 'orange'];
    for(propertyName in fruits) {
        keys.push(propertyName);
    }
    ok(keys.equalTo(['__', '__', '__']), 'what are the properties of the array?');

    var ownKeys = [];
    for(propertyName in fruits) {
        if (fruits.hasOwnProperty(propertyName)) {
            ownKeys.push(propertyName);
        }
    }
    ok(ownKeys.equalTo(['__', '__']), 'what are the own properties of the array?');
});

test("eval", function() {
    // eval executes a string
    var result = "";
    eval("result = 'apple' + ' ' + 'pie'");
    equals(result, __, 'what is the value of result?');
});
