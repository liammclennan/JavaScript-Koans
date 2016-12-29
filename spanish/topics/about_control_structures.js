module("Sobre Estructuras de Control (topics/about_control_structures.js)");

test("if", function() {
	var esPositivo = false;
	if (2 > 0) {
		esPositivo = true;
	}
	equal(__, esPositivo,  '¿Cuál es el valor de esPositivo?');
});

test("for", function() {
	var contador = 10;
	for (var i = 1; i <= 3; i++) {
		contador = contador + i;
	}
	equal(__, contador, '¿Cuál es el valor de contador?');
});

test("for in", function() {

	var person = {
		name: "Amory Blaine",
		age: 102
	};
	var resultado = "";

	for (var property_name in person) {
  		resultado = resultado + property_name;
	}
	equal(__, resultado, '¿Cuál es el valor de resultado?');
});

test("Operador Ternario", function() {
	var fruit = true ? "manzana" : "naranja";
	equal(__, fruit, '¿Cuál es el valor de fruta?');

	fruit = false ? "manzana" : "naranja";
	equal(__, fruit, '¿Cuál es el valor de fruta?');
});

test("switch", function() {
	var resultado = 0;
	switch (2) {
		case 1:
			resultado = 1;
			break;
		case 1+1:
			resultado = 2;
			break;
	}
	equal(__, resultado, '¿Cuál es el valor de resultado?');
});

test("switch caso por defecto", function() {
    var resultado = "Pippin";
    switch ("m") {
        case "f":
            resultado = "Frodo";
            break;
        case "s":
            resultado = "Samwise";
                break;
        default:
            resultado = "Merry";
            break;
    }
    equal(__, resultado, '¿Cuál es el valor de resultado?');
});

test("null coalescencia", function() {
    var resultado = null || "un valor";
    equal(__, resultado, '¿Cuál es el valor de resultado?');
});
