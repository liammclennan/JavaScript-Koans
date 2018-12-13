
var __ = "incomplete";

// ignore this. It simplifies determining array equality
Array.prototype.equalTo = function(compareTo) {
	if (this.length !== compareTo.length) {
		return false;
	}
	for(var i = 0; i < compareTo.length; i++) {
		if (this[i] !== compareTo[i]) {
			return false;
		}
	}
	return true;
};

(function() {

	var lastAssertLogReason, ignoreFurtherFailures = false;
	var zenMessages = [
		"El camino a la iluminación tiene muchas piedras",
		"No te desvíes del camino, porque la iluminación viene con la perseverancia",
		"El único Zen que encuentras en las cumbres de las montañas es el Zen que tu llevas allí",
		"La iluminación ocurre cuando alguien se inspira en la información y la usa para mejorar su vida",
		"Domina la mente en lugar de ser dominado por ella",
		"El zen no es una especie de excitación, sino la concentración en nuestra rutina diaria habitual",
		"Creo que la autoconciencia es probablemente lo más importante para ser un campeón",
		"La recompensa de toda acción se encuentra en la iluminación",
		"La iluminación duradera sólo puede lograrse mediante el ejercicio persistente del amor verdadero",
		"El verdadero significado de la iluminación es mirar con ojos inmaculados en toda la oscuridad",
		"No creas que necesariamente seras consciente de tu propia iluminación",
		"La iluminación debe venir poco a poco - de lo contrario, abrumaría",
		"El regalo más grande para la gente es dar tu iluminación, compartirla. Tiene que ser lo mejor",
		"En la mente del principiante hay muchas posibilidades, pero en la del experto pocas",
		"Sólo la mano que borra puede escribir lo verdadero",
		"La iluminación es la decepción final del ego",
		"El hombre sufre sólo porque toma en serio lo que los dioses hicieron por diversión",
		"Es fácil creer que somos cada ola y olvidar que también somos el océano",
		"Meditar en profundidad es mi mayor hobby. Es mi hora Zen. Simplemente salgo de mi zona",
		"La auto-motivación es la iluminación de la mente, empoderá el corazón y enriquece el alama para alzarse, despertarse y alcanzar el noble y codiciado objetivo aunque implique recorrer el camino totalmente solo."
	];

	QUnit.config.reorder = false;

	QUnit.done(function(results) {
		var failures = results.failed;
		var total = results.total;
		if (failures > 0) {
			var failed = $('ol#qunit-tests > li.fail');
			failed.hide();
			$(failed[0]).show();
		}
		if (failures < total) {
			$('h3.welcome_message').hide();
		}
		if (failures > 0) {
			$("#zen-help").show();
		}
		$("body").scrollTop($(document).height());
	});

	QUnit.log(function(result) {
		lastAssertLogReason = result.message;
	});

	QUnit.testDone(function(result) {
		var message;
		if (!ignoreFurtherFailures && result.failed > 0) {
			ignoreFurtherFailures = true;
			message = "" + randomZenMessage() + "\nTry meditating on this: " + result.module + ": " + result.name + " (" + lastAssertLogReason + ")";
			$("#zen-help").html(message.replace(/\n/g, "<br /><br />"));
			console.log(message);
		}
	});

	function randomZenMessage() {
		var randomIndex = Math.floor(Math.random() * zenMessages.length);
		var zenMessage = zenMessages[randomIndex];
		zenMessage = zenMessage.charAt(0).toUpperCase() + zenMessage.substr(1);
		return "" + zenMessage + ".";
	}

})();
