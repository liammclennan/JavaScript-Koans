
$(document).ready(function(){

	module("About Equality (topics/about_equality.js)");

	test("numeric equality", function() {
		equals(3 + 4,  7, 'hmmmm?');
	});

	test("string equality", function() {
		equals("3" + "7", "37", "concatenate the strings");
	});

	test("equality without type coercion", function() {
		ok(3 === 3, 'what is exactly equal to 3?');
	});

	test("equality with type coercion", function() {
		ok(3 == "3", 'what string is equal to 3, with type coercion?');
	});

	test("string literals", function() {
		equals("frankenstein", 'frankenstein', "quote types are interchangable, but must match.");
	});

});

