
module("Sobre Cadenas (topics/about_strings.js)");

test("Delimitadores", function() {
    var singleQuotedString = 'manzana';
    var doubleQuotedString = "manzana";
    equal(__, singleQuotedString === doubleQuotedString, '¿Son las dos cadenas iguales?');
});

test("Concatenación", function() {
    var fruta = "manzana";
    var postre = "tarta";
    equal(__, postre + " de " + fruta, 'Cuál es el valor de "postre" + " de " + "fruta"?');
});

test("Tipo de carácter", function() {
    var characterType = typeof("Amory".charAt(1));
    equal(__, characterType, 'Javascript no tiene tipo de carácter');
});

test("Caracteres escapados", function() {
    var cadenaConCaracterEscapado  = "\u004danzana";
    equal(__, cadenaConCaracterEscapado, '¿Cuál es el valor de "cadenaConCaracterEscapado"?');
});

test("cadena.length", function() {
    var fruta = "manzana";
    equal(__, fruta.length, '¿Cuál es el valor de "fruta.length"?');
});

test("slice", function() {
    var fruta = "tarta de manzana";
    equal(__, fruta.slice(0,5), '¿Cuál es el valor de "fruta.slice(0,5)""?');
});
