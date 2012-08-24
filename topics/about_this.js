module("About this (topics/about_this.js)");

test("'this' inside a method", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.__;
		} 
	}
	equals(person.intro(), "Hello, my name is bob");
});

test("'this' on unattached function", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hello, my name is " + this.name;
		} 
	}

	var alias = person.intro;
	
	// if the function is not called as an object property 'this' is the global context 
	// (window in a browser)
	window.__ = 'Peter';
	equals("Hello, my name is Peter", alias());
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
	equals(message, "Hello, my name is Frank");
});

// extra credit: underscore.js has a 'bind' function http://documentcloud.github.com/underscore/#bind
// read the source and see how it is implemented

