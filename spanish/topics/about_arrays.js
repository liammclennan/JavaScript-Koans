module("Sobre Arrays (topics/about_arrays.js)");

test("Sintaxis literal y indexación de array", function() {
    var favouriteThings = ["puerta de la bodega", 42, true];
    equal(__, favouriteThings[0], '¿Cuál es la primera posición del array?');
    equal(__, favouriteThings[1], '¿Cuál es la segunda posición del array?');
    equal(__, favouriteThings[2], '¿Cuál es la tercera posición del array?');
});

test("Tipo del array", function() {
    equal(__, typeof([]), '¿Cuál es el tipo del array?');
});

test("length", function() {
    var collection = ['a','b','c'];
    equal(__, collection.length, '¿Cuál es la logitud del array?');
});

test("splice", function() {
    var daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    var workingWeek = daysOfWeek.splice(__, __);
    var weekend = daysOfWeek;

    deepEqual(workingWeek, ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'], '¿Cuál es el valor de la semana laboral?');
    deepEqual(weekend, ['Sábado', 'Domingo'], '¿Cuál es el valor del fin de semana?');
});

test("Gestión de la pila", function() {
    var stack = [];
    stack.push("primero");
    stack.push("segundo");

    equal(__, stack.pop(), '¿Cuál será el primer valor que eliminó del array?');
    equal(__, stack.pop(), '¿Cuál será el segundo valor que eliminó del array?');
});

test("Gestión de la cola", function() {
    var queue = [];
    queue.push("primero");
    queue.push("segundo");
    queue.unshift("tercero");

    equal(__, queue.shift(), '¿Qué será desplazado en primer lugar?');
    equal(__, queue.shift(), '¿Qué será desplazado en segundo lugar?');
});
