
module("Sobre Expresiones Regulares (topics/about_regular_expressions.js)");

test("exec", function() {
    var buscadorNumeros = /(\d).*(\d)/;
    var resultados = buscadorNumeros.exec('¿Qué pasaría si 6 se tornará 9?');
    ok(resultados.equalTo([__, __, __]), '¿Cuál es el valor de "resultados?"');
});

test("test", function() {
    var seleccionContenido = /select/.test("  select * from users ");
    equal(__, seleccionContenido, '¿La cadena proporcionada contiene "select"?');
});

test("match", function() {
    var coincidencias = "¿Qué pasaría si 6 se tornará 9?".match(/(\d)/g);
    ok(coincidencias.equalTo([__, __]), '¿Cuál es el valor de las "coincidencias"?');
});

test("replace", function() {
    var tarta = "tarta de manzana".replace("manzana", "fresa");
    equal(__, tarta, '¿Cuál es el valor de "tarta"?');

    tarta = "¿Qué pasaría si 6 se tornará 9?".replace(/\d/g, function(number) {
        var mapa = {'6': 'six','9': 'nine'};
        return mapa[number];
    });
    equal(__, tarta, '¿Cuál es el valor de "tarta"?');
});

// EL FIN
