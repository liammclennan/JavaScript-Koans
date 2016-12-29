
module("Sobre Asignaciones (topics/about_assignment.js)");

test("variables locales", function() {
    var temp = __;
    equal(temp, 1, "Asigna un valor a la variable temp");
});

test("variables globales", function() {
    temp = 1;
    equal(window.__, temp, 'Las variables globales se asignan al objeto window');
});
