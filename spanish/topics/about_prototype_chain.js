module("Sobre la cadena de prototipos (topics/about_prototype_chain.js)");

var padre = {
  b: 3,
  c: 4
};

var hijo = Object.create(padre);
hijo.a = 1;
hijo.b = 2;

/*
 * ---------------------- ---- ---- ----
 *                      [a]  [b]  [c]
 * ---------------------- ---- ---- ----
 * [hijo]               1    2
 * ---------------------- ---- ---- ----
 * [padre]                   3    4
 * ---------------------- ---- ---- ----
 * [Object.prototype]
 * ---------------------- ---- ---- ----
 * [null]
 * ---------------------- ---- ---- ----
 * */

test("¿Existe la propiedad 'a' y 'b' en hijo?", function () {
  equal(__, hijo.hasOwnProperty('a'), 'hijo.hasOwnProperty(\'a\')?');
  equal(__, hijo.hasOwnProperty('b'), 'hijo.hasOwnProperty(\'b\')?');
});

test("¿Existe la propiedad 'a' y 'b' en hijo?", function () {
  equal(__, hijo.a, '¿Cuál es el valor de \'a\'?');
  equal(__, hijo.b, '¿Cuál es el valor de \'b\'?');
});

test("Si se eliminó 'b', ¿cuál es b valor?", function () {
  delete hijo.b;
  equal(__, hijo.b, '¿Cuál es el valor de \'b\' ahora?');
});


test("¿Hay una propiedad 'd' en hijo?", function () {
  equal(__, hijo.hasOwnProperty('c'), 'hijo.hasOwnProperty(\'c\')?');
});

test("¿Hay una propiedad 'c' en hijo?", function () {
  equal(__, hijo.c, '¿Cuál es the valor de hijo.c?');
});

test("¿Hay una propiedad 'd' en hijo?", function () {
  equal(__, hijo.d, '¿Cuál es the valor de hijo.d?');
});
