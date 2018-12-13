
module("Sobre Operadores (topics/about_operators.js)");

test("Suma", function() {
  var resultado = 0;
  for (var i = 0; i <= 5; i++) {
    resultado = resultado + i;
  }
  equal(__, resultado, "¿Cuál es el valor de resultado?");
});

test("Suma por asignación", function() {
  var resultado = 0;
  for (var i = 0; i <=5; i++) {
    resultado += i;
  }
  equal(__, resultado, "¿Cuál es el valor de resultado?");
});

test("Resta", function() {
  var resultado = 5;
  for (var i = 0; i <= 2; i++) {
    resultado = resultado - i;
  }
  equal(__, resultado, "¿Cuál es el valor de resultado?");
});

test("Resta por asignación", function() {
  var resultado = 5;
  for (var i = 0; i <= 2; i++) {
    resultado -= i;
  }
  equal(__, resultado, "¿Cuál es el valor de resultado?");
});

test("Módulo", function() {
  var resultado = 10;
  var x = 5;
  resultado %= x;
  equal(__, resultado, "¿Cuál es el valor de resultado?");
});
