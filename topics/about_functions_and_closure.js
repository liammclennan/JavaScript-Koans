module("About Functions And Closure (topics/about_functions_and_closure.js)");

test("defining functions directly", function() {
    var result = "a";
    function changeResult() {
        // the ability to access variables defined in the same scope as the function is known as 'closure'
        result = "b";
    };
    changeResult();
    equal(__, result, 'what is the value of result?');
});

test("assigning functions to variables", function() {
    var triple = function(input) {
        return input * 3;
    };
    equal(__, triple(4), 'what is triple 4?');
});

test("self invoking functions", function() {
    var publicValue = "shared";

    // self invoking functions are used to provide scoping and to alias variables
    (function(pv) {
        var secretValue = "password";
        equal(__, pv, 'what is the value of pv?');
        equal("__", typeof(secretValue), "is secretValue available in this context?");
        equal("__", typeof(publicValue), "is publicValue available in this context?");
    })(publicValue);

    equal("__", typeof(secretValue), "is secretValue available in this context?");
    equal("__", typeof(publicValue), "is publicValue available in this context?");
});

test("arguments array", function() {
    var add = function() {
        var total = 0;
        for(var i = 0; i < arguments.length; i++) {
            // complete the implementation of this method so that it returns the sum of its arguments
            // __
        }
        // __
    };

    equal(15, add(1,2,3,4,5), "add 1,2,3,4,5");
    equal(9, add(4,7,-2), "add 4,7,-2");
});

test("using call to invoke function",function(){
    var invokee = function( message ){
        return this + message;    
    };
    
    //another way to invoke a function is to use the call function which allows 
    //you to set the caller's "this" context.  Call can take any number of arguments: 
    //the first one is always the context that this should be set to in the called
    //function, and the arguments to be sent to the function, multiple arguments are separated by commas.
    var result = invokee.call("I am this!", "Where did it come from?");
        
    equal(__, result, "what will the value of invokee's this be?");
});

test("using apply to invoke function",function(){
    var invokee = function( message1, message2 ){
        return this + message1 + message2;    
    };
    
    //similar to the call function is the apply function.  Apply only has two
    //arguments:  the first is the context that this should be set to in the called
    //function and the second is the array of arguments to be passed into the called function.
    var result = invokee.apply("I am this!", ["I am arg1","I am arg2"]);
        
    equal(__, result, "what will the value of invokee's this be?");
});

