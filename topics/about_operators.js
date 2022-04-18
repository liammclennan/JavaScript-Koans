
module("About Operators (topics/about_operators.js)");

test("addition", function() {
  var result = 0;
  //starting i at 0, add i to result and increment i by 1 until i is equal to 5
  for (var i = 0; i <= 5; i++) {
    result = result + i;
  }
  equal(15, result, "What is the value of result?");
});

test("assignment addition", function() {
  var result = 0;
  for (var i = 0; i <=5; i++) {
    //the code below is just like saying result = result + i; but is more concise
    result += i;
  }
  equal(15, result, "What is the value of result?");
});

test("subtraction", function() {
  var result = 5;
  for (var i = 0; i <= 2; i++) {
    result = result - i;
  }
  equal(2, result, "What is the value of result?");
});

test("assignment subtraction", function() {
  var result = 5;
  for (var i = 0; i <= 2; i++) {
    result -= i;
  }
  equal(2, result, "What is the value of result?");
});

//Assignment operators are available for multiplication and division as well
//let's do one more, the modulo operator, used for showing division remainder

test("modulus", function() {
  var result = 10;
  var x = 5;
  //again this is exactly the same as result = result % x
  result %= x;
  equal(0, result, "What is the value of result?");
});
