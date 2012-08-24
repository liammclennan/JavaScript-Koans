// demonstrate objects prototype chain

// https://developer.mozilla.org/en/JavaScript/Guide/Inheritance_and_the_prototype_chain
module("About Prototype Chain (topics/about_prototype_chain.js)");

var father = {
  b: 3,
  c: 4
};

var child = Object.create(father);
child.a = 1;
child.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [child]               1    2
 * ---------------------- ---- ---- ----
 * [father]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("Is there an 'a' and 'b' own property on child?", function () {
  equals(child.hasOwnProperty('a'), __, 'child.hasOwnProperty(\'a\')?');
  equals(child.hasOwnProperty('b'), __, 'child.hasOwnProperty(\'b\')?');
});

test("Is there an 'a' and 'b' property on child?", function () {
  equals(child.a, __, 'what is \'a\' value?');
  equals(child.b, __, 'what is \'b\' value?');
});

test("If 'b' was removed, whats b value?", function () {
  delete child.b;
  equals(child.b, __, 'what is \'b\' value now?');
});


test("Is there a 'c' own property on child?", function () {
  equals(child.hasOwnProperty('c'), __, 'child.hasOwnProperty(\'c\')?');
});

// Is there a 'c' own property on child? No, check its prototype
// Is there a 'c' own property on child.[[Prototype]]? Yes, its value is...
test("Is there a 'c' property on child?", function () {
  equals(child.c, __, 'what is the value of child.c?');
});


// Is there a 'd' own property on child? No, check its prototype
// Is there a 'd' own property on child.[[Prototype]]? No, check it prototype
// child.[[Prototype]].[[Prototype]] is null, stop searching, no property found, return...
test("Is there an 'd' property on child?", function () {
  equals(child.d, __, 'what is the value of child.d?');
});


