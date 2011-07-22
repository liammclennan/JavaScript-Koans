
module("About Objects (topics/about_objects.js)");

test("object type", function() {
    var empty_object = {};
    equals(typeof(empty_object), __, 'what is the type of an object?');
});

test("object literal notation", function() {
    var person = {
        __:__,
        __:__
    };		
    equals(person.name, "Amory Blaine", 'what is the person\'s name?');
    equals(person.age, 102, 'what is the person\'s age?');
});

test("dynamically adding properties", function() {
    var person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;
    equals(person.name, "Amory Blaine", 'what is the person\'s name?');
    equals(person.age, 102, 'what is the person\'s age?');
}); 

test("adding properties from strings", function() {
    var person = {};
    person["__"] = "Amory Blaine";
    person["__"] = 102;
    equals(person.name, "Amory Blaine", 'what is the person\'s name?');
    equals(person.age, 102, 'what is the person\'s age?');
});

test("adding functions", function() {
    var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return __;  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equals(person.toString(), "I Amory Blaine am 102 years old.", 'what should the toString function be?');
});
