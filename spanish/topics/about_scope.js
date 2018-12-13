module("Sobre Ámbtitos (Scope) (topics/about_scope.js)");

estaEsUnaVariableGlobal = 77;

test("Variables globales", function() {
    equal(__, estaEsUnaVariableGlobal, '¿Está definida "estaEsUnaVariableGlobal" en este ámbito?');
});

test("Variables declaradas dentro de una función", function() {
    var variableExterior = "outer";

    (function() {
        var variableInterior = "inner";
        equal(__, variableExterior, '¿Está definida "variableExterior" en este ámbito?');
        equal(__, variableInterior, '¿Está definida "variableInterior" en este ámbito?');
    })();

    equal(__, variableExterior, '¿Está definida "variableExterior" en este ámbito?');
    equal(__, typeof(variableInterior), '¿Está definida "variableInterior" en este ámbito?');
});
