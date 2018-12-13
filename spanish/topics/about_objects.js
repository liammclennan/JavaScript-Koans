
module("Sobre Objetos (topics/about_objects.js)");

test("tipo de objeto", function() {
    var empty_object = {};
    equal(__, typeof(empty_object), '¿Cuál es el tipo de un objeto?');
});

test("Notación del objeto literal", function() {
    var persona = {
        __:__,
        __:__
    };
    equal("Amory Blaine", persona.nombre, "¿Cuál es el nombre de la personaa?");
    equal(102, persona.edad, "¿Cuál es la edad de la personaa?");
});

test("Añadiendo propiedades dinámicamente", function() {
    var persona = {};
    persona.__ = "Amory Blaine";
    persona.__ = 102;
    equal("Amory Blaine", persona.nombre, "¿Cuál es el nombre de la personaa?");
    equal(102, persona.edad, "¿Cuál es la edad de la personaa?");
});

test("Añadiendo propiedades desde cadenas", function() {
    var persona = {};
    persona["__"] = "Amory Blaine";
    persona["__"] = 102;
    equal("Amory Blaine", persona.nombre, "¿Cuál es el nombre de la personaa?");
    equal(102, persona.edad, "¿Cuál es la edad de la personaa?");
});

test("Añadiendo funciones", function() {
    var persona = {
        nombre: "Amory Blaine",
        edad: 102,
        toString: function() {
            return __;  // TRUCO: utiliza la palabra clave 'this' para referirse al objeto persona.
        }
    };
    equal("I Amory Blaine am 102 years old.", persona.toString(), "what should the toString function be?");
});
