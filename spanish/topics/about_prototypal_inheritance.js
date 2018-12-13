module("Sobre Herencia por prototipos (topics/about_prototypal_inheritance.js)");

var Mammal = function(nombre) {
    this.nombre = nombre;
}
Mammal.prototype = {
    diHola: function() {
        return "Hola, mi nombre es " + this.nombre;
    }
}

test("Definiendo una 'clase'", function() {
    var eric  = new Mammal("Eric");
    equal(__, eric.diHola(), '¿Qué dirá Eric?');
});

Mammal.prototype.miFavorito = function() {
    return "La frase favorita de " + this.nombre + "es " + this.diHola();
}

test("Más funciones", function() {
    var bobby = new Mammal("Bobby");
    equal(__, bobby.miFavorito(), "¿Cuál es la frase favorita de Bobby?");
});

test("Llamando a funciones añadidas al prototipo después de haber sido creado el objeto", function() {
    var paul = new Mammal("Paul");
    Mammal.prototype.numeroDeLetrasEnNombre = function() {
        return this.nombre.length;
    };
    equal(__, paul.numeroDeLetrasEnNombre(), "¿Cómo de largo es el nombre de Paul?");
});

function extend(child, supertype){
    child.prototype = supertype.prototype;
}

function Bat(nombre, altura) {
    Mammal.call(this, nombre);
    this.altura = altura;
}

extend(Bat, Mammal);

test("Herencia", function() {
    var lenny = new Bat("Lenny", "1.5m");
    equal(__, lenny.diHola(), "¿Qué dice Lenny?");
    equal(__, lenny.altura, "¿Cuál es la altura de Lenny?");
});
