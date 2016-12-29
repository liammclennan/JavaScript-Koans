
module("Sobre la vericidad (topics/about_truthyness.js)");

test("La Veracidad de los números positivos", function() {
    var unoEsVerdadero = 1 ? true : false;
    equal(__, unoEsVerdadero, '¿Es 1 verdadero?');
});

test("truthyness of negative numbers", function() {
    var menosUnoEsVerdadero = -1 ? true : false;
    equal(__, menosUnoEsVerdadero, '¿Es -1 verdadero?');
});

test("truthyness of zero", function() {
    var ceroEsVerdadero = 0 ? true : false;
    equal(__, ceroEsVerdadero, '¿Es 0 verdadero?');
});

test("truthyness of null", function() {
    var nullEsVerdadero = null ? true : false;
    equal(__, nullEsVerdadero, '¿Es null verdadero?');
});
