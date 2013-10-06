
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
	});

})();
