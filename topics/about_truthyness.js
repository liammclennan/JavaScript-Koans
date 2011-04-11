
$(document).ready(function(){

	module("About Truthyness (topics/about_truthyness.js)");

	test("truthyness of positive numbers", function() {
		var oneIsTrue = 1 ? true : false; //Why use ternary here? equals(1, true, 'is one true?');
		equals(oneIsTrue, true, 'is one true?');
	});
	
	test("truthyness of negative numbers", function() {
		var negativeOneIsTrue = -1 ? true : false;
		equals(negativeOneIsTrue, true, 'is -1 true?');
	});
	
	test("truthyness of zero", function() {
		var zeroIsTrue = 0 ? true : false;
		equals(zeroIsTrue, false, 'is 0 true?');
	});

	test("truthyness of null", function() {
		var nullIsTrue = null ? true : false;
		equals(nullIsTrue, false);
	});
	
});
