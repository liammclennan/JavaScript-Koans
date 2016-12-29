
module("Sobre Aserciones (topics/about_asserts.js)");

test("ok", function() {
    ok(__ === true, '¿Que satisfacerá a la aserción ok?');
});

test("not ok", function() {
    ok(__ === false, '¿Qué es un valor falso?');
});

test("equal", function() {
    equal(__, 1 + 1, '¿Qué satisfará la aserción igual?');
});
