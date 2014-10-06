module("About this (topics/about_this.js)");

test("'this' inside a method", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.__;
		} 
	}
	equal(person.intro(), "Hello, my name is bob", "If an object has a method can you access properties inside it?");
});

test("'this' on unattached function", function () {
	var person = {
		globalName: 'bob',
		intro: function () {
			return "Hello, my name is " + this.globalName;
		} 
	}

	var alias = person.intro;
	
	// if the function is not called as an object property 'this' is the global context 
	// (window in a browser). This is an example. Please do not do this in practise.
	window.__ = 'Peter';
	equal(alias(), "Hello, my name is Peter", "What does 'this' refer to when it is not part of an object?");
});

test("'this' set explicitly", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.name;
		} 
	}

	// calling a function with 'call' lets us assign 'this' explicitly
	var message = person.intro.call({__: "Frank"});
	equal(message, "Hello, my name is Frank", "What does 'this' refer to when you use the 'call()' method?");
});

// extra credit: underscore.js has a 'bind' function http://documentcloud.github.com/underscore/#bind
// read the source and see how it is implemented

