
module("About Objects (topics/about_objects.js)");

test("object type", function() {
    var empty_object = {};
    equal("object", typeof(empty_object), 'what is the type of an object?');
});

test("object literal notation", function() {
    var person = {
        __:__,
        __:__
    };
    equal(undefined, person.name, "what is the person's name?");
    equal(undefined, person.age, "what is the person's age?");
});

test("dynamically adding properties", function() {
    var person = {};
    person.__ = "Amory Blaine";
    person.__ = 102;
    equal(undefined, person.name, "what is the person's name?");
    equal(undefined, person.age, "what is the person's age?");
}); 

test("adding properties from strings", function() {
    var person = {};
    person["__"] = "Amory Blaine";
    person["__"] = 102;
    equal(undefined, person.name, "what is the person's name?");
    equal(undefined, person.age, "what is the person's age?");
});

test("adding functions", function() {
    var person = {
        name: "Amory Blaine",
        age: 102,
        toString: function() {
            return `I ${this.name} am ${this.age} years old.`;  // HINT: use the 'this' keyword to refer to the person object.
        }
    };
    equal("I Amory Blaine am 102 years old.", person.toString(), "what should the toString function be?");
});
