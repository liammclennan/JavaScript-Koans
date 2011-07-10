$(document).ready(function(){

	module("About Truthyness (topics/about_truthyness.js)");

	test("truthyness of positive numbers", function() {
		var oneIsTrue = 1 ? true : false;
		equals(oneIsTrue, __, 'is one true?');
	});
	
	test("truthyness of negative numbers", function() {
		var negativeOneIsTrue = -1 ? true : false;
		equals(negativeOneIsTrue, __, 'is -1 true?');
	});
	
	test("truthyness of zero", function() {
		var zeroIsFalse = 0 ? true : false;
		equals(zeroIsFalse, __, 'is 0 true?');
	});

	test("truthyness of null", function() {
		var nullIsFalse = null ? true : false;
		equals(nullIsFalse, __);
	});
	
});
