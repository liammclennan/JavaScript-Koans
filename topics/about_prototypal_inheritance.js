
// demonstrate the effect of modifying an objects prototype before and after the object is constructed

module("About Prototypal Inheritance (topics/about_prototypal_inheritance.js)");

// this 'class' pattern defines a class by its constructor
var Mammal = function(name) {
    this.name = name;
}
// things that don't need to be set in the constructor should be added to the constructor's prototype property.
Mammal.prototype = {
    sayHi: function() {
        return "Hello, my name is " + this.name;
    }
}

test("defining a 'class'", function() {
    var eric  = new Mammal("Eric");
    equal(__, eric.sayHi(), 'what will Eric say?');
});

// add another function to the Mammal 'type' that uses the sayHi function
Mammal.prototype.favouriteSaying = function() {
    return this.name + "'s favourite saying is " + this.sayHi(); 
}

test("more functions", function() {
    var bobby = new Mammal("Bobby");
    equal(__, bobby.favouriteSaying(), "what is Bobby's favourite saying?"); 
});

test("calling functions added to a prototype after an object was created", function() {
    var paul = new Mammal("Paul");
    Mammal.prototype.numberOfLettersInName = function() {
        return this.name.length;
    };
    // the following statement asks the paul object to call a function that was added
    // to the Mammal prototype after paul was constructed.
    equal(__, paul.numberOfLettersInName(), "how long is Paul's name?");
});

// helper function for inheritance. 
// From https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_Revisited
function extend(child, supertype){  
    child.prototype = supertype.prototype;  
} 

// "Subclass" Mammal
function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
}	

// configure inheritance
extend(Bat, Mammal);

test("Inheritance", function() {
    var lenny = new Bat("Lenny", "1.5m");
    equal(__, lenny.sayHi(), "what does Lenny say?");
    equal(__, lenny.wingspan, "what is Lenny's wingspan?");
});
