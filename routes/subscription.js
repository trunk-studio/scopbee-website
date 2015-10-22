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
		subject: '[KDH-WEB] New message from ',
		to: 'william@trunk-studio.com'
	};


	server.mailer.send(message).then(function (result) {
		console.log("sending mail... done");
	});


	res.json({});
});

(function() {

  $( '#subscriptionForm' ).submit(function( event ) {
    event.preventDefault();

    var $form = $( this ), url = $form.attr( "action" );

    var postData = {
      email:   $form.find( "input[name='email']" ).val(),
    };

    var posting = $.post( url, postData );

    posting.done(function( data ) {

      $form.find( "input[name='email']" ).val( '' );

      alert( "Your email are subscribe successful" );
    });
  });

  $( "button[type='submit']", '#subscriptionForm').removeAttr('disabled');

});

module.exports = router;
