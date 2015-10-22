var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');

/* POST subscription mail. */
router.post('/', function(req, res) {

	console.log('=== POST subscription mail ===');
	var subscriptionEmail   = req.body.email   || 'NO_EMAIL';

	var message = {
		html: subscriptionEmail,
		subject: '[SCOPBEE-360] New subscription message',
		to: 'kyle@trunk-studio.com'
	};

	server.mailer.send(message).then(function (result) {
		console.log("sending mail... done");
	});

	res.json({});
});

module.exports = router;
