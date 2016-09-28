
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
		"The path to enlightenment has many stones",
		"Do not stray from your path, for enlightenment comes with perseverance",
		"The only Zen you find on tops of mountains is the Zen you bring there",
		"Enlightenment occurs when someone becomes inspired by information and uses it to enhance their life",
		"Be master of mind rather than mastered by mind",
		"Zen is not some kind of excitement, but concentration on our usual everyday routine",
		"I think self-awareness is probably the most important thing towards being a champion",
		"The reward of all action is to be found in enlightenment",
		"lasting enlightenment can be achieved only through persistent exercise of real love",
		"The real meaning of enlightenment is to gaze with undimmed eyes on all darkness",
		"Do not think you will necessarily be aware of your own enlightenment",
		"Enlightenment must come little by little - otherwise it would overwhelm",
		"The greatest gift is to give people your enlightenment, to share it. It has to be the greatest",
		"In the beginner's mind there are many possibilities, but in the expert's mind there are few",
		"Only the hand that erases can write the true thing",
		"Enlightenment is ego's ultimate disappointment",
		"Man suffers only because he takes seriously what the gods made for fun",
		"It is easy to believe we are each waves and forget we are also the ocean",
		"Working out is my biggest hobby. It's my Zen hour. I just zone out",
		"A self-motivation is an enlightenment of mind, empowerment of heart and enrichment of soul to arise, awake and ascend to achieve the noble and coveted goal even if it entails walking on its enervating path all alone"
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
