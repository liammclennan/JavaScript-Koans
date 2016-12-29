
module("Sobre Números (topics/about_numbers.js)");

test("tipos", function() {
    var typeOfIntegers = typeof(6);
    var typeOfFloats = typeof(3.14159);
    equal(__, typeOfIntegers === typeOfFloats, 'Son los números enteros y decimales del mismo tipo?');
    equal(__, typeOfIntegers, '¿Cuál es el tipo numérico en javascript?');
    equal(__, 1.0, '¿Cuál es el número entero equivalente a 1,0?');
});

test("NaN", function() {
    var resultOfFailedOperations = 7/'manzana';
    equal(__, isNaN(resultOfFailedOperations), '¿Qué satisfará la afirmación de igualdad?');
    equal(__, resultOfFailedOperations == NaN, '¿Es NaN == NaN?');
});
