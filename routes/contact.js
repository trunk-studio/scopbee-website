var express = require('express');
var router = express.Router();
var util = require('util');
var fs = require('fs');

/* POST contact mail. */
router.post('/', function(req, res) {

	console.log('=== POST contact mail ===');

	var contactName    = req.body.name    || 'NO_NAME',
		  contactEmail   = req.body.email   || 'NO_EMAIL',
		  contactSubject = req.body.subject || 'NO_SUBJECT',
		  contactMessage = req.body.message || 'NO_MWSSAGE';

	var mailContent = fs.readFileSync(__dirname + '/../mailTemplates/contact.html').toString();

	var mailConfirmation = fs.readFileSync(__dirname + '/../mailTemplates/confirmation.html').toString();

	var message = {
		html: util.format(mailContent, contactName, contactEmail, contactMessage),
		subject: '[KDH-WEB] New message from ' + contactName,
		replyTo: contactEmail,
		to: 'kyle@kdhservice.com',
		bcc: 'kyle@kdhservice.com'
	};

	var message2 = {
		html: util.format(mailConfirmation, contactName),
		subject: '[KDH] Your message was sent successfully.',
		replyTo: 'kyle@kdhservice.com',
		to: contactEmail,
		bcc: 'kyle@kdhservice.com'
	};

	server.mailer.send(message).then(function (result) {
		console.log("sending mail... done");
	});

	server.mailer.send(message2).then(function (result) {
		console.log("sending confirmation mail... done");
	});

	res.json({});
});

module.exports = router;
