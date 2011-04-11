
$(document).ready(function(){
	
	module("About Asserts (topics/about_asserts.js)");

	test("ok", function() {
		ok(true, 'what will satisfy the ok assertion?');
	});
	
	test("not", function() {
		not(false, 'what is a false value?');
	});
	
	test("equals", function() {
		equals(1+1, 2, 'what will satisfy the equals assertion?');
	});
	
});
