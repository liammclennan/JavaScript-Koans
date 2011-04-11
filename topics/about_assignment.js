
$(document).ready(function(){

	module("About Assignment (topics/about_assignment.js)");

	test("local variables", function() {
		var temp = 1; //Using var sets scope to local, interesting.
		equals(1, temp, "Assign a value to the variable temp");
	});

	test("global variables", function() {
		temp = 1;
		equals(temp, window.temp, 'global variables are assigned to the window object');
	});

});
