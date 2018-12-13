module("Sobre Funciones y clausuras (Closures) (topics/about_functions_and_closure.js)");

test("Definiendo funciones directamente", function() {
    var resultado = "a";
    function cambiaResultado() {

        resultado = "b";
    };
    cambiaResultado();
    equal(__, resultado, '¿Cuál es el valor de resultado?');
});

test("assigning functions to variables", function() {
    var triple = function(input) {
        return input * 3;
    };
    equal(__, triple(4), '¿Cuál es el triple de 4?');
});

test("Funciones autoejecutables", function() {
    var valorPublico = "compartido";

    (function(vp) {
        var valorSecreto = "contraseña";
        equal(__, vp, '¿Cuál es el valor de vp?');
        equal("__", typeof(valorSecreto), "¿Está disponible valorSecreto en este contexto?");
        equal("__", typeof(valorPublico), "¿Está disponible valorPublico en este contexto?");
    })(valorPublico);

    equal("__", typeof(valorSecreto), "¿Está disponible valorSecreto en este contexto?");
    equal("__", typeof(valorPublico), "¿Está disponible valorPublico en este contexto?");
});

test("arguments array", function() {
    var add = function() {
        var total = 0;
        for(var i = 0; i < arguments.length; i++) {
            // Completar la implementación de este método para que devuelva la suma de sus argumentos
            // __
        }
        // __
    };

    equal(15, add(1,2,3,4,5), "add 1,2,3,4,5");
    equal(9, add(4,7,-2), "add 4,7,-2");
});

test("Usando call para invocar funciones",function(){
    var invokee = function( message ){
        return this + message;
    };

    var resultado = invokee.call("¡Soy this!", "¿De dónde vine?");

    equal(__, resultado, "¿Cuál será el valor de this?");
});

test("Usando apply para invocar funciones",function(){
    var invokee = function( message1, message2 ){
        return this + message1 + message2;
    };

    var resultado = invokee.apply("¡Soy this!", ["Soy arg1","Soy arg2"]);
    equal(__, resultado, "¿Cuál será el valor de this?");
});
