module("Sobre this (topics/about_this.js)");

test("'this' dentro de un método", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hola, mi nombre es " + this.__;
		}
	}
	equal(person.intro(), "Hola, mi nombre es bob", "¿Sí un objeto tiene un método puede acceder a las propiedades dentro de él?");
});

test("'this' sin adjuntar a la función", function () {
	var person = {
		globalName: 'bob',
		intro: function () {
			return "Hola, mi nombre es " + this.globalName;
		}
	}

	var alias = person.intro;

	window.__ = 'Peter';
	equal(alias(), "Hola, mi nombre es Peter", '¿A qué se refiere "this" cuando no es parte de un objeto?');
});

test("'this' definido explícitamente", function () {
	var person = {
		name: 'bob',
		intro: function () {
			return "Hola, mi nombre es " + this.name;
		}
	}

	var message = person.intro.call({__: "Frank"});
	equal(message, "Hola, mi nombre es Frank", '¿A qué se refiere "this" cuando se utiliza el método "call()"');
});
