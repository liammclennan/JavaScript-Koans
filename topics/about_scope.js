
$(document).ready(function(){

	module("About Scope (topics/about_scope.js)");

	thisIsAGlobalVariable = 77;
	
	test("global variables", function() {
		equals(thisIsAGlobalVariable, __, 'is thisIsAGlobalVariable defined in this scope?');
	});
	
	test("variables declared inside of a function", function() {
		var outerVariable = "outer";
		
		var innerFunction = function() {
			var innerVariable = "inner";
			equals(outerVariable, __, 'is outerVariable defined in this scope?');
			equals(innerVariable, __, 'is innerVariable defined in this scope?');
		};
		
		equals(outerVariable, __, 'is outerVariable defined in this scope?');
		var isInnerVariableDefined = true;
		try {
			innerVariable
		} catch(e) {
			isInnerVariableDefined = false;
		}
		equals(isInnerVariableDefined, __, 'is innerVariable defined in this scope?');
	});
		

});
	