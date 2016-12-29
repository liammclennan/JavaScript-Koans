module("Sobre la Reflexión (topics/about_reflection.js)");

function A() {
    this.aprop = "A";
};

function B() {
    this.bprop = "B";
};

B.prototype = new A();

test("typeof", function() {
    equal(__, typeof({}), '¿Cuál es el tipo de un objeto vacío?');
    equal(__, typeof('manzana'), '¿Cuál es el tipo de una cadena?');
    equal(__, typeof(-5), '¿Cuál es el tipo de -5?');
    equal(__, typeof(false), '¿Cuál es el tipo de false?');
});

test("Enumeración de propiedades", function() {
    var claves = [];
    var valores = [];
    var persona = {nombre: 'Amory Blaine', age: 102, unemployed: true};
    for(var nombrePropiedad in persona) {
        claves.push(nombrePropiedad);
        valores.push(persona[nombrePropiedad]);
    }
    ok(claves.equalTo(['__','__','__']), '¿Cuáles son los nombres de las propiedades del objeto?');
    ok(valores.equalTo(['__',__,__]), '¿Cuáles son los valores de las propiedades del objeto?');
});

test("hasOwnProperty", function() {
    var b = new B();
    var nombrePropiedad;

    var claves = [];
    for (nombrePropiedad in b) {
        claves.push(nombrePropiedad);
    }
    equal(__, claves.length, '¿Cuántos elementos hay en el array "claves"?');
    deepEqual([__, __], claves, '¿Cuáles son los elementos del array?');

    var propiasClaves = [];
    for(nombrePropiedad in b) {
        if (b.hasOwnProperty(nombrePropiedad)) {
            propiasClaves.push(nombrePropiedad);
        }
    }
    equal(__, propiasClaves.length, 'Cuántos elementos hay en el array "propiasClaves"');
    deepEqual([__], propiasClaves, '¿Cuáles son los elementos del array?');
});

test("constructor property", function () {
    var a = new A();
    var b = new B();
    equal(__, typeof(a.constructor), "¿Cuál es el tipo del constructor de 'a'");
    equal(__, a.constructor.name, "¿Cuál es el nombre del constructor de 'a'");
    equal(__, b.constructor.name, "¿Cuál es el nombre del constructor de 'b'");
});

test("eval", function() {
    var resultado = "";
    eval("resultado = 'tarta' + ' de ' + 'manzana'");
    equal(__, resultado, '¿Cuál es el valor de resultado?');
});
