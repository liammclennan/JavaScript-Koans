
module("Sobre Igualdad (topics/about_equality.js)");

test("Igualdad entre números", function() {
    equal(3 + __,  7, "Concatenar números");
});

test("Igualdad entre cadenas", function() {
    equal("3" + __, "37", "Concatenar cadenas");
});

test("Igualdad sin verificación de tipo", function() {
    ok(3 === __, '¿Qué es exactamente igual a 3?');
});

test("Igualdad con verificación de tipo", function() {
    ok(3 == "__", '¿Qué cadena es igual a 3, con coerción de tipo?');
});

test("Cadenas literales", function() {
    equal(__, "frankenstein", "Los tipos de comillas son intercambiables, pero deben coincidir.");
    equal(__, 'frankenstein', "Los tipos de comillas pueden pueden ser simples o dobles.");
});
